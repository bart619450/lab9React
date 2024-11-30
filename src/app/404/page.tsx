// src/app/404/page.tsx
import React from 'react';
import Link from 'next/link';  // Importujemy Link z Next.js

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      {/* Link powrotu na stronę główną */}
      <Link href="/" className="back-home-link">
        &#8592; Powrót na stronę główną
      </Link>
      
      <div className="not-found-content">
        <h1 className="main-header">Strona nie znaleziona</h1>
        <p className="description">
          Przepraszamy, ale nie mogliśmy znaleźć strony, którą szukasz. Możesz wrócić na stronę główną lub sprawdzić inne sekcje witryny.
        </p>

        
      </div>
    </div>
  );
};

export default NotFoundPage;
