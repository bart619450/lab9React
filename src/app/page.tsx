// src/app/page.tsx

import Link from 'next/link';  // Importujemy Link z Next.js

const HomePage = () => {
  return (
    <div>
      <h1>Witaj na Stronie Głównej!</h1>
      <p>To jest Twoja aplikacja Next.js. Kliknij w linki, aby przejść do poszczególnych laboratoriów.</p>

      <div>
        <h2>Linki do laboratoriów:</h2>
        <ul>
          <li>
            <Link href="/lab7">
              <a>Lab 7</a>
            </Link>
          </li>
          <li>
            <Link href="/lab8">
              <a>Lab 8</a>
            </Link>
          </li>
          <li>
            <Link href="/lab9">
              <a>Lab 9</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
