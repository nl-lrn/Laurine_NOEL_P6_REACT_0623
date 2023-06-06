import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse"

function About() {
    return (
        <section>
            <h2>À propos</h2>
            {/* implantation des bannières - pages Home et About */}
            <Banner />
            {/* implantation du plier/déplier - page About */}
            <Collapse />
        </section>
        
    )
}

export default About