import { Link } from 'react-router-dom';
import '../../styles/Header.css';
import logoHeader from '../../assets/logoHeader.png';

function Header() {
    return (
        <section className="kasa-header">
            <Link to="/" className="kasa-logo-header">
                <img src={logoHeader} alt="logo Kasa" />
            </Link>

            <nav className="kasa-nav">
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
            </nav>
        </section>
    );
}

export default Header;
