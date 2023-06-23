import { logements } from "../../datas/logements";
import { useParams } from 'react-router-dom';

function Tag() {
    
    const id  = useParams();
    const idLogement = id.id;

    const logement = logements.find((logement) => logement.id === idLogement);

    return (
        <section>
                <p>
                    {logement && logement.tags}
                </p>
        </section>   
    )
}

export default Tag;