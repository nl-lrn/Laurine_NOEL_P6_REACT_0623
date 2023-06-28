import { logements } from '../../datas/logements.js';
import { useParams } from 'react-router-dom';
import Slider from '../../components/Slider';
import Host from '../../components/Host';
import Tag from '../../components/Tag';
import Rate from '../../components/Rate';
import Collapse from '../../components/Collapse';

function Card() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);
    
    return (
        <section>
            <section>
                <Slider />
            </section>
            <section>
                <Host />
            </section>
            <section>
                <Tag />
                <Rate />
            </section>
            <section>
                <Collapse
                    label="Description"
                    description={logement.description}
                />
                <Collapse
                    label="Équipements"
                    description={logement.equipments}
                />
            </section>
        </section>
    );
}

export default Card;
