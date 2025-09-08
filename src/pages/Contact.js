import React from 'react';
import '../App.css';
import { useHistory } from 'react-router-dom';
import Header from '../header';
import "../Header.css"
import '../Layout.css'
import placeholder from '../placeholder.png'

function Contact() {
  const history = useHistory();

  return (
    <div className="grid-container">
      <header className="header">
        
        <h1 className='logo' >Contact Info</h1>
        <button onClick={() => history.push('/')}></button>

      </header>

      <aside className="sidebar">
        <img src={placeholder} className='img' alt='img'/>
        <img src={placeholder} className='img' alt='img'/>
        <img src={placeholder} className='img' alt='img'/>
        <img src={placeholder} className='img' alt='img'/>
      </aside>
      <main className="main">
        <img src={placeholder} alt='img'/> <img src={placeholder} alt='img'/>
      </main>
      <aside className="rightside">Right Side Content</aside>
      <footer className="footer">
        <div>
            Phone Number
        </div>
        <p>
    Find me:{" "}
    <a href="https://www.linkedin.com/in/dominikwilliams/">
      LinkedIn
    </a>
  </p>
        <p>
    Contact me:{" "}
    <a href="mailto:duminium@gmail.com">
      duminimum@gmail.com
    </a>
  </p>
        
        </footer>
    </div>
  );
}

export default Contact;
