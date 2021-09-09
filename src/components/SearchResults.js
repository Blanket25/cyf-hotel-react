import React from "react";

const SearchResults = props => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Room Id</th>
        <th scope="col">Check in Date</th>
        <th scope="col">Check Out Date</th>
        <th scope="col">Nights</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <tr>
          <td scope="col">{props.id}</td>
          <td scope="col">{props.title}</td>
          <td scope="col">{props.firstName}</td>
          <td scope="col">{props.surname}</td>
          <td scope="col">{props.email}</td>
          <td scope="col">{props.roomId}</td>
          <td scope="col">{props.checkInDate}</td>
          <td scope="col">{props.checkOutDate}</td>
        </tr>
      </tr>
      <tr>
        <tr>
          <td scope="col">{props.id}</td>
          <td scope="col">{props.title}</td>
          <td scope="col">{props.firstName}</td>
          <td scope="col">{props.surname}</td>
          <td scope="col">{props.email}</td>
          <td scope="col">{props.roomId}</td>
          <td scope="col">{props.checkInDate}</td>
          <td scope="col">{props.checkOutDate}</td>
        </tr>
      </tr>
      <tr>
        <tr>
          <td scope="col">{props.id}</td>
          <td scope="col">{props.title}</td>
          <td scope="col">{props.firstName}</td>
          <td scope="col">{props.surname}</td>
          <td scope="col">{props.email}</td>
          <td scope="col">{props.roomId}</td>
          <td scope="col">{props.checkInDate}</td>
          <td scope="col">{props.checkOutDate}</td>
        </tr>
      </tr>
    </tbody>
  </table>
);

export default SearchResults;
