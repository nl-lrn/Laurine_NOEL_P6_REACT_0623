import { logements } from '../../datas/logements.js';
import '../../styles/DisplayCards.css';

function DisplayCards() {
    return (
        <section className='kasa-displayCardsSection'>
            <ul className='kasa-displayCardsList'>
                {logements.map(({id, cover, title }) => 
                    <li key={id} className='kasa-cardsInfo'>
                        <img className='kasa-coverImg' src={cover} alt={`${title} cover`} />
                       {title}
                    </li>
                )}
            </ul>
        </section>
    )
};

export default DisplayCards;