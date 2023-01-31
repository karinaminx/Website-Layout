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
    <div class="textbereich">
     <div>
                <h3 class="texttitle"> {t("Datenschutz_S1_Title")}</h3>
                <p>{t("Datenschutz_S1_Text1")} </p> 
                <p>{t("Datenschutz_S1_Text2")} </p> 
                <p>{t("Datenschutz_S1_Text3")} </p> 
    </div>
    <br />
    <br />
    <div>
                <h3 class="texttitle"> {t("Datenschutz_S2_Title")}</h3>
                <p>{t("Datenschutz_S2_Text1")}</p> 
                <p>{t("Datenschutz_S2_Text2")} </p>
                <p>{t("Datenschutz_S2_Text3")} </p>
    </div>
    <br />
    <br />
    <div>
                <h3 class="texttitle"> {t("Datenschutz_S3_Title")}</h3>
                {t("Datenschutz_S3_Text1")} 
                <br />
                <br />
       <ul> 
                <li class="Gruppen"> {t("Datenschutz_S3_ul1")}</li>
                <li class="Gruppen"> {t("Datenschutz_S3_ul2")}</li>
                <li class="Gruppen"> {t("Datenschutz_S3_ul3")}</li>
                <li class="Gruppen"> {t("Datenschutz_S3_ul4")}</li>
                <li class="Gruppen"> {t("Datenschutz_S3_ul5")}</li>
                 </ul>
    </div>
    <br /> 
    <div>
                <h3 class="texttitle"> {t("Datenschutz_S3_Title")}</h3>
                {t("Datenschutz_S4_Text")} 
    </div>
    </div>
    </section>
    <br />

    <section id="impressum">
    <div class="title">
        <i class="fa-regular fa-dash lineheader"></i>
          <div class="titel-text">
          <h1>{t("ImpressumTitle")}</h1>
          </div> 
      </div>
    <div class="textbereich_Impressum">

      <p class="texttitle">  {t("Impressum_S1_Title")}</p>

      <p class="adresse"> UIG e.V.     <br />
      c/o Karlsruher Institut für Technologie     <br />
      IISM/ISSD     <br />
      Kaiserstr. 93     <br />
      76133 Karlsruhe</p>

      <br />
      <p class="texttitle">  {t("Impressum_S2_Title")}</p>
      <p> {t("Impressum_S2_Text1")} +49 721 608-41585 </p>
      <p> {t("Impressum_S2_Text2")} info@usability-in-germany.de </p>

      <br />
      <p class="texttitle">  {t("Impressum_S3_Title")}</p>
      <p>  {t("Impressum_S3_Text1")}</p>
      <p>  {t("Impressum_S3_Text2")}</p>
      <p>  {t("Impressum_S3_Text3")}</p>
      
      <br />
      <p class="texttitle">  {t("Impressum_S4_Title")}</p>
      <p>  Prof. Dr. Alexander Mädche </p>
    
      <br />
      <p class="texttitle">  {t("Impressum_S5_Title")}</p>
      <p> <a href="https://hci-karlsruhe.org/impressum/"> e-recht24.de </a> </p>
    
    </div>

    </section>
        </div>
    <FooterFomos />
    </div>
    
    );
}

export default DatenschutzFomos;
