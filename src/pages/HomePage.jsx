/* eslint-disable no-unused-vars */
// import React from "react";
// import PropTypes from "prop-types";
// import { useSearchParams } from "react-router-dom";
// import NoteList from "../components/noteList";
// import SearchBar from "../components/searchBar";
// import { getActiveNotes, deleteNote, archiveNote } from "../utils/api";
// import { LocaleConsumer } from "../contexts/LocaleContext";

// function HomePageWrapper() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const keyword = searchParams.get("keyword");

//   function changeSearchParams(keyword) {
//     setSearchParams({ keyword });
//   }

//   return (
//     <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
//   );
// }

// class HomePage extends React.Component {
//   static propTypes = {
//     defaultKeyword: PropTypes.string,
//     keywordChange: PropTypes.func.isRequired,
//   };

//   constructor(props) {
//     super(props);

//     this.state = {
//       notes: [],
//       keyword: props.defaultKeyword || "",
//     };

//     this.onDeleteHandler = this.onDeleteHandler.bind(this);
//     this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
//     this.onArchiveHandler = this.onArchiveHandler.bind(this);
//   }

//   async componentDidMount() {
//     await this.fetchNotes();
//   }

//   async fetchNotes() {
//     const { data } = await getActiveNotes();
//     this.setState({ notes: data || [] });
//   }

//   async onDeleteHandler(id) {
//     await deleteNote(id);
//     this.fetchNotes();
//   }

//   onKeywordChangeHandler(keyword) {
//     this.setState({ keyword });
//     this.props.keywordChange(keyword);
//   }

//   async onArchiveHandler(id) {
//     await archiveNote(id);
//     this.fetchNotes();
//   }

//   render() {
//     const notes = this.state.notes
//       .map((note) => ({
//         ...note,
//         createdAt: new Date(note.createdAt),
//       }))
//       .filter((e) => {
//         return e.title.toLowerCase().includes(this.state.keyword.toLowerCase());
//       });

//     return (
//       <LocaleConsumer>
//         {({ locale }) => {
//           return (
//             <section>
//               <div className="flex-col">
//                 <h2 className="text-3xl font-bold text-orange-600">
//                   {locale === "id" ? "Daftar catatan" : "List Notes"}
//                 </h2>
//                 <SearchBar
//                   keyword={this.state.keyword}
//                   keywordChange={this.onKeywordChangeHandler}
//                 />
//               </div>

//               <NoteList
//                 notes={notes}
//                 onDelete={this.onDeleteHandler}
//                 onArchive={this.onArchiveHandler}
//               />
//             </section>
//           );
//         }}
//       </LocaleConsumer>
//     );
//   }
// }

// export default HomePageWrapper;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/noteList";
import SearchBar from "../components/searchBar";
import LoadingItem from "../components/loadingItem";
import { getActiveNotes, deleteNote, archiveNote } from "../utils/api";
import { LocaleConsumer } from "../contexts/LocaleContext";

function HomePageWrapper() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  return <HomePage defaultKeyword={keyword} />;
}

function HomePage({ defaultKeyword }) {
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(defaultKeyword || "");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotes() {
      await new Promise((resolve) => setTimeout(resolve, 400)); // Delay 1 detik
      const { data } = await getActiveNotes();
      setNotes(data || []);
      setLoading(false);
    }
    fetchNotes();
  }, []);

  async function onDeleteHandler(id) {
    setLoading(true);
    try {
      await deleteNote(id);
      const { data } = await getActiveNotes();
      setNotes(data || []);
    } catch (error) {
      console.error("Error deleting note:", error);
      // Menampilkan pesan kesalahan kepada pengguna
      // Misalnya: setErrorMessage("Failed to delete note. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
  }

  async function onArchiveHandler(id) {
    setLoading(true);
    await archiveNote(id);
    const { data } = await getActiveNotes();
    setNotes(data || []);
    setLoading(false);
  }

  const filteredNotes = notes
    .map((note) => ({
      ...note,
      createdAt: new Date(note.createdAt),
    }))
    .filter((e) => {
      return e.title.toLowerCase().includes(keyword.toLowerCase());
    });

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section>
            <div className="flex-col">
              <h2 className="text-3xl font-bold text-orange-600">
                {locale === "id" ? "Daftar catatan" : "List Notes"}
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
                onArchive={onArchiveHandler}
              />
            )}
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
};

export default HomePageWrapper;
