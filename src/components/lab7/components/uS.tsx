// src/components/uS.tsx
import React, { useState } from 'react';

function NameInput() {
  const [name, setName] = useState('');  // Tworzymy stan 'name' i funkcję 'setName'

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);  // Aktualizujemy stan na wartość z inputa
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleInputChange} placeholder="Wpisz swoje imię" />
      <p>Witaj, {name}!</p>  {/* Wyświetlamy wprowadzone imię */}
    </div>
  );
}

export default NameInput;
