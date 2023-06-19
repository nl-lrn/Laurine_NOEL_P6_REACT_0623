import { logements } from '../../datas/logements.js';
import '../../styles/DisplayCards.css';

function DisplayCards() {
    return (
        <section className="kasa-displayCardsList kasa-displayCardsSection">
            {logements.map(({ id, cover, title }) => (
                <article key={id} className="kasa-cardsInfo">
                    <img
                        className="kasa-coverImg"
                        src={cover}
                        alt={`${title} cover`}
                    />
                    <span>{title}</span>
                </article>
            ))}
        </section>
    );
}

export default DisplayCards;