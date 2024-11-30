// src/app/lab9/page.tsx
import React from 'react';
import Link from 'next/link'; // Importujemy Link z Next.js
import './Lab9Page.css'; // Zakładając, że stworzymy plik CSS do stylów

const Lab9Page = () => {
  return (
    <div className="lab9-container">
      {/* Link powrotu do strony głównej */}
      <Link href="/" className="back-home-link">
        &#8592; Powrót na stronę główną
      </Link>

      <div className="lab9-content">
        <h1 className="lab9-header">Witamy na stronie Lab 9</h1>
        <ul className="lab9-list">
          <li><Link href="/lab9/about" className="lab9-link">O mnie</Link></li>
          <li><Link href="/lab9/interests" className="lab9-link">Moje zainteresowania</Link></li>
          <li><Link href="/lab9/movie" className="lab9-link">Ulubiony film</Link></li>
          <li><Link href="/lab9/contact" className="lab9-link">Kontakt</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Lab9Page;
