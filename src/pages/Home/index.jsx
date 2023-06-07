import Banner from "../../components/Banner";
import DisplayCards from "../../components/DisplayCards";

function Home() {
  return (
    <section>
      {/* implantation des bannières - pages Home et About */}
      <Banner>
          <span>Chez vous, partout et ailleurs</span>
        </Banner>
      {/* implantation des cartes logements  - page Home */}
      <DisplayCards />
    </section>
  )
}

export default Home;
