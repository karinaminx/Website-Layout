import React from "react";
import '../App.css';
import '../CSS/Home.css';
import {Route, Routes, Link} from 'react-router-dom';
import covidlogo from '../images/covid.jpeg';
import KITlogo from '../images/KITlogo.jpeg';
import Nav from './Nav.js';
import Footer from './Footer.js';

import { useTranslation } from 'react-i18next';

const lngs = [
    { code: "de", native: "Deutsch" },
    { code: "en", native: "English" },
  ];

/* Inhalt von der Fomos Main page */

function Home() {

  const { t, i18n } = useTranslation();

    const handleTrans = (code) => {
        i18n.changeLanguage(code);
      };
      
  return (
   <div>
    <Nav />
    

   { /* Einleitungstext */}
    <div>
    <section id="text">
            <div class="text-intro">
                <p>{t("text1_home")}</p>
                <p>{t("text2_home")}</p>
            </div>
    </section>
    
    
    {/* Projekte */}
    <section id="projects"> 
        { /* erste Reihe  */ }
      <div class="card-group">
          <div class="card rounded project-box">
            <img src={covidlogo}  class="card-img-top" alt="Schaubild Forecasting" />
            <div class="card-body card-project">
              <h5 class="card-title">{t("corona_headline")}</h5>
              <p class="card-text">{t("corona_explain")}</p>
              <Link to="/fomos">
                <a href="index.html" class="btn btn-outline-secondary forecastingbutton">{t("forecasting_button")}</a>
              </Link>
            </div>
          </div>

          <div class="card rounded project-box">
            <img src={KITlogo} class="card-img-top" alt="Schaubild Forecasting" />
            <div class="card-body">
              <h5 class="card-title">{t("two_headline")}</h5>
              <p class="card-text">{t("two_explain")}</p>
              <a href="#" class="btn btn-outline-secondary forecastingbutton">{t("forecasting_button")}</a>
            </div>
          </div>

          <div class="card rounded project-box">
            <img src={KITlogo} class="card-img-top" alt="Schaubild Forecasting" />
            <div class="card-body">
              <h5 class="card-title">{t("three_headline")}</h5>
              <p class="card-text">{t("three_explain")}</p>
              <a href="#" class="btn btn-outline-secondary forecastingbutton">{t("forecasting_button")}</a>
            </div>
          </div>
        </div>

     
    </section>






    </div>
    <Footer />
    </div>
  );
}

export default Home;