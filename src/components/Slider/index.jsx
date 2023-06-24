import { logements } from '../../datas/logements.js';
import { useParams } from 'react-router-dom';

function Slider() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    return (
        <section>
            <section>
                {logement.pictures.map((picture, index) => (
                    <img
                        key={index}
                        src={picture}
                        alt={`${logement.title} ${index + 1}`}
                    />
                ))}
            </section>
            <i className="fa-sharp fa-solid fa-chevron-right"></i>
            <i className="fa-sharp fa-solid fa-chevron-left"></i>
        </section>
    );
}

export default Slider;
