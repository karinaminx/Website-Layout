import React from "react";
import '../CSS/Datenschutz.css';

import {Route, Routes, Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavFomos from './Nav-Fomos.js';
import FooterFomos from './Footer-Fomos.js';

const lngs = [
    { code: "de", native: "Deutsch" },
    { code: "en", native: "English" },
  ];

function DatenschutzFomos() {
    
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
          <h1>{t("DatenschutzTitle")}</h1>
          </div> 
      </div>
     </section>

    <section id="datenschutz">
     <div>
                <h3 class="texttitle"> {t("Datenschutz_S1_Title")}</h3>
                <p>{t("Datenschutz_S1_Text1")} </p> 
                <p>{t("Datenschutz_S1_Text2")} </p> 
                <p>{t("Datenschutz_S1_Text3")} </p> 
    </div>

    <div>
                <h3 class="texttitle"> {t("Datenschutz_S2_Title")}</h3>
                {t("Datenschutz_S2_Text")} 
    </div>

    <div>
                <h3 class="texttitle"> {t("Datenschutz_S3_Title")}</h3>
                {t("Datenschutz_S3_Text")} 
    </div>

    <div>
                <h3 class="texttitle"> {t("Datenschutz_S3_Title")}</h3>
                {t("Datenschutz_S4_Text")} 
    </div>
    </section>

    <section id="impressum"></section>
        
    <FooterFomos />
    </div>
    </div>
    );
}

export default DatenschutzFomos;
