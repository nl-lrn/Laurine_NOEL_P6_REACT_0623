import Banner from "../../components/Banner";
import AboutInfos from "../../components/AboutInfos";
import '../../styles/About.css';

function About() {
    return (
        <section>
            {/* implantation des bannières - pages Home et About */}
            <Banner />
            {/*  */}
            <AboutInfos />
        </section>
        
    )
}

export default About