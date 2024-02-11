import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/noteList";
import SearchBar from "../components/searchBar";
import { deleteNote, getAllNotes } from "../utils/data";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({keyword})
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword)
  }

  render() {
    const notes = this.state.notes.filter((e) => {
      return e.title.toLowerCase().includes(this.state.keyword.toLowerCase());
    });

    return (
      <section>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <h2>Daftar Notes</h2>
        <NoteList notes={notes} onDelete={this.onDeleteHandler} />
      </section>
    );
  }
}

export default HomePageWrapper;


// PART 2


// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import NoteList from "../components/noteList";
// import SearchBar from "../components/searchBar";
// import { deleteNote, getAllNotes } from "../utils/data";

// function HomePageWrapper() {
//   return <HomePage />;
// }

// function HomePage() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [notes, setNotes] = useState([]);
//   const [keyword, setKeyword] = useState("");

//   useEffect(() => {
//     setNotes(getAllNotes());
//     const keywordParam = searchParams.get('keyword');
//     if (keywordParam) {
//       setKeyword(keywordParam);
//     }
//   }, [searchParams]);

//   function onDeleteHandler(id) {
//     deleteNote(id);
//     setNotes(getAllNotes());
//   }

//   function onKeywordChangeHandler(newKeyword) {
//     setKeyword(newKeyword);
//     setSearchParams({ keyword: newKeyword });
//   }

//   const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(keyword.toLowerCase()));

//   return (
//     <section>
//       <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
//       <h2>Daftar Notes</h2>
//       <NoteList notes={filteredNotes} onDelete={onDeleteHandler} />
//     </section>
//   );
// }

// export default HomePageWrapper;


// PART 3


// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import NoteList from "../components/noteList";
// import SearchBar from "../components/searchBar";
// import { deleteNote, getAllNotes } from "../utils/data";

// function HomePageWrapper() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [keyword, setKeyword] = useState(searchParams.get('keyword') || "");

//   function changeSearchParams(newKeyword) {
//     setSearchParams({ keyword: newKeyword });
//   }

//   return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
// }

// class HomePage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       notes: getAllNotes(),
//       keyword: props.defaultKeyword || "",
//     };

//     this.onDeleteHandler = this.onDeleteHandler.bind(this);
//     this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
//   }

//   onDeleteHandler(id) {
//     deleteNote(id);

//     this.setState((prevState) => ({
//       notes: getAllNotes(),
//     }));
//   }

//   onKeywordChangeHandler(keyword) {
//     this.setState({ keyword }, () => {
//       this.props.keywordChange(keyword);
//     });
//   }

//   render() {
//     const notes = this.state.notes.filter((e) =>
//       e.title.toLowerCase().includes(this.state.keyword.toLowerCase())
//     );

//     return (
//       <section>
//         <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler.bind(this)} />
//         <h2>Daftar Notes</h2>
//         <NoteList notes={notes} onDelete={this.onDeleteHandler} />
//       </section>
//     );
//   }
// }

// export default HomePageWrapper;
