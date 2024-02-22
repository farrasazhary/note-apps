/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // Inisialisasi state
    this.state = {
      title: "",
      body: "",
      createdAt: "",
      archived: false,
      charLimit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitChangeEventHandler =
      this.onSubmitChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    // this.setState((prevState) => ({
    //   ...prevState,
    //   title: event.target.value,
    // }));

    if (this.state.charLimit >= 0 && event.target.value.length <= 50) {
      this.setState(() => {
        return {
          title: event.target.value,
          charLimit: 50 - event.target.value.length,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => ({
      ...prevState,
      body: event.target.value,
    }));
  }

  onSubmitChangeEventHandler(event) {
    event.preventDefault();

    const uniqueId = this.generateUniqueId();

    this.setState(
      (prevState) => ({
        ...prevState,
        id: uniqueId,
        createdAt: new Date().toISOString(),
      }),
      () => {
        // Pengecekan apakah properti addNote telah diberikan
        if (this.props.addNote) {
          this.props.addNote(this.state);
        }
      }
    );
  }

  generateUniqueId() {
    return +new Date();
  }

  render() {
    return (
      <form
        className="contact-input"
        onSubmit={this.onSubmitChangeEventHandler}
      >
        <p className="text-sm flex justify-end">
          Sisa karakter : {this.state.charLimit}
        </p>
        <input
          type="text"
          placeholder="Judul Catatan"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          className="rounded-md"
        />
        <textarea
          type="text"
          placeholder="Tuliskan catatanmu di sini"
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
          className="rounded-md"
        />

        <button
          className="bg-orange-600 rounded-md font-medium text-white"
          type="submit"
        >
          Tambah
        </button>
      </form>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
