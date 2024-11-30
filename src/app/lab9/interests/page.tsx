// src/app/lab9/interests/page.tsx
import React from 'react';
import Link from 'next/link';  // Importujemy Link z Next.js
import './InterestsPage.css';  // Plik CSS do stylów strony

const InterestsPage = () => {
  return (
    <div className="interests-container">
      {/* Link powrotu na stronę Lab 9 */}
      <Link href="/lab9" className="back-to-lab9">
        &#8592; Powrót do Lab 9
      </Link>

      <div className="interests-content">
        <h1 className="interests-header">Moje Zainteresowania</h1>
        <p className="interests-description">
          To jest strona o moich zainteresowaniach. Interesuję się wieloma rzeczami, w tym programowaniem, 
          podróżami, muzyką i sportem. Wierzę, że pasje są kluczowe dla osobistego rozwoju i satysfakcji z życia.
        </p>
      </div>
    </div>
  );
};

export default InterestsPage;
