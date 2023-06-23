import { useState } from 'react';
import '../../styles/Collapse.css';

function Collapse({id, label, description}) {
    const [isVisible, setIsVisible] = useState(true);

    return isVisible ? (
        <section className="kasa-dropDown">
            <button
                className="kasa-dropDownClose"
                onClick={() => setIsVisible(false)}
            >
                <div className="kasa-collapse-flex">
                    <h3>{label}</h3>
                    <span>Ouvrir le descriptif</span>
                    <i className="fa-sharp fa-solid fa-chevron-down"></i>
                </div>
            </button>
        </section>
    ) : (
        <section className="kasa-dropDown">
            <button
                className="kasa-dropDownOpen"
                onClick={() => setIsVisible(true)}
            >
                <div className="kasa-collapse-flex">
                    <h3>{label}</h3>
                    <span>Fermer le descriptif</span>
                    <i className="fa-sharp fa-solid fa-chevron-up"></i>
                </div>
            </button>
            <div className="kasa-collapseDescription" key={id}>
                <p>{description}</p>
            </div>
        </section>
    );
}

export default Collapse;
