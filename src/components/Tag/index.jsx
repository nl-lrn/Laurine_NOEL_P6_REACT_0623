import { logements } from '../../datas/logements';
import { useParams } from 'react-router-dom';
import '../../styles/Tag.css';

function Tag() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    return (
        <section className='kasa-tag'>
            {logement.tags.map((tag, index) => (
                <div key={index}>
                    <p >{tag}</p>
                </div>
                
            ))}
        </section>
    );
}

export default Tag;
