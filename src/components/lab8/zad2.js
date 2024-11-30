// src/components/UserInteraction.js (lub zad2.js)
'use client';
import React, { useState } from 'react';

function UserInteraction() {
  const [clickCount, setClickCount] = useState(0);
  const [hoverMessage, setHoverMessage] = useState("");
  const [imageVisible, setImageVisible] = useState(false);
  const [jsonData, setJsonData] = useState(null);
  const [fileName, setFileName] = useState("");
  const [styles, setStyles] = useState({ backgroundColor: 'white' });

  // handleClick - Zwiększa licznik kliknięć
  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  // handleMouseOver - Zmienia tekst po najechaniu myszką
  const handleMouseOver = () => {
    setHoverMessage("Mouse is over the box!");
  };

  // showImage - Pokazuje/ukrywa obraz
  const showImage = () => {
    setImageVisible(prevState => !prevState);
  };

  // loadDataFromJson - Symuluje ładowanie danych z JSON
  const loadDataFromJson = async () => {
    const data = {
      title: "Loaded Data",
      description: "This is an example of data loaded from JSON."
    };
    setJsonData(data);
  };

  // uploadFile - Symuluje przesyłanie pliku
  const uploadFile = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "No file selected");
  };

  // changeStyle - Zmienia styl komponentu
  const changeStyle = () => {
    setStyles(prevStyles => ({
      ...prevStyles,
      backgroundColor: prevStyles.backgroundColor === 'white' ? 'lightblue' : 'white'
    }));
  };

  return (
    <div style={styles} className="interaction-container">
      <h2>Click Count: {clickCount}</h2>

      <button onClick={handleClick}>Click Me</button>

      <div
        onMouseOver={handleMouseOver}
        onMouseOut={() => setHoverMessage("")}
        style={{ border: '1px solid black', padding: '20px', margin: '10px', textAlign: 'center' }}
      >
        {hoverMessage || "Hover over me!"}
      </div>

      <button onClick={showImage}>
        {imageVisible ? "Hide Image" : "Show Image"}
      </button>
      {imageVisible && <img src='/zdjecia/giga.jpg' alt="Placeholder" style={{ width: '150px', height: '150px' }} />}
      <br></br>

      <button onClick={loadDataFromJson}>Load Data from JSON</button>
      {jsonData && (
        <div>
          <h3>{jsonData.title}</h3>
          <p>{jsonData.description}</p>
        </div>
      )}
      <br></br>

      <input type="file" onChange={uploadFile} />
      <p>Selected File: {fileName}</p>

      <button onClick={changeStyle}>Change Style</button>
    </div>
  );
}

export default UserInteraction;
