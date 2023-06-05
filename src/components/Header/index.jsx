import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            {/* <img src="" alt="" /> */}
            <Link to="/">Accueil</Link>
            <Link to="/about">À propos</Link>
        </nav>
    )
};

export default Header;