import { logements } from '../../datas/logements.js';
import { useParams } from 'react-router-dom';
import Slider from '../../components/Slider';
import Host from '../../components/Host';
import Tag from '../../components/Tag';
import Rate from '../../components/Rate';
import Collapse from '../../components/Collapse';
import '../../styles/Card.css';

function Card() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);
    
    return (
        <section className='kasa-card'>
            <section className='kasa-slider'>
                <Slider />
            </section>
            <section>
                <Host />
            </section>
            <section className='kasa-tag-rate'>
                <Tag />
                <Rate />
            </section>
            <section className='kasa-card-collapse'>
                <Collapse
                    className='kasa-card-collapse-description'
                    label="Description"
                    description={logement.description}
                />
                <Collapse
                    className='kasa-card-collapse-equipements'
                    label="Équipements"
                    description={logement.equipments}
                />
            </section>
        </section>
    );
}

export default Card;
