import '../../styles/Footer.css';
import logoFooter from '../../assets/logoFooter.png';

function Footer() {
    return (
        <section className="kasa-footer">
            <img
                /* permet l'affichage du logo */
                src={logoFooter}
                alt="logo Kasa"
                className="kasa-logo-footer"
            />
            <p>© 2020 Kasa. All rights reserved</p>
        </section>
    );
}

export default Footer;
