import React from "react";
import { APP_NAME } from "../../constants";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{"backgroundColor": "orange"}}>
      <span style={{"paddingRight": "20px","color":"brown"}}><img src="http://icons.iconarchive.com/icons/ampeross/smooth/128/Apple-Books-Border-icon.png" alt={APP_NAME}/> {APP_NAME}</span>
      <a className="navbar-brand" href="/">
       Search
      </a>
      <a className="navbar-brand" href="/saved">
       Saved
      </a>
    </nav>
  );
}

export default Nav;
