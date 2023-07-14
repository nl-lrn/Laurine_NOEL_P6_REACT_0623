// ajout de la fonction 'useState' qui est fournie par React, qui permet à un composant de stocker des valeurs qui peuvent être modifiées, ce qui permet d'avoir une interface utilisateur plus intéractive
import { useState } from 'react';
import '../../styles/Collapse.css';

function Collapse({ id, label, description, parentClassName }) {
    // permet de définir si le composant est visible (true) ou non
    const [isVisible, setIsVisible] = useState(true);

    // utilisation d'un ternaire pour gérer les différentes utilisations du composant Collapse
    const collapseClassName = parentClassName
        ? `${parentClassName}-collapse`
        : '';

    return isVisible ? (
        // si l'élément du composant est à 'false' alors il n'est pas visible, et l'élément est 'plié/caché'
        <section className={`kasa-dropDown ${collapseClassName}`}>
            <button
                className={`kasa-dropDownClose ${collapseClassName}`}
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
        // si l'élément du composant est à 'true' alors il devient visible et est donc 'déplié/visible'
        <section className={`kasa-dropDown ${collapseClassName}`}>
            <button
                className={`kasa-dropDownOpen ${collapseClassName}`}
                onClick={() => setIsVisible(true)}
            >
                <div className="kasa-collapse-flex">
                    {/* utilisation des props id, label et description afin d'avoir accès aux infos nécessaires*/}
                    <h3>{label}</h3>
                    <span>Fermer le descriptif</span>
                    <i className="fa-sharp fa-solid fa-chevron-up"></i>
                </div>
            </button>
            {/* la prop key permet de savoir quel élément d'une liste ou d'un tableau a été changé, ajouté ou supprimé, la key est une valeur unique attribuée aux éléments de la liste */}
            <div className="kasa-collapseDescription" key={id}>
                <p>{description}</p>
            </div>
        </section>
    );
}

export default Collapse;
