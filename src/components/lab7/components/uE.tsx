// src/components/uE.tsx
import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);  // Pusta tablica oznacza, że efekt wykona się tylko raz, po załadowaniu komponentu

  return (
    <div>
      <h3>Dane:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default FetchData;
