/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Card = ({ works }) => {
  const { selectedTitle } = useParams();
  const [currentWork, setCurrentWork] = useState(null);
  const { title, content } = currentWork || {};

  useEffect(() => {
    setCurrentWork(works.find((work) => work.title === selectedTitle));
  }, [works, selectedTitle]);

  return (
    currentWork
      ? (
        <>
          <h3>{title}</h3>
          {
            content.map((item) => <p>{item}</p>)
          }
        </>
      )
      : "Nothing !"
  );
};
