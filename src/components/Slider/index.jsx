import React, { useState } from 'react';
import { logements } from '../../datas/logements.js';
import { useParams } from 'react-router-dom';
import '../../styles/Slider.css';

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);
    const images = logement.pictures;

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="kasa-slider">
            <div className="kasa-slider-images">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slider ${index}`}
                        className={`kasa-slider-image ${
                            index === currentIndex ? 'active' : ''
                        }`}
                    />
                ))}
                <div className="kasa-counter">
                    <p>
                        {currentIndex + 1}/{images.length}
                    </p>
                </div>
            </div>
            <button className="kasa-slider-btn previous" onClick={goToPrevious}>
                <span>Précédent</span>
                <i className="fa-sharp fa-solid fa-chevron-left arrow"></i>
            </button>
            <button className="kasa-slider-btn next" onClick={goToNext}>
                <span>Suivant</span>
                <i className="fa-sharp fa-solid fa-chevron-right arrow"></i>
            </button>
        </div>
    );
}

export default Slider;
