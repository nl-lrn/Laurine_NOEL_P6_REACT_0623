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
        <div className="slider">
            <div className="slider-images">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slider ${index}`}
                        className={`slider-image ${
                            index === currentIndex ? 'active' : ''
                        }`}
                    />
                ))}
                <div className="position">
        <p>{currentIndex + 1}/{images.length}</p>
      </div>
            </div>
            <button className="slider-btn" onClick={goToPrevious}>
                Previous
            </button>
            <button className="slider-btn" onClick={goToNext}>
                Next
            </button>
        </div>
    );
}

export default Slider;
