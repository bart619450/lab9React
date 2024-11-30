// src/app/page.tsx
"use client";  // Używamy klienta, ponieważ będziemy używać hooków Reacta

import { useState } from 'react';
import Link from 'next/link';
import Card from '../../components/lab7/Card';
import Image from 'next/image';
import NameInput from '../../components/lab7/components/uS';  // Komponent dla useState
import Counter from '../../components/lab7/components/uR';    // Komponent dla useReducer
import FetchData from '../../components/lab7/components/uE';  // Komponent dla useEffect
import { UserProfile, UserProvider } from '../../components/lab7/components/uC'; // Poprawiony import
import FocusInput from '../../components/lab7/components/uRef'; // Komponent dla useRef

export default function Home() {
  // Stany dla danych wejściowych
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');

  // Funkcja do obsługi zmiany wartości w formularzu
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => setAge(e.target.value);
  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => setCountry(e.target.value);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Link do strony głównej w prawym górnym rogu */}

        <Link href="/" className="back-home-link">
          &#8592; Powrót na stronę główną
        </Link>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        
        <div className="flex flex-col gap-4">
          <label>
            Podaj imię i nazwisko:
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Wpisz imię i nazwisko"
              className="border border-solid border-gray-300 p-2 rounded mt-2"
            />
          </label>
          
          <label>
            Podaj wiek:
            <input
              type="number"
              value={age}
              onChange={handleAgeChange}
              placeholder="Wpisz wiek"
              className="border border-solid border-gray-300 p-2 rounded mt-2"
            />
          </label>
          
          <label>
            Podaj narodowość:
            <input
              type="text"
              value={country}
              onChange={handleCountryChange}
              placeholder="Wpisz narodowość"
              className="border border-solid border-gray-300 p-2 rounded mt-2"
            />
          </label>
        </div>

        {/* Po naciśnięciu przycisku, dane są przekazywane do komponentu Card */}
        {name && age && country && (
          <Card name={name} age={age} country={country} />
        )}
        
        {/* Sekcja dla komponentów hooków */}
        <div className="flex flex-col gap-8 mt-16">
          <h2>Komponenty wykorzystujące React Hooki:</h2>
          
          {/* Komponent dla useState */}
          <section>
            <h3>1. Komponent dla useState (wprowadź imię)</h3>
            <NameInput />  {/* Komponent dla useState */}
          </section>
          
          {/* Komponent dla useReducer */}
          <section>
            <h3>2. Komponent dla useReducer (licznik)</h3>
            <Counter />    {/* Komponent dla useReducer */}
          </section>
          
          {/* Komponent dla useEffect */}
          <section>
            <h3>3. Komponent dla useEffect (pobieranie danych)</h3>
            <FetchData />  {/* Komponent dla useEffect */}
          </section>
          
          {/* Komponent dla useContext */}
          <section>
            <h3>4. Komponent dla useContext (profil użytkownika)</h3>
            <UserProvider>
              <UserProfile />  {/* Komponent dla useContext */}
            </UserProvider>
          </section>
          
          {/* Komponent dla useRef */}
          <section>
            <h3>5. Komponent dla useRef (skupienie na input)</h3>
            <FocusInput />  {/* Komponent dla useRef */}
          </section>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
        </div>
      </main>
    </div>
  );
}
