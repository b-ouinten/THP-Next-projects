import React, { useState, useEffect } from "react";

const NameForm = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Your name is : ${name}`);
  }

  useEffect(() => {
    console.log(`NameForm : I'm mounting !`);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label>Name : </label>
      <input type="text" onChange={handleChange} />
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default NameForm;
