// src/App.js
import React from 'react';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <h1>User Info</h1>
      <Card name="Bartosz Maciejewski" age={22} country="Polska" />
      <Card name="Abdul Alhamid" age={52} country="Arabia Saudyjska" />
    </div>
  );
}

export default App;