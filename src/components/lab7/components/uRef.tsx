// src/components/uRef.tsx
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();  // Skupiamy fokus na elemencie input
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Kliknij przycisk, aby skupić" />
      <button onClick={focusInput}>Skup na polu tekstowym</button>
    </div>
  );
}

export default FocusInput;
