import { Link } from 'react-router-dom';
import '../../styles/Error.css';

function Error() {
    return (
        <section className='kasa-error'>
            <span className='kasa-number'>404</span>
            <span className='kasa-text'>Oups! La page que vous demandez n'existe pas.</span>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </section>
    )
};

export default Error;