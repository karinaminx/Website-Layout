import React from "react";
import '../App.css';
import '../CSS/Home.css';
import {Route, Routes, Link} from 'react-router-dom';
import covidlogo from '../images/SARS-CoV2.jpeg';
import fomosLogo from '../images/fomos-logo-rakete.jpeg'; /*nur Rakete oder schrift fomos hub in blau*/
import energie from '../images/Bild_energie.jpeg';
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
            <img src={covidlogo}  class="card-img-top schaubild" alt="Schaubild Forecasting" />
            <div class="card-body card-project">
              <h5 class="card-title">{t("corona_headline")}</h5>
              <p class="card-text">{t("corona_explain")}</p>
              <Link to="/fomos">
                <a href="index.html" class="btn btn-outline-secondary forecastingbutton">{t("forecasting_button")}</a>
              </Link>
            </div>
          </div>

          <div class="card rounded project-box">
            <img src={fomosLogo} class="card-img-top" alt="Schaubild Forecasting" />
            <div class="card-body">
              <h5 class="card-title">{t("two_headline")}</h5>
              <p class="card-text">{t("two_explain")}</p>
              <br></br>
              <a href="#" class="btn disabled btn-outline-secondary forecastingbutton">{t("forecasting_button")}</a>
            </div>
          </div>

          <div class="card rounded project-box">
            <img src={fomosLogo} class="card-img-top" alt="Schaubild Forecasting" />
            <div class="card-body">
              <h5 class="card-title">{t("three_headline")}</h5>
              <p class="card-text">{t("three_explain")}</p>
              <br></br>
              <a href="#" class="btn disabled btn-outline-secondary forecastingbutton">{t("forecasting_button")}</a>
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