import React from "react";

const Footer = props => (
  <ul className="mt-5">
    {props.infoArray.map((infoEl, index) => (
      <li className="list-unstyled" key={index}>
        {infoEl}
      </li>
    ))}
  </ul>
);

export default Footer;
