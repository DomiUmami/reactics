import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <h1 className="logo">My App</h1>
      <nav className="nav">
        <button className="dropdown-btn" onClick={toggleDropdown}>
          Menu ▼
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/app">App</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
