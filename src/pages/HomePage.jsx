// import React from "react";
// import PropTypes from "prop-types";
// import { useSearchParams } from "react-router-dom";
// import NoteList from "../components/noteList";
// import SearchBar from "../components/searchBar";
// import { deleteNote, getActiveNotes, archiveNote } from "../utils/data";

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
//       notes: getActiveNotes(),
//       keyword: props.defaultKeyword || "",
//       archived: getActiveNotes(),
//     };

//     this.onDeleteHandler = this.onDeleteHandler.bind(this);
//     this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
//     this.onArchiveHandler = this.onArchiveHandler.bind(this);
//   }

//   onDeleteHandler(id) {
//     deleteNote(id);

//     this.setState(() => {
//       return {
//         notes: getActiveNotes(),
//       };
//     });
//   }

//   onKeywordChangeHandler(keyword) {
//     this.setState(() => {
//       return {
//         keyword,
//       };
//     });

//     this.props.keywordChange(keyword);
//   }

//   onArchiveHandler(id) {
//     archiveNote(id);
  
//     this.setState(() => ({
//       notes: getActiveNotes(),
//     }));
  
//     alert(`Catatan dengan ID ${id} berhasil diarsipkan.`);
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
//       <section>
//         <div className="flex-col">
//           <h2 className="text-3xl font-bold text-orange-600">Daftar Notes</h2>
//           <SearchBar
//             keyword={this.state.keyword}
//             keywordChange={this.onKeywordChangeHandler}
//           />
//         </div>

//         <NoteList
//           notes={notes}
//           onDelete={this.onDeleteHandler}
//           onArchived={this.onArchiveHandler}
//         />
//       </section>
//     );
//   }
// }

// export default HomePageWrapper;


import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/noteList";
import SearchBar from "../components/searchBar";
import { deleteNote, getActiveNotes, archiveNote } from "../utils/data";
 
function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
 
  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}
 
class HomePage extends React.Component {
  static propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
  };
 
  constructor(props) {
    super(props);
 
    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || "",
    };
 
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }
 
  onDeleteHandler(id) {
    deleteNote(id);
 
    this.setState(() => {
      return {
        notes: getActiveNotes(),
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
 
  onArchiveHandler(id) {
    archiveNote(id); // Menggunakan archiveNote untuk mengarsipkan catatan
 
    this.setState(() => {
      return {
        notes: getActiveNotes(),
      };
    });
 
    alert(`Catatan dengan ID ${id} berhasil diarsipkan.`);
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
          <h2 className="text-3xl font-bold text-orange-600">Daftar Notes</h2>
          <SearchBar
            keyword={this.state.keyword}
            keywordChange={this.onKeywordChangeHandler}
          />
        </div>
 
        <NoteList
          notes={notes}
          onDelete={this.onDeleteHandler}
          archived={false} // Menetapkan nilai boolean untuk archived
        />
      </section>
    );
  }
}

export default HomePageWrapper;
