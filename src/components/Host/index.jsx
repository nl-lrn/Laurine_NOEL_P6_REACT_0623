import { logements } from '../../datas/logements';
import { useParams } from 'react-router-dom';
import '../../styles/Host.css';

function Host() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    const { name, picture } = logement.host;

    return (
        <section className="kasa-host">
            <div>
                <span className='kasa-location-title'>{logement.title}</span>
                <br />
                <span className='kasa-location-logement'>{logement.location}</span>
            </div>
            <div className="kasa-details">
                <span>{name}</span>
                <img src={picture} alt={`${picture} name`} />
            </div>
        </section>
    );
}

export default Host;
