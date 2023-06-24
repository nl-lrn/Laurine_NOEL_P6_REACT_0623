import { logements } from '../../datas/logements';
import { useParams } from 'react-router-dom';

function Host() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    const { name, picture } = logement.host;

    return (
        <section>
            <p>{name}</p>
            <img src={picture} alt={`${picture} name`} />
        </section>
    );
}

export default Host;
