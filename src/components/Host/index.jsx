import { logements } from '../../datas/logements';
import { useParams } from 'react-router-dom';
import StarActive from '../../assets/star-active.png';
import StarInactive from '../../assets/star-inactive.png';
import '../../styles/Host.css';

function Host() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    const { name, picture } = logement.host;

    const stars = [];
    for (let i = 0; i < logement.rating; i++) {
        stars.push(<img key={i} src={StarActive} alt="étoiles de notations" />);
    }
    for (let i = logement.rating; i < 5; i++) {
        stars.push(
            <img key={i} src={StarInactive} alt="étoiles de notations" />
        );
    }

    return (
        <section className="kasa-host">
            <section className='kasa-locationTag'>
                <div>
                    <span className="kasa-location-title">
                        {logement.title}
                    </span>
                    <br />
                    <span className="kasa-location-logement">
                        {logement.location}
                    </span>
                </div>

                <div className="kasa-tag">
                    {logement.tags.map((tag, id) => (
                        <div key={id}>
                            <p>{tag}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className='kasa-pictureStars'>
                <div className="kasa-details">
                    <span>{name}</span>
                    <img src={picture} alt={`${picture} name`} />
                </div>

                <div className="kasa-stars">
                    {stars}
                </div>
            </section>
        </section>
    );
}

export default Host;
