import { useState } from 'react';
import { logements } from '../../datas/logements.js';
import { useParams } from 'react-router-dom';
import '../../styles/Slider.css';

function Slider() {
    // currentIndex permet de représenter l'indice de l'image qui est actuellement affichée dans le carrousel
    // serCurrentIndex permet de mettre à jour l'indice lorsqu'on change d'image
    const [currentIndex, setCurrentIndex] = useState(0);
    // utilisation de useParams pour extraire l'id du logement en question à partir de l'URL
    const { id } = useParams();
    // utilisation de la méthode find() pour rechercher le logement correspondant à l'id voulu dans le tableaux 'logements' et est stocké dans la constante 'logement'
    const logement = logements.find((logement) => logement.id === id);

    const images = logement.pictures;

    // permet d'afficher l'image précédente par rapport à ce que l'indice d'affichage présente, si l'indice est de 0 (la première image) alors il revient à la dernière image du carrousel (indice de -1)
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // permet d'afficher l'image suivante par rapport à ce que l'indice d'affichage présente, si l'indice est égale à la dernière image du carrousel alors il revient à la première image (indice 0)
    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="kasa-slider">
            <div className="kasa-slider-images">
                {/* méthode map() pour accèder aux images selon le logement */}
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slider ${index}`}
                        /* permet l'utilisation du compteur */
                        className={`kasa-slider-image ${
                            index === currentIndex ? 'active' : ''
                        }`}
                    />
                ))}
                {images.length > 1 && (
                    <div className="kasa-counter">
                        <p>
                            {/* permet l'affichage du compteur si il y a plus d'une seule image */}
                            {currentIndex + 1}/{images.length}
                        </p>
                    </div>
                )}
            </div>
            {/* permet l'affichage des chevrons pour accèder aux images précédentes ou suivantes s'il y a plus d'une seule image */}
            {images.length > 1 && (
                <div>
                    <button
                        className="kasa-slider-btn previous"
                        onClick={goToPrevious}
                    >
                        <span>Précédent</span>
                        <i className="fa-sharp fa-solid fa-chevron-left arrow"></i>
                    </button>
                    <button className="kasa-slider-btn next" onClick={goToNext}>
                        <span>Suivant</span>
                        <i className="fa-sharp fa-solid fa-chevron-right arrow"></i>
                    </button>
                </div>
            )}
        </div>
    );
}

export default Slider;
