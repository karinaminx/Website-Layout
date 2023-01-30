import React from "react";
import '../CSS/Kontakt.css';
import Bild_Melanie_Schienle_klein from '../images/Bild_Melanie_Schienle_klein.jpeg';
import Bild_Johannes_Bracher from '../images/Bild_Johannes_Bracher.png';
import {Route, Routes, Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavFomos from './Nav.js';
import Footer from './Footer.js';

const lngs = [
    { code: "de", native: "Deutsch" },
    { code: "en", native: "English" },
  ];

function Kontakthome() {
    
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
          <h1>{t("kontaktheadline")}</h1>
          </div> 
      </div>
     </section>

    <section id="explanation">
    <div class="expl">
    {t("kontaktexpl")}
    </div>
    </section>
    

    {/* newwwww*/}
      
    <div id="kontakt">
    <div class="">
    
      
    <div id="Kontaktkarte1">
            <div class="card mb-2 Kontaktkarte" >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={Bild_Melanie_Schienle_klein} class="img-fluid rounded-start contact_picture1" alt="Bild"></img>
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
              <div class="row g-0 contact_sm">
                <div class="col-md-4 contact_picture">
                  <img src={Bild_Johannes_Bracher} class="img-fluid rounded-start contact_picture2" alt="Bild"></img>
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

        
      </div>
      
    </div>
    </div>

    
    

    
      <Footer />
    </div>
    
    );
}

export default Kontakthome;