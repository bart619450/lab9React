// src/app/layout.tsx
import React from 'react';
import './global.css'; // Importujemy plik CSS

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pl">
      <body className="layout-body">
        <header className="header">
          <h1 className="header-title">Strona Główna</h1>
        </header>
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
