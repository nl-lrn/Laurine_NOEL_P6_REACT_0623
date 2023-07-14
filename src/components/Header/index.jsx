// importaion de 'Link' qui permet la création de lien cliquale vers une autre page
import { Link } from 'react-router-dom';
import '../../styles/Header.css';
import logoHeader from '../../assets/logoHeader.png';

function Header() {
    return (
        <section className="kasa-header">
            {/* utilisation de 'Link' pour permettre de retourner à la page d'accueil lorsqu'on clique sur le logo*/}
            <Link to="/" className="kasa-logo-header">
                {/* permet l'affichage du logo */}
                <img src={logoHeader} alt="logo Kasa" />
            </Link>

            <nav className="kasa-nav">
                {/* utilisation de 'Link' pour permettre d'accéder à la page d'accueil ou à la page à propos */}
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
            </nav>
        </section>
    );
}

export default Header;
