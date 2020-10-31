/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toLinks, url }) => (
  <nav>
    {
      toLinks.map((toLink, index) => (
        <div key={index}>
          <Link to={`${url}/${toLink.title}`}>{toLink.title}</Link>
          <br />
        </div>
      ))
      }
  </nav>
);

export default Navbar;
