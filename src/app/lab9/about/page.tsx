// src/app/lab9/about/page.tsx
import React from 'react';
import Link from 'next/link';  // Importujemy Link z Next.js
import './AboutPage.css';  // Plik CSS z stylami dla strony o mnie

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Link powrotu na stronę Lab 9 */}
      <Link href="/lab9" className="back-to-lab9">
        &#8592; Powrót do Lab 9
      </Link>

      <div className="about-content">
        <h1 className="about-header">O mnie</h1>
        <p className="about-text">To jest strona o mnie. Tutaj możesz dowiedzieć się więcej o moich doświadczeniach, pasjach i celach.</p>
      </div>
    </div>
  );
};

export default AboutPage;
