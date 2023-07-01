import { logements } from '../../datas/logements.js';
import '../../styles/DisplayCards.css';
import { Link } from 'react-router-dom';

function DisplayCards() {
    return (
        <section className="kasa-displayCardsList kasa-displayCardsSection">
            {logements.map(({ id, cover, title }) => (
                <Link to={`/card/${id}`} key={id} className="kasa-cardsInfo">
                    <div className="kasa-coverImg">
                        <img
                        src={cover}
                        alt={`${title} cover`}
                        />
                    </div>
                    
                    <span>{title}</span>
                </Link>
                
            ))}
        </section>
    );
}

export default DisplayCards;
