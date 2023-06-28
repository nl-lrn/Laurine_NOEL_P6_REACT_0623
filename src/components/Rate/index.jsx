import { logements } from '../../datas/logements';
import { useParams } from 'react-router-dom';
import StarActive from '../../assets/star-active.png';
import StarInactive from '../../assets/star-inactive.png';

function Rate() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    const stars = [];
    for (let i = 0; i < logement.rating; i++) {
        stars.push(<img key={i} src={StarActive} alt="étoiles de notations" />);
    }
    for (let i = logement.rating; i < 5; i++) {
        stars.push(
            <img key={i} src={StarInactive} alt="étoiles de notations" />
        );
    }
    return <section>{stars}</section>;
}

export default Rate;
