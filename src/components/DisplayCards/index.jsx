// importation des données relatives aux logements à afficher
import { logements } from '../../datas/logements.js';
import '../../styles/DisplayCards.css';
// importaion de 'Link' qui permet la création de lien cliquale vers une autre page
import { Link } from 'react-router-dom';

function DisplayCards() {
    return (
        <section className="kasa-displayCardsList kasa-displayCardsSection">
            {/* utilisation de la méthode map() pour récuperer l'id, la cover et le titre de chaques logements afin de les afficher et générer dynamiquement plusieurs cards affichant les données différentes */}
            {logements.map(({ id, cover, title }) => (
                /* utilisation de 'Link' pour permettre d'accéder à la page du logement choisi grâce à la route spécifique qui basée sur l'id du logement */
                <Link to={`/card/${id}`} key={id} className="kasa-cardsInfo">
                    <div className="kasa-coverImg">
                        <img src={cover} alt={`${title} cover`} />
                    </div>

                    <span>{title}</span>
                </Link>
            ))}
        </section>
    );
}

export default DisplayCards;
