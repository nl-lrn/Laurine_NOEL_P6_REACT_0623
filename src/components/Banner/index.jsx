import React from 'react';
import '../../styles/Banner.css';

function Banner({ children, page }) {
  let backgroundImage = '';

  if (page === 'home') {
    backgroundImage = 'kasa-bgImgHome';
  } else if (page === 'about') {
    backgroundImage = 'kasa-bgImgAbout';
  }

  return (
    <section className={`kasa-banner ${backgroundImage}`}>
      {children}
    </section>
  );
}

export default Banner;
