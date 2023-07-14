import Banner from "../../components/Banner";
import '../../styles/About.css';
import CollapseInfo from "../../components/CollapseInfo";

function About() {
    return (
        <section>
            {/* importation des bannières - pages Home et About */}
            <Banner page="about"/>
            {/* importation du système du plier/déplier */}
            <CollapseInfo />
        </section>
        
    )
}

export default About