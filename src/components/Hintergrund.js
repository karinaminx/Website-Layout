import React from "react";
import '../CSS/Hintergrund.css';
import {Route, Routes, Link} from 'react-router-dom';
import LMU_Logo from '../images/LMU_Logoo.jpeg';
import london_logo from '../images/london-School-Hygiene-Tropical-2912018.png';
import SZ_Logo from '../images/SZ_Logo.png';
import Stockholm_Logo from '../images/Uni_stockholm.png';
import RIVM_Logo from '../images/RIVM_Logo.png';
import TU_Logo from '../images/TU-Ilmenau-Logo.png';
import { useTranslation } from 'react-i18next';

const lngs = [
    { code: "de", native: "Deutsch" },
    { code: "en", native: "English" },
  ];

function Hintergrund() {
  
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
            <div class="titel-text">
            <h1>{t("hintergrund_headline")}</h1>
            </div>
        </div>
    </section>

        {/* Info Texte */}
    <section id="hintergrund">
        <div class="textbereich">

            <div class="Abschnitt1">
                <h3 class="texttitle">{t("hintergrund_hinweis")}</h3>
                {t("hintergrund_hinweistext")}
                </div>
            <br />
            <div class="Beteiligte-Gruppen">
            <h3 class="texttitle"> {t("hintergrund_gruppen")}</h3>
                <br />
                <br />
            <ul> 
                <li class="Gruppen"> <img class="logo"  src={TU_Logo} alt="TU Ilmenau Logo" ></img> <a href="https://www.tu-ilmenau.de/stochastik/"> {t("hintergrund_TU")}</a></li>
                <li class="Gruppen"> <img class="logo"  src={LMU_Logo} alt="LMU_Logo"></img> <a href="https://corona.stat.uni-muenchen.de/"> {t("hintergrund_LMU")} </a> </li>
                <li class="Gruppen"> <img class="logo"  src={RIVM_Logo} alt="RIVM_Logo"></img> <a href="https://www.rivm.nl/en">{t("hintergrund_RIVM")} </a></li>
                <li class="Gruppen"> <img class="logo"  src={Stockholm_Logo} alt="Uni_stockholm"></img> <a href="https://www.su.se/english/profiles/fegu7762-1.554768"> {t("hintergrund_Stockholm")} </a></li>
                <li class="Gruppen"> <img class="logo"  src={SZ_Logo} alt="SZ_Logo"></img> <a href="https://www.sueddeutsche.de/thema/Coronavirus"> {t("hintergrund_Süddeutsche")} </a></li>
                <li class="Gruppen"> <img class="logo"  src={london_logo} alt="london-School-Hygiene-Tropical"></img> <a href="https://epiforecasts.io/"> {t("hintergrund_London")} </a></li>
            </ul>
                <br />
                {t("hintergrund_RKI1")} <a href="https://github.com/robert-koch-institut/COVID-19-Hospitalisierungen_in_Deutschland"> {t("hintergrund_RKI2")}</a> {t("hintergrund_RKI3")}
            </div>
            <br />
            <br />

            <div class="GitHub">
                <h3 class="texttitle"> {t("hintergrund_github")} </h3>
                {t("hintergrund_githubtext")} Alle Nowcasts sind unter offenen Lizenzen in einem <a href="https://github.com/KITmetricslab/hospitalization-nowcast-hub"> öffentlichen GitHub Repository </a> verfügbar. Sie können für eine Vielzahl von Zwecken weiterverwendet werden, sofern die Quelle angegeben wird (siehe die entsprechenden Lizenzfiles für Details). Wenn Sie Nowcasts aus dieser Plattform für öffentliche Darstellungen weiterverwenden freuen wir uns über eine kurze Nachricht an das Organisationsteam oder die Autoren des jeweiligen Nowcasts. Derzeit werden Nowcasts aus unserer Plattform z.B. von <a href="https://www.zeit.de/wissen/aktuelle-corona-zahlen-karte-deutschland-landkreise"> Zeit Online</a>, der < a href ="https://www.nzz.ch/visuals/corona-deutschland-alle-zahlen-und-regeln-ld.1656184"> Neuen Zürcher Zeitung </a>, <a href="https://www.ndr.de/nachrichten/info/Corona-Wie-hoch-ist-die-Hospitalisierungsrate-wirklich-,hospitalisierung106.html"> Norddeutschen Rundfunk </a> sowie dem <a href="https://www.swr.de/swraktuell/coronavirus-karte-100.html"> Südwestrundfunk</a> verwendet.
            </div>

            <br />
            <br />

            <div>
                <h3 class="texttitle">{t("hintergrund_evaluation")}</h3>
                {t("hintergrund_evaluationtext")}
            </div>

            <br />
            <br />

            <div>
                <h3 class="texttitle"> {t("hintergrund_hospitalisierungsrate")}</h3>
                {t("hintergrund_hospitalisierungsratetext")} 
            </div>

            <br />
            <br />

            <div>
                <h3 class="texttitle"> {t("hintergrund_verwandte")}Verwandte Projekte und Analysen </h3>
                <ul>
                    <li> {t("hintergrund_verwandtetext1")} </li>
                    <li> {t("hintergrund_verwandtetext2")}</li>
                    <li> {t("hintergrund_verwandtetext3")}</li>
                    <li> {t("hintergrund_verwandtetext4")}</li>
            </ul>
            </div>


            <br />

        </div>
    </section>


    <section id="erklärungmethoden">
    
    <section id="title">
        {/* Überschrift */}
        <div class="title">
          <i class="fa-regular fa-dash line"></i>
            <div class="titel-text">
            <h1>{t("methoden_headline")}</h1>
            </div>
        </div>
    </section>

    <div class="Methodenintro">
    {t("methoden_text")}
    </div>
    <br />
    <br />

{/* button 1  */}
<div class="AuswahlMethoden">
<p>
    <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">{t("method1")}</a>
 </p>

  <div class="row row-background">
    <div class="col">
      <div class="collapse" id="Collapse1">
        <div class="card card-body Klapptext">
        {t("method1_text")}
        </div>
      </div>
    </div>
    </div>

   {/* zweiter button */}
    <p>
        <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">{t("method2")}</a>
    </p>

      <div class="row row-background">
        <div class="col">
          <div class="collapse" id="Collapse2">
            <div class="card card-body Klapptext">
            {t("method2_text")}
            </div>
          </div>
        </div>
        </div>
        {/* 3 button */}
        <p>
            <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse3" role="button" aria-expanded="false" aria-controls="multiCollapseExample3">{t("method3")}</a>
         </p>

          <div class="row row-background">
            <div class="col">
              <div class="collapse" id="Collapse3">
                <div class="card card-body Klapptext">
                  <blockquote>
                  {t("method3_text")}
                  </blockquote>
                </div>
              </div>
            </div>
            </div>
        {/* 4 button */}
            <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse4" role="button" aria-expanded="false" aria-controls="multiCollapseExample4">{t("method4")}</a>
             </p>

              <div class="row row-background">
                <div class="col">
                  <div class="collapse" id="Collapse4">
                    <div class="card card-body Klapptext">
                      <blockquote>
                      {t("method4_text")}
                      </blockquote>
                    </div>
                  </div>
                </div>
                </div>
         {/* 5 button */}
                <p>
                    <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse5" role="button" aria-expanded="false" aria-controls="multiCollapseExample5">{t("method5")}</a>
                 </p>

                  <div class="row row-background">
                    <div class="col">
                      <div class="collapse" id="Collapse5">
                        <div class="card card-body Klapptext">
                        <blockquote>
                        {t("method5_text")}
                        </blockquote>
                    </div>
                      </div>
                    </div>
                    </div>
        {/*  6 button */}
            <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse6" role="button" aria-expanded="false" aria-controls="multiCollapseExample6">{t("method6")}</a>
         </p>

              <div class="row row-background">
                <div class="col">
                  <div class="collapse" id="Collapse6">
                    <div class="card card-body Klapptext">
                    {t("method6_text")}
                    </div>
                  </div>
                </div>
                </div>

        {/* 7 button  */}
        <p>
            <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse7" role="button" aria-expanded="false" aria-controls="multiCollapseExample7">{t("method7")}</a>
        </p>

        <div class="row row-background">
            <div class="col">
            <div class="collapse" id="Collapse7">
                <div class="card card-body Klapptext">
                  <blockquote>
                  {t("method7_text")}
                  </blockquote>
                </div>
            </div>
            </div>
            </div>

        {/* <!-- 8 button--> */}
            <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse8" role="button" aria-expanded="false" aria-controls="multiCollapseExample8">
                {t("method8")}
                </a>
            </p>

            <div class="row row-background">
                <div class="col">
                <div class="collapse" id="Collapse8">
                    <div class="card card-body Klapptext">
                      <blockquote>
                      {t("method8_text")}
                      </blockquote>
                    </div>
                </div>
                </div>
                </div>


        {/* <!-- 9 button--> */}
                <p>
                    <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse9" role="button" aria-expanded="false" aria-controls="multiCollapseExample9">{t("method9")}</a>
                </p>

        <div class="row row-background">
            <div class="col">
            <div class="collapse" id="Collapse9">
                <div class="card card-body Klapptext">
                {t("method9_text")}
                </div>
            </div>
            </div>
        </div>

            {/*10 button */}
            <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse10" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">{t("method10")}</a>
            </p>

            <div class="row row-background">
                <div class="col">
                <div class="collapse" id="Collapse10">
                    <div class="card card-body Klapptext">
                    {t("method10_text")}
                    </div>
                </div>
                </div>
            </div>

</div>

<br />
<br />
<br />
<br />


    </section>


    </div>
    );
}

export default Hintergrund;