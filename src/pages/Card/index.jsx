// import { logements } from '../../datas/logements.js';
// import { useParams } from 'react-router-dom';
// import { useState } from 'react';
import Slider from "../../components/Slider";
import Host from "../../components/Host";
import Tag from "../../components/Tag";
import Rating from "../../components/Rating";
import Collapse from "../../components/Collapse";

function Card() {
    // const { id } = useParams();
    // const cardId = logements.find((logements) => logements.id === id);
    return (
        <section>
            <div>
                <Slider />
                <Host />
                <Tag />
                <Rating />
                <Collapse />
            </div>
        </section>
    )
}

export default Card