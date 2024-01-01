import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Akhil Mohan's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>A mesmerizing, responsive, and statically-generated masterpiece,
            crafted with the enchanting dance of modern JavaScript,
            unveils itself as a radiant React application.
            🚀✨ Let the symphonyof code and creativity serenade your senses,
            bringing to life a digital marvel that transcends the ordinary.
            🎨💻 Immerse yourself in the elegance of this web creation,
            where every line of code whispers tales of innovation and beauty. 🌟🌐
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
