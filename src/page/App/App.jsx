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
                <Route path="/" element={ <MainPage /> } />
                <Route path="/about" element={ <AboutPage /> } />
                <Route path="/parthers" element={ <PartnersPage /> } />
                <Route path="/offers" element={ <OffersPage /> } />
                <Route path="/authorization" element={ <AuthorizationPage /> } />
                {/*<Route path="*" element={<MainPage />} />*/}
            </Routes>
        </div>
      <Footer />
    </div>
  )
}

export default App;
