import { logements } from '../../datas/logements.js';
import { useParams } from 'react-router-dom';
import Error from '../../components/Error';
import Slider from '../../components/Slider';
import Host from '../../components/Host';
import Collapse from '../../components/Collapse';
import '../../styles/Card.css';

function Card() {
  // utilisation de useParams pour extraire l'id du logement en question à partir de l'URL
  const { id } = useParams();
  // utilisation de la méthode find() pour rechercher le logement correspondant à l'id voulu dans le tableaux 'logements' et est stocké dans la constante 'logement'
  const logement = logements.find((logement) => logement.id === id);

  if(!logement) {
    /* importation de la page Error si l'URL n'est pas bonne */
    return <Error />
  }
  
  return (
    <section className="kasa-card">
      <section className="kasa-slider">
        {/* importation du composant Slider */}
        <Slider />
      </section>
      <section>
        {/* importation du composant Host */}
        <Host />
      </section>
      <section className="kasa-card-collapse">
        <section>
          {/* importation des composants Collapse en fonction des différentes infos nécessaires en fonction de leurs affichages (la description et les tags par rapport à l'id du logement) */}
            <Collapse
            label="Description"
            description={logement.description}
            /* gestion pour le style CSS en fonction du composant Collapse selon la page sur laquelle il se toruve */
            parentClassName="card"
            />
        </section>
        <section>
          {/* importation des composants Collapse en fonction des différentes infos nécessaires en fonction de leurs affichages (la description et les tags par rapport à l'id du logement) */}
            <Collapse
            label="Équipements"
            /* permet d'afficher les tags sur une lignes distinctes */
            description={logement.equipments.join('\n')}
            /* gestion pour le style CSS en fonction du composant Collapse selon la page sur laquelle il se toruve */
            parentClassName="card"
            />
        </section>
      </section>
    </section>
  );
}

export default Card;
