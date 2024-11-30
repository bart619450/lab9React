// src/components/uC.tsx
import React, { createContext, useContext, useState } from 'react';

// Definiujemy typ dla danych przechowywanych w kontekście
type User = {
  name: string;
  age: number;
};

// Tworzymy kontekst z domyślną wartością null, która może być zastąpiona
// przez użytkownika w komponencie `UserProvider`
const UserContext = createContext<{
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
} | undefined>(undefined);

function UserProvider({ children }: { children: React.ReactNode }) {
  // Stan przechowujący dane użytkownika
  const [user, setUser] = useState<User>({ name: 'Janek', age: 25 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function UserProfile() {
  // Używamy kontekstu, aby uzyskać dane użytkownika
  const context = useContext(UserContext);

  // Jeśli kontekst nie jest dostępny, rzucamy błąd, aby uniknąć błędów
  if (!context) {
    throw new Error('UserProfile must be used within a UserProvider');
  }

  const { user } = context;

  return (
    <div>
      <p>Imię: {user.name}</p>
      <p>Wiek: {user.age}</p>
    </div>
  );
}

// Eksportujemy `UserProvider` i `UserProfile` jako odrębne komponenty
export { UserProvider, UserProfile };
