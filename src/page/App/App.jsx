import Footer from "../../Componets/Footer";
import Header from "../../Componets/Header";
import './App.scss';

import {Routes, Route } from 'react-router-dom';
import MainPage from "../Main-page";
import AboutPage from "../About-page";
import PartnersPage from "../Partners-page";
import OffersPage from "../Offers-page";
import AuthorizationPage from "../Authorization-page";


const App = () => {
  return (
    <div className="wrapper">
      <Header />
        <div className="pages">
            <Routes>
                <Route exact path="/" element={ <MainPage /> } />
                <Route exact path="/about" element={ <AboutPage /> } />
                <Route exact path="/parthers" element={ <PartnersPage /> } />
                <Route exact path="/offers" element={ <OffersPage /> } />
                <Route exact path="/authorization" element={ <AuthorizationPage /> } />
            </Routes>
        </div>
      <Footer />
    </div>
  )
}

export default App;
