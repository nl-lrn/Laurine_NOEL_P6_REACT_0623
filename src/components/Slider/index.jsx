// import { logements } from '../../datas/logements.js';

function Slider(props) {
    // const id = logements.find((logements) => logements.id === id);
    return (
        <section>
                <section key={props.id}>
                    <img src={props.pictures} alt={`${props.title} pictures`} />
                    <i className="fa-sharp fa-solid fa-chevron-right"></i>
                    <i className="fa-sharp fa-solid fa-chevron-left"></i>
                </section>
        </section>
    );
}

export default Slider;
