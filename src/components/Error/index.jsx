// importaion de 'Link' qui permet la création de lien cliquale vers une autre page
import { Link } from 'react-router-dom';
import '../../styles/Error.css';

function Error() {
    return (
        // utilisation de 'Link' pour permettre d'accéder à la page 'Error' en cas d'erreur dans l'url
        <section className="kasa-error">
            <span className="kasa-number">404</span>
            <span className="kasa-text">
                Oups! La page que vous demandez n'existe pas.
            </span>
            {/* utilisation de 'Link' pour permettre de retourner à la page d'accueil */}
            <Link to="/">Retourner sur la page d’accueil</Link>
        </section>
    );
}

export default Error;
