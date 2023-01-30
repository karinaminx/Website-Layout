import React from "react";
import '../CSS/Fomos-main.css';
import {Route, Routes, Link} from 'react-router-dom';
import NavFomos from './Nav-Fomos.js';
import FooterFomos from './Footer-Fomos.js';

import { useTranslation } from 'react-i18next';

const lngs = [
    { code: "de", native: "Deutsch" },
    { code: "en", native: "English" },
  ];

function Fomosmain() {

    const navStyle={
        textDecoration: 'none',
    };

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
                <div class="titel-text-main">
                    <h1>NOWCAST</h1><h2> {t("heading_nowcast")}</h2> 
                </div> 
            </div>
       </section>

       <section id="expbutton">
       <div className="expbutton">

        {/* Expert Mode Button */}
                <Link style={navStyle} to="/fomosexpert">
                <div class="button expbutton-expoff" >
                    <p class="text-expoff">{t("expertbutton_on")}</p>
                </div>
                </Link>
                
         </div>
        </section>

        <section id="entrance">
            {/* Buttons */}
            <div class="row rowbuttons">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <span class="hovertext" data-hover={t("button1hover_nowcast")}>
                    <div class="button infobutton" >
                        <p class="text-fix">{t("button1_nowcast")}</p>
                        <p class="text-var">xxx</p>
                    </div>
                    </span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <span class="hovertext" data-hover={t("button2hover_nowcast")}>
                    <div class="button infobutton"> 
                        <p class="text-fix">{t("button2_nowcast")}</p>
                        <p class="text-var">xxx</p>
                    </div> 
                    </span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 ">
                    <span class="hovertext" data-hover={t("button3hover_nowcast")}>
                    <div class="button infobutton"> 
                        <p class="text-fix">{t("button3_nowcast")}</p>
                        <p class="text-var">xxx</p>
                    </div>
                    </span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 ">
                    <span class="hovertext" data-hover={t("button4hover_nowcast")}>
                    <div class="button infobutton"> 
                    <table class="button-table">
                        <tr>
                        <td class="text-fix breit">{t("button4_nowcast")}</td>
                        <td class="ext-var">xxx</td>
                        </tr>
                    </table>
                    </div>
                    </span>
                </div>  
            </div>
            


            {/* Text */}
            <section id="text">
            <div class="text-intro">
                <p>
                {t("text1_nowcast")}
                </p>
                <p>
                {t("text2_nowcast")}
                </p>
                <p>
                {t("text3_nowcast")}
                </p>
            </div>
            </section>
            </section>

        {/* Chart overall */}
        {/* Methode  */}

        <section id="chart" >
        {/* Chart to be inserted*/}
        

        </section>

        

        



        {/* Hinweis*/}
        
        <section id="hinweis">
            <div class="text-hinweis">
                
                <p> {t("hinweis")} </p>
                                
            </div>
        </section>



        </div>
        <FooterFomos />
        </div>
       
            );

        
        }

export default Fomosmain;