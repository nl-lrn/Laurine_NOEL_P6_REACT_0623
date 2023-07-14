import '../../styles/Banner.css';

function Banner({ children, page }) {
    let backgroundImage = '';

    // condition pour pouvoir afficher la bannière correspondante selon la page sur laquelle on se trouve
    if (page === 'home') {
        backgroundImage = 'kasa-bgImgHome';
    } else if (page === 'about') {
        backgroundImage = 'kasa-bgImgAbout';
    }

    return (
        <section className={`kasa-banner ${backgroundImage}`}>
            {/* permet l'affichage du texte de la bannière */}
            {children}
        </section>
    );
}

export default Banner;
