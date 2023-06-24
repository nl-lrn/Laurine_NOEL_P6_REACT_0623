import { logements } from "../../datas/logements";
import { useParams } from 'react-router-dom';

function Rate() {

    const id  = useParams();
    const idLogement = id.id;
    const logement = logements.find((logement) => logement.id === idLogement);

    const range = [1, 2, 3, 4, 5];
    return (
        <section>

            <i icon="fa-solid fa-star" />
        </section>
        
    )
}

export default Rate;