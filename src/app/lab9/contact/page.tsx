// src/app/lab9/contact/page.tsx
import React from 'react';
import Link from 'next/link';  // Importujemy Link z Next.js
import './ContactPage.css';  // Plik CSS z stylami dla strony kontaktowej

const ContactPage = () => {
  return (
    <div className="contact-container">
      {/* Link powrotu na stronę Lab 9 */}
      <Link href="/lab9" className="back-to-lab9">
        &#8592; Powrót do Lab 9
      </Link>

      <div className="contact-form-container">
        <h1 className="contact-header">Kontakt</h1>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Wpisz swój email"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-btn">Wyślij</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
