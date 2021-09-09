import React from "react";

const Footer = props => (
  <ul>
    {props.info.map((infoEl, index) => (
      <li key={index}>{infoEl}</li>
    ))}
  </ul>
);

export default Footer;
