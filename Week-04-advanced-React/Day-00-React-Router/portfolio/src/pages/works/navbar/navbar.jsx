/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ toLinks, url }) => {
  useEffect(() => console.log("navbar", toLinks));

  return (
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
};
