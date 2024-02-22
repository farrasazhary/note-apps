// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/noteList";
import SearchBar from "../components/searchBar";
import LoadingItem from "../components/loadingItem";
import { getArchivedNotes, deleteNote, unarchiveNote } from "../utils/api";
import { LocaleConsumer } from "../contexts/LocaleContext";

function ArchivedPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

function ArchivePage({ defaultKeyword, keywordChange }) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState(defaultKeyword || "");

  useEffect(() => {
    async function fetchNotes() {
      setLoading(true);
      const { data } = await getArchivedNotes();
      setNotes(data || []);
      setTimeout(() => {
        setLoading(false);
      }, 400); // Menetapkan loading menjadi false setelah sekitar 1 detik
    }
    fetchNotes();
  }, []);

  const onDeleteHandler = async (id) => {
    await deleteNote(id);
    setLoading(true);
    const { data } = await getArchivedNotes();
    setNotes(data || []);

    setLoading(false);
  };

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    keywordChange(keyword);
  };

  const onUnarchiveHandler = async (id) => {
    await unarchiveNote(id);
    setLoading(true);
    const { data } = await getArchivedNotes();
    setNotes(data || []);

    setLoading(false);
  };

  const filteredNotes = notes
    .map((note) => ({
      ...note,
      createdAt: new Date(note.createdAt),
    }))
    .filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <LocaleConsumer>
      {({ locale }) => (
        <section>
          <div className="flex-col">
            <h2 className="text-3xl font-bold text-orange-600">
              {locale === "id"
                ? "Daftar catatan terarsip"
                : "List archived notes"}
            </h2>
            <SearchBar
              keyword={keyword}
              keywordChange={onKeywordChangeHandler}
            />
          </div>

          {loading ? (
            <>
              <LoadingItem />
            </>
          ) : (
            <NoteList
              notes={filteredNotes}
              onDelete={onDeleteHandler}
              onArchive={onUnarchiveHandler}
            />
          )}
        </section>
      )}
    </LocaleConsumer>
  );
}

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchivedPageWrapper;
