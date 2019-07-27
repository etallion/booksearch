import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <span>Google Books</span>
      <a className="navbar-brand" href="/search">
       Search
      </a>
      <a className="navbar-brand" href="/saved">
       Saved
      </a>
    </nav>
  );
}

export default Nav;
