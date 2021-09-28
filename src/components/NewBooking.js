import React, { useState } from "react";

// Use `value` for each row to add
//  inserted data. Create a function that will collect the data
//  and send it to the table as props and use it inside the
//  `onSubmit` method.

const AddNewBooking = () => {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleFirstNameChange = event => {
    setFirstName(event.target.value);
  };

  const handleSurnameChange = event => {
    setSurname(event.target.value);
  };

  const handleRoomIdChange = event => {
    setRoomId(event.target.value);
  };

  const handleCheckInChange = event => {
    setCheckIn(event.target.value);
  };

  const handleCheckOutChange = event => {
    setCheckOut(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <form className="form-group search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        onChange={handleTitleChange}
        value={title}
      />
      <input
        type="text"
        placeholder="First Name"
        onChange={handleFirstNameChange}
        value={firstName}
      />
      <input
        type="text"
        placeholder="Surname"
        onChange={handleSurnameChange}
        value={surname}
      />
      <input
        type="text"
        placeholder="Room Id"
        onChange={handleRoomIdChange}
        value={roomId}
      />
      <input
        type="text"
        placeholder="Check in date"
        onChange={handleCheckInChange}
        value={checkIn}
      />
      <input
        type="text"
        placeholder="Check out date"
        onChange={handleCheckOutChange}
        value={checkOut}
      />
      <button>Add booking</button>
    </form>
  );
};

export default AddNewBooking;
