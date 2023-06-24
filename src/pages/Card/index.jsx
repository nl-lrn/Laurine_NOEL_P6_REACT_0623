import { logements } from '../../datas/logements.js';
import { useParams } from 'react-router-dom';
// import { useState } from 'react';
import Slider from '../../components/Slider';
import Host from '../../components/Host';
import Tag from '../../components/Tag';
import Rate from '../../components/Rate';
import Collapse from '../../components/Collapse';

function Card() {
    const id = useParams();
    const idLogement = id.id;
    const logement = logements.find((logement) => logement.id === idLogement);
    
    return (
        <section>
            <Slider />
            <Host />
            <Tag />
            <Rate />
            <div>
                <Collapse
                    label="Description"
                    description={logement.description}
                />
                <Collapse
                    label="Équipements"
                    description={logement.equipments}
                />
            </div>
        </section>
    );
}

export default Card;
