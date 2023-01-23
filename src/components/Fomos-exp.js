import React from "react";
import '../CSS/Fomos-exp.css';
import {Route, Routes, Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const lngs = [
    { code: "de", native: "Deutsch" },
    { code: "en", native: "English" },
  ];

function Fomosexp() {
    
    const navStyle={
        textDecoration: 'none',
    };

    const { t, i18n } = useTranslation();

    const handleTrans = (code) => {
        i18n.changeLanguage(code);
      };

    return (
        
        
        <div>
        <section id="title">
        
        {/* Überschrift */}
            <div class="title">
            <i class="fa-regular fa-dash line"></i>
                <div class="titel-text-main">
                    <h1>NOWCAST EXPERT</h1><h2> {t("heading_nowcast")}</h2> 
                </div> 
            </div>
       

        {/* Expert Mode Button */}
                <Link style={navStyle} to="/fomos">
                <div class="button rounded expbutton-expon expbutton-expon-over" >
                    <p class="text-expon">{t("expertbutton_aus")}</p>
                </div>
                </Link>
                

        </section>

        <section id="entrance">
            {/* Buttons */}
            <div class="row rowbuttons">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <span class="hovertext" data-hover={t("button1hover_nowcast")}>
                    <div class="button rounded infobutton" >
                        <p class="text-fix">{t("button1_nowcast")}</p>
                        <p class="text-var">xxx</p>
                    </div>
                    </span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <span class="hovertext" data-hover={t("button2hover_nowcast")}>
                    <div class="button rounded infobutton"> 
                        <p class="text-fix">{t("button2_nowcast")}</p>
                        <p class="text-var">xxx</p>
                    </div> 
                    </span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 ">
                    <span class="hovertext" data-hover={t("button3hover_nowcast")}>
                    <div class="button rounded infobutton"> 
                        <p class="text-fix">{t("button3_nowcast")}</p>
                        <p class="text-var">xxx</p>
                    </div>
                    </span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 ">
                    <span class="hovertext" data-hover={t("button4hover_nowcast")}>
                    <div class="button rounded infobutton"> 
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
                {t("text1_nowcast")}</p>
                <p>
                {t("text2_nowcast")}</p>
                <p>
                {t("text3_nowcast")} {t("text4_nowcast")}
                </p>
                
            </div>
            </section>
            </section>

        {/* Chart overall */}
        {/* Methode  */}

        <section id="chart" >
        {/* Chart to be inserted*/}

        <div class="row row-chart">
        <div class="col-lg-6 col-md-6 col-sm-12 date" >
            
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 method">
                <span class="hovertext hovertext-method" data-hover="Informationstext für Methoden">
                <p>
                <button class="btn btn-light button-method-exp"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                    <i class="fa-solid fa-caret-down"></i> {t("show_method")}</button>
                </p>
                </span>
                <div>
                <div class="collapse collapse-horizontal collapse-method" id="collapseWidthExample">
                    <div class="card card-body input-table card-body-method" >
                    <table>
                        <tr><button type="button" class="btn btn-outline-dark">Datenstand x </button></tr>
                        <tr><button type="button" class="btn btn-outline-dark">Datenstand x</button></tr>
                        <tr><button type="button" class="btn btn-outline-dark">Epiforecasts-independent</button></tr>
                        <tr><button type="button" class="btn btn-outline-dark">ILM-prop</button></tr>
                        <tr><button type="button" class="btn btn-outline-dark">KIT-simple_nowcast</button></tr>
                        <tr><button type="button" class="btn btn-outline-dark">LMU_StaBLab-GAM_nowcast</button></tr>
                        <tr><button type="button" class="btn btn-outline-dark">NowcastHub-MeanEnsemble</button></tr>
                        <tr><button type="button" class="btn btn-outline-dark">NowcastHub-MedianEnsemble</button></tr>
                        <tr><button type="button" class="btn btn-outline-dark">RIVM-KEW</button></tr>
                        <tr><button type="button" class="btn btn-outline-dark">RKI-weekly-report</button></tr>
                        <tr><button type="button" class="btn btn-outline-dark">SU-hier_bayes</button></tr>
                        <tr><button type="button" class="btn btn-outline-dark">SZ-hosp_nowcast</button></tr>
                        </table>
                    </div>
                </div>
                </div> 
        </div>
        </div>
        </section>


        {/* Tabelle */}
        <section id="tabelle">
        
        <div class="table">
        <p>
            <a class="btn btn-light btn-table" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            <i class="fa-solid fa-caret-down"></i>  Tabelle anzeigen</a>
        </p>
        <div class="collapse collapse-table show" id="collapseExample">
            <div class="card card-body card-table">
            Table to be inserted.
            </div>
        </div>
        </div>
        </section>

        {/* Hinweis*/}
        
        <section id="hinweis">
            <div class="text-hinweis">
                <p>
                {t("hinweis")}
                </p>
                
            </div>
        </section>

        

        </div>
       


    );
        }

export default Fomosexp;