import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="../images/projects/1.jpg" alt="not found" />
      </Link>
      <header>
        <h2>AKHIL MOHAN</h2>
        <p><a href="mailto:akhilarackal9@gmail.com">akhilarackal9@gmail.com</a>
        </p>
      </header>
    </section>
    <section className="blurb">
      <h2>About</h2>
      <p>Greetings, Earthlings! 🚀 I am Akhil Mohan, your friendly neighborhood web sorcerer,
        and a graduate from the mystical realm of Electrical Engineering in city of Kochi.
        🎓Brace yourselves for an odyssey through the digital cosmos as we embark on a thrilling,
        journey into the wondrous world of web development! 🌐✨ #CodeWizard #TechExplorer.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Akhil Mohan</p>
    </section>
  </section>
);

export default SideBar;
