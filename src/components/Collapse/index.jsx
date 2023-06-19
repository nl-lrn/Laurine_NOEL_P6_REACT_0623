import { useState } from 'react';
import '../../styles/Collapse.css';

function Collapse(props) {
    const [isVisible, setIsVisible] = useState(true);

    return isVisible ? (
        <section className="kasa-dropDown">
            <button
                className="kasa-dropDownOpen"
                onClick={() => setIsVisible(false)}
            >
                <h3>{props.label}</h3>
                <span>Ouvrir le descriptif</span>
            </button>
        </section>
    ) : (
        <section className="kasa-dropDownUp">
            <button onClick={() => setIsVisible(true)}>
                <h3>{props.label}</h3>
                <span>Fermer le descriptif</span>
            </button>
            <p key={props.id}>
                <p>{props.description}</p>
            </p>
        </section>
    );
}

export default Collapse;
