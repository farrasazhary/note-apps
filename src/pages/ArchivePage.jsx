import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/noteList";
import SearchBar from "../components/searchBar";
import { deleteNote, getArchivedNotes, unarchiveNote } from "../utils/data";

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

class ArchivePage extends React.Component {
  static propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  onUnarchiveHandler(id) {
    unarchiveNote(id);

    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      }
    })
  }

  render() {
    const notes = this.state.notes
      .map((note) => ({
        ...note,
        createdAt: new Date(note.createdAt),
      }))
      .filter((e) => {
        return e.title.toLowerCase().includes(this.state.keyword.toLowerCase());
      });

    return (
      <section>
        <div className="flex-col">
          <h2 className="text-3xl font-bold text-orange-600">
            Daftar Archived Notes
          </h2>
          <SearchBar
            keyword={this.state.keyword}
            keywordChange={this.onKeywordChangeHandler}
          />
        </div>

        <NoteList notes={notes} onDelete={this.onDeleteHandler} onArchive={this.onUnarchiveHandler} />
      </section>
    );
  }
}

export default ArchivedPageWrapper;
