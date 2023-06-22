import { logements } from '../../datas/logements.js';
import '../../styles/DisplayCards.css';
import { Link } from 'react-router-dom';

function DisplayCards() {
    return (
        <section className="kasa-displayCardsList kasa-displayCardsSection">
            {logements.map(({ id, cover, title }) => (
                <Link key={id} className="kasa-cardsInfo">
                    <img
                        className="kasa-coverImg"
                        src={cover}
                        alt={`${title} cover`}
                    />
                    <span>{title}</span>
                </Link>
            ))}
        </section>
    );
}

export default DisplayCards;

// import { logements } from '../../datas/logements.js';
// import '../../styles/DisplayCards.css';
// import Card from '../Card';

// function DisplayCards() {
//     return (
//         <section className="kasa-displayCardsList kasa-displayCardsSection">
//             {logements.map((e) => (
//                 // <article key={id} className="kasa-cardsInfo">
//                 //     <img
//                 //         className="kasa-coverImg"
//                 //         src={cover}
//                 //         alt={`${title} cover`}
//                 //     />
//                 //     <span>{title}</span>
//                 // </article>
//                 <Card key={e.id} id={e.id} title={e.title} cover={e.cover} />
//             ))}
            
//         </section>
//     );
// }

// export default DisplayCards;