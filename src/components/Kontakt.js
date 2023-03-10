import React from "react";
import '../CSS/Kontakt.css';
import Bild_Melanie_Schienle from '../images/Bild_Melanie_Schienle.jpeg';
import Bild_Alexander_Mädche from '../images/Bild_Alexander_Mädche.jpg';
import Bild_Johannes_Bracher from '../images/Bild_Johannes_Bracher.png';
import Bild_Jonas_Gunklach from '../images/Bild_Jonas_Gunklach.jpeg';
import {Route, Routes, Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Nav from './Nav.js';
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
        <Nav />
      
    <div>
            
            <section id="title">
      {/* Überschrift */}
       <div class="title">
        <i class="fa-regular fa-dash lineheader"></i>
          <div class="titel-text">
          <h1>{t("kontaktheadline")}</h1>
          </div> 
      </div>
     </section>

    <section id="explanation">
    <div class="expl">

    {t("kontakttext1")}
    <a href="mail:  forecasthub@econ.kit.edu" >  forecasthub@econ.kit.edu</a>
    {t("kontakttext2")}
    </div>
    </section>
    

    {/* newwwww*/}
      
    <div id="kontakt">
    <div class="">
    
      
    <div id="Kontaktkarte1">
            <div class="card mb-2 Kontaktkarte" >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={Bild_Melanie_Schienle} class="img-fluid rounded-start contact_picture1" alt="Bild" style={{ height: "190px" }} ></img>
                </div>
                <div class="col-md-8 kontakttext">
                  <div class="card-body">
                    <h5 class="card-title">Prof. Dr. Melanie Schienle</h5>
                    <p class="card-text">{t("kontaktprof1")} Karlsruher Institut für Technologie</p>
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
                  <img src={Bild_Alexander_Mädche} class="img-fluid rounded-start contact_picture1" alt="Bild" style={{ height: "190px" }}></img>
                </div>
                <div class="col-md-8 kontakttext">
                  <div class="card-body">
                    <h5 class="card-title">Prof. Dr. Alexander Mädche</h5>
                    <p class="card-text">{t("kontaktprof2")} Karlsruher Institut für Technologie </p>
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


        <div id="Kontaktkarte3">
            <div class="card mb-3 Kontaktkarte" >
              <div class="row g-0 contact_sm">
                <div class="col-md-4 contact_picture">
                  <img src={Bild_Johannes_Bracher} class="img-fluid rounded-start contact_picture2" alt="Bild" ></img>
                </div>
                <div class="col-md-8 kontakttext">
                  <div class="card-body">
                    <h5 class="card-title">Dr. Johannes Bracher</h5>
                    <p class="card-text">Karlsruher Institut für Technologie </p>
                    <p class="card-text">
                      <div class="Kontaktdaten">
                        <a href= "mailto: johannes.bracher@kit.edu"> <small class="text-muted">  johannes.bracher@kit.edu </small></a>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div id="Kontaktkarte4">
            <div class="card mb-3 Kontaktkarte" >
              <div class="row g-0 contact_sm">
                <div class="col-md-4">
                  <img src={Bild_Jonas_Gunklach} class="img-fluid rounded-start contact_picture2" alt="Bild"></img>
                </div>
                <div class="col-md-8 kontakttext">
                  <div class="card-body">
                    <h5 class="card-title">M. Sc. Jonas Gunklach</h5>
                    <p class="card-text">Karlsruher Institut für Technologie </p>
                    <p class="card-text">
                      <div class="Kontaktdaten">
                        <a href= "mailto: jonas.gunklach@kit.edu"> <small class="text-muted">  jonas.gunklach@kit.edu </small></a>
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