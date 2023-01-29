import React from "react";
import '../CSS/Kontakt.css';
import Platzhalter_Bild from '../images/Platzhalter_w.jpeg';
import {Route, Routes, Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavFomos from './Nav-Fomos.js';
import Footer from './Footer.js';

const lngs = [
    { code: "de", native: "Deutsch" },
    { code: "en", native: "English" },
  ];

function Kontakt() {
    
    const { t, i18n } = useTranslation();

    const handleTrans = (code) => {
        i18n.changeLanguage(code);
      };
    
    return (
      <div>
        <NavFomos />
      
    <div>
            
            <section id="title">
      {/* Überschrift */}
       <div class="title">
        <i class="fa-regular fa-dash lineheader"></i>
          <div class="titel-text">
          <h1>KONTAKT</h1>
          </div> 
      </div>
     </section>

    <section id="explanation">
    <div class="expl">

        Diese Plattform wird betrieben von Mitgliedern des Lehrstuhls für Statistik und Ökonometrie am Karlsruher Institut für Technologie und der Computational Statistics Gruppe am Heidelberger Institut für Theoretische Studien.
        Sie können uns unter forecasthub@econ.kit.edu kontaktieren. Technische Hinweise können Sie auch als Issue in unserem GitHub Repositoryabgeben.

    </div>
    </section>
    

    {/* newwwww*/}
      
    <div id="kontakt">
    <div class="">
    
      
      <div id="Kontaktkarte1">
            <div class="card mb-3 Kontaktkarte" >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={Platzhalter_Bild} class="img-fluid rounded-start" alt="Platzhalter"></img>
                </div>
                <div class="col-md-8 kontakttext">
                  <div class="card-body">
                    <h5 class="card-title">Prof. Dr. Melanie Schienle</h5>
                    <p class="card-text">Professorin am Karlsruher Institut für Technologie</p>
                    <p class="card-text">
                      <div class="Kontaktdaten">
                          <a href= "mailto:melanie.schienle@kit.edu"> <small class="text-muted">  melanie.schienle@kit.edu </small></a>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>


      <div id="Kontaktkarte2">
            <div class="card mb-3 Kontaktkarte" >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={Platzhalter_Bild} class="img-fluid rounded-start" alt="Platzhalter"></img>
                </div>
                <div class="col-md-8 kontakttext">
                  <div class="card-body">
                    <h5 class="card-title">Prof. Dr. Alexander Mädche,</h5>
                    <p class="card-text">Professor am Karlsruher Institut für Technologie </p>
                    <p class="card-text">
                      <div class="Kontaktdaten">
                        <a href= "mailto: alexander.maedche@kit.edu"> <small class="text-muted">  alexander.maedche@kit.edu </small></a>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

    </div>
    </div>

    
    

    
      <Footer />
    </div>
    
    );
}

export default Kontakt;