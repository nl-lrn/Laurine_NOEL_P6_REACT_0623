import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// importation des différentes pages utiles pour la navigation
import Home from './pages/Home/';
import About from './pages/About';
// importations des composants communs utiles à plusieurs les pages
import Header from './components/Header';
import Banner from './components/Banner';
import DisplayCards from './components/DisplayCards';
import Collapse from './components/Collapse';
import Footer from './components/Footer';
// importation du composants en cas d'erreur de route dans l'URL
import Error from './components/Error';
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            {/* implantation du Header - pages Home et About */}
            <Header />
            {/* implantation des bannières - pages Home et About */}
            <Banner />
            {/* implantation des cartes logements  - page Home */}
            <DisplayCards />
            {/* implantation du plier/déplier - page About */}
            <Collapse />
            <Routes>
                {/* gestion des différentes paths utilisées */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* le '*' permet de capter toutes les paths non-utilisées ou non-existantes en gérant les erreurs d'URL */}
                <Route path="*" element={<Error />} />
            </Routes>
            {/* implantation du Footer - pages Home et About */}
            <Footer />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);