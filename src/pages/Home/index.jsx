import Banner from '../../components/Banner';
import DisplayCards from '../../components/DisplayCards';

function Home() {
    return (
        <section>
            {/* implantation des bannières - pages Home et About */}
            <Banner page="home">
                <h1>Chez vous, <br /> partout et ailleurs</h1>
            </Banner>
            {/* implantation des cartes logements  - page Home */}
            <DisplayCards />
        </section>
    );
};

export default Home;
