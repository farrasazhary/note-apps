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
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitChangeEventHandler =
      this.onSubmitChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
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
        <input
          type="text"
          placeholder="Judul Catatan"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <textarea
          type="text"
          placeholder="Tuliskan catatanmu di sini"
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        />

        <button type="submit">Tambah</button>
      </form>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
