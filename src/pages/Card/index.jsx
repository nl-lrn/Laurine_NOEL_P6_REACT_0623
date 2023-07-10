import { logements } from '../../datas/logements.js';
import { useParams } from 'react-router-dom';
import Error from '../../components/Error';
import Slider from '../../components/Slider';
import Host from '../../components/Host';
import Collapse from '../../components/Collapse';
import '../../styles/Card.css';

function Card() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if(!logement) {
    return <Error />
  }
  
  return (
    <section className="kasa-card">
      <section className="kasa-slider">
        <Slider />
      </section>
      <section>
        <Host />
      </section>
      <section className="kasa-card-collapse">
        <section>
            <Collapse
            label="Description"
            description={logement.description}
            parentClassName="card"
            />
        </section>
        <section>
            <Collapse
            label="Équipements"
            description={logement.equipments.join('\n')}
            parentClassName="card"
            />
        </section>
      </section>
    </section>
  );
}

export default Card;
