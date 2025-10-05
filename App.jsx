import React from 'react';//
import './index.css';

function App() {
  return (
    <div className="page">
      <header className="header">
        <img
          className="logo"
          src="react-iamge.jpg"
          alt="logo"
        />
        <h1 className="site-title">React</h1>
      </header>

      <main className="main">
        <h2 className="main-title">Main</h2>

        <div className="image-row">
          <img src="demo-image.jpg" alt="sample 1" />
          <img src="demo-image.jpg" alt="sample 2" />
        </div>

        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante. Curabitur non nulla sit amet nisl tempus
          convallis quis ac lectus. Phasellus volutpat, metus eget egestas
          mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus.
        </p>
      </main>

      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;