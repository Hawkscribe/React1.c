import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [isWork, setIsWork] = useState(false);
  const [name, setName] = useState('');

  return (
    <div>
      {!isWork ? (
        <Parent2 
          name={name} 
          setName={setName} 
          isWork={isWork} 
          setIsWork={setIsWork} 
        />
      ) : (
        <Parent1 
          name={name} 
          setName={setName} 
          isWork={isWork} 
          setIsWork={setIsWork} 
        />
      )}
    </div>
  );
}

function Parent2({ name, setName, isWork, setIsWork }) {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/neet/online-Info">Info here</Link>:
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route 
            path="/" 
            element={<Landing 
              name={name} 
              setName={setName} 
              isWork={isWork} 
              setIsWork={setIsWork} 
            />} 
          />
          <Route path="/neet/online-Info" element={<Info />} />
          <Route 
            path="/neet/online-Main" 
            element={<Main 
              name={name} 
              setName={setName} 
              isWork={isWork} 
              setIsWork={setIsWork} 
            />} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Parent1({ name, setName, isWork, setIsWork }) {
  return (
    <div>
      <h2>Authenticated View</h2>
      <button onClick={() => setIsWork(false)}>Switch Back</button>
      <div>Welcome, {name}!</div>
      {/* Add any additional authenticated view content here */}
    </div>
  );
}

function Info() {
  return (
    <div>
      <p>
        This is a demonstration page created by Tushar to test skills on:
        <ul>
          <li>Routing</li>
          <li>SPAs (Single Page Applications)</li>
          <li>Website creation</li>
          <li>Context API and regular API</li>
          <li>State lifting</li>
          <li>Creating custom 404 page</li>
        </ul>
        To test the website, just enter your name and move forward.
        Enjoy the experience!
      </p>
    </div>
  );
}

function Main({ name, setName, isWork, setIsWork }) {
  function check() {
    setIsWork(true);
  }

  return (
    <div>
      <div className="container">
        <div className="text">Check Out the toggle button!!!</div>
        <form>
          <input type="checkbox" onClick={check} />
        </form>
      </div>
      <div>
        <h6>Authentication System Demo</h6>
        <h6>Welcome! {name}</h6>
        <span>Authentication</span>
      </div>
    </div>
  );
}

function Landing({ name, setName, isWork, setIsWork }) {
  return (
    <div>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <h2>Authentication System Demo</h2>
      </div>
      <form>
        <div className="form-container">
          <div className="input-group">
            <span style={{color: "black"}}>Name</span>:
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Link to="/neet/online-Main">
              <button type="button">Move</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}