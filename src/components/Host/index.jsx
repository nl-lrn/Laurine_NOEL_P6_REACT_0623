import { logements } from "../../datas/logements";
import { useParams } from 'react-router-dom';

function Host() {
    
    const { id } = useParams();
    const idHost = parseInt(id);

    const host = logements.find((logement) => logement.id === idHost);

    return (
        <section>
            <p>
                {host && host.name}
            </p>
            { host && <img src={host.picture} alt={host.name + " cover" }/>}
        </section>   
    )
}

export default Host;