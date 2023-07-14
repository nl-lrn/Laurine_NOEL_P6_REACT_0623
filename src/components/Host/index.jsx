import { logements } from '../../datas/logements';
import { useParams } from 'react-router-dom';
// importation des étoiles colorées et non-colorées pour l'utilisation lors de la notation
import StarActive from '../../assets/star-active.png';
import StarInactive from '../../assets/star-inactive.png';
import '../../styles/Host.css';

function Host() {
    // utilisation de useParams pour extraire l'id du logement en question à partir de l'URL
    const { id } = useParams();
    // utilisation de la méthode find() pour rechercher le logement correspondant à l'id voulu dans le tableaux 'logements' et est stocké dans la constante 'logement'
    const logement = logements.find((logement) => logement.id === id);

    // permet d'assigner ces valeurs à logements.host
    const { name, picture } = logement.host;

    // initialisation d'un tableau vide afin de stocker les images en fonction de la notation du logement
    const stars = [];
    // les étoiles colorées sont ajoutées à la hauteur de la notation du logement
    for (let i = 0; i < logement.rating; i++) {
        stars.push(<img key={i} src={StarActive} alt="étoiles de notations" />);
    }
    // les étoiles non-colorées sont ajoutées afin de combler la notation pour arriver à un total de 5 étoiles
    for (let i = logement.rating; i < 5; i++) {
        stars.push(
            <img key={i} src={StarInactive} alt="étoiles de notations" />
        );
    }

    return (
        <section className="kasa-host">
            <section className="kasa-locationTag">
                <div>
                    {/* affichage du titre de la location */}
                    <span className="kasa-location-title">
                        {logement.title}
                    </span>
                    <br />
                    {/* affichage du résumé de la location */}
                    <span className="kasa-location-logement">
                        {logement.location}
                    </span>
                </div>

                <div className="kasa-tag">
                    {/* méthode map() pour accéder aux tag des différents logements en utilisant la key 'id' */}
                    {logement.tags.map((tag, id) => (
                        <div key={id}>
                            <p>{tag}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="kasa-pictureStars">
                <div className="kasa-details">
                    {/* permet l'affichage du nom et de la photo de l'hôte du logement */}
                    <span>{name}</span>
                    <img src={picture} alt={`${picture} name`} />
                </div>

                <div className="kasa-stars">
                    {/* permet l'affichage des étoiles de notation */}
                    {stars}
                </div>
            </section>
        </section>
    );
}

export default Host;
