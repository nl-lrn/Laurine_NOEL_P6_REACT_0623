import Banner from "../../components/Banner";
import '../../styles/About.css';
import CollapseInfo from "../../components/CollapseInfo";

function About() {
    return (
        <section>
            {/* implantation des bannières - pages Home et About */}
            <Banner page="about"/>
            {/* implantation du système du plier/déplier */}
            <CollapseInfo />
        </section>
        
    )
}

export default About