import React from "react";
import { Link } from "react-router-dom";


const Navbar = ({selectLanguage}) => {
  return(
    <div className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/works">Works</Link>
      <Link to="/about">About</Link>
      <button onClick={selectLanguage}>en/fr</button>
    </div>
  )
}

export default Navbar;
