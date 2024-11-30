// src/app/lab8/page.tsx
import React from 'react';
import Link from 'next/link'; // Importujemy Link z Next.js
import TeaSet from '../../components/lab8/zad1'; // Zakładając, że zad1.js znajduje się w src
import TeaSetPop from'../../components/lab8/zad1pop';
import UserInteraction from '../../components/lab8/zad2';
import './Page.css';  // Importujemy zewnętrzny plik CSS

const Lab8Page = () => {
  return (
    <div className="page-container">
      {/* Link do strony głównej w prawym górnym rogu */}
      <Link href="/" className="back-home-link">
        &#8592; Powrót na stronę główną
      </Link>

      <h1 className="header">Pierw niepoprawnie:</h1>
      <h3 className="subheader">Welcome to the Tea Set!</h3>
      <React.StrictMode>
        <TeaSet />
      </React.StrictMode>
      
      <h1 className="header">Teraz poprawnie:</h1>
      <h3 className="subheader">Welcome to the Tea Set!</h3>
      <React.StrictMode>
        <TeaSetPop/>
      </React.StrictMode>
      
      <h1 className="header">Zadanie 2:</h1>
      <UserInteraction />
    </div>
  );
};

export default Lab8Page;
