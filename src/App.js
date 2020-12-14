import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">HOOKS</header>
      <div className="App-main">
        <form className="App-main-search">
          <input type="text" placeholder="Search"></input>
          <button>
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g>
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </g></svg>
          </button>
        </form>
        <div className="App-main-list">
          <div className="App-main-list-content">
            <div className="App-main-list-content-item">

            </div>
            <div className="App-main-list-content-item">

            </div>
            <div className="App-main-list-content-item">

            </div>
            <div className="App-main-list-content-item">

            </div>
            <div className="App-main-list-content-item">

            </div>
            <div className="App-main-list-content-item">

            </div>
          </div>
        </div>
      </div>
      <footer className="App-footer">Made by Vlad Kryazhevskikh</footer>

    </div>
  );
}

export default App;
