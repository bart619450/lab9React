// src/app/lab9/movie/page.tsx
import React from 'react';
import Link from 'next/link';  // Importujemy Link z Next.js
import './MoviePage.css'; // Plik CSS do stylów strony

const MoviePage = () => {
  return (
    <div className="movie-container">
      {/* Link powrotu na stronę Lab 9 */}
      <Link href="/lab9" className="back-to-lab9">
        &#8592; Powrót do Lab 9
      </Link>

      <div className="movie-content">
        <h1 className="movie-header">Mój Ulubiony Film</h1>
        <p className="movie-description">
          To jest strona o moim ulubionym filmie. Tutaj znajdziesz szczegóły dotyczące filmu,
          który ma dla mnie szczególne znaczenie. Przedstawia on fascynującą historię,
          która porusza najgłębsze emocje.
        </p>
      </div>
    </div>
  );
};

export default MoviePage;
