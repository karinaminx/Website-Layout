import React from "react";
import "../CSS/Fomos-main.css";
import { Route, Routes, Link } from "react-router-dom";
import { MethodenDivSimple } from "../input/MenuAuswahl/MethodenSimple.js";
import NavFomos from "./Nav-Fomos.js";
import FooterFomos from "./Footer-Fomos.js";
import { useData } from "../input/Graph/useDataMethode";
import { useDataDatenstand } from "../input/Graph/useDataDatenstand";
import { useTranslation } from "react-i18next";

const lngs = [
  { code: "de", native: "Deutsch" },
  { code: "en", native: "English" },
];


const today = new Date();
const yesterday = new Date(today.getTime());
yesterday.setDate(today.getDate() - 1);
const yesterdayAsString = yesterday.toISOString().substring(0, 10);

const theDayBeforeYesterday = new Date(today.getTime());
theDayBeforeYesterday.setDate(today.getDate() - 2);
const theDayBeforeYesterdayAsString = theDayBeforeYesterday
  .toISOString()
  .substring(0, 10);





function Fomosmain() {
  const navStyle = {
    textDecoration: "none",
  };

  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

const nocastArray = useData(
    "NowcastHub-MeanEnsemble",
    "00+",
    "DE",
    "FÜNFundNEUNZIG",
    "hunderttausend",
    theDayBeforeYesterdayAsString,
    yesterdayAsString
  );

  const unkorrHundArray = useDataDatenstand(
    "00+",
    "DE",
    "",
    "hunderttausend",
    theDayBeforeYesterdayAsString,
    yesterdayAsString
  );

  const unkorrAbsolArray = useDataDatenstand(
    "00+",
    "DE",
    "",
    "absoluteZahlen",
    theDayBeforeYesterdayAsString,
    yesterdayAsString
  );

  let nocastValueYesterday;
  let nocastValueTheDayBeforeYesterday;
  let unkorrHundValue;
  let unkorrAbsValue;

  if ((!nocastArray, !unkorrHundArray, !unkorrAbsolArray)) {
    nocastValueYesterday = "Loading";
    unkorrHundValue = "Loading";
    unkorrAbsValue = "Loading";
  } else {
    nocastValueYesterday = Math.round(nocastArray[1].value * 10) / 10;
    nocastValueTheDayBeforeYesterday =
      Math.round(nocastArray[0].value * 10) / 10;
    unkorrHundValue = Math.round(unkorrHundArray[1].valueSieben * 10) / 10;
    unkorrAbsValue = Math.round(unkorrAbsolArray[1].valueSieben * 10) / 10;
  }

  function trendArrow() {
    if (!nocastArray) {
      return "Loading";
    } else {
      if (nocastValueYesterday > nocastValueTheDayBeforeYesterday) {
        return <p> &#8593; </p>  // pfeil oben
      } else if (nocastValueYesterday < nocastValueTheDayBeforeYesterday){
        return  <p> &darr; </p> //pfeil unten
      }
      else if (nocastValueYesterday = nocastValueTheDayBeforeYesterday){
        return  <p> &rarr; </p>; //pfeil rechts
      }
    }
  }

  return (
    <div>
      <NavFomos />
      <div>
        <section id="title">
          {/* Überschrift */}
          <div class="title">
            <i class="fa-regular fa-dash lineheader"></i>
            <div class="titel-text-main">
              <h1>NOWCAST</h1>
              <h2> {t("heading_nowcast")}</h2>
            </div>
          </div>
        </section>

        <section id="expbutton">
          <div className="expbutton">
            {/* Expert Mode Button */}
            <Link style={navStyle} to="/fomosexpert">
              <div class="button expbutton-expoff">
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
                <div class="button infobutton">
                  <p class="text-fix">{t("button1_nowcast")}</p>
                  <p class="text-var">{nocastValueYesterday}</p>
                </div>
              </span>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <span class="hovertext" data-hover={t("button2hover_nowcast")}>
                <div class="button infobutton">
                  <p class="text-fix">{t("button2_nowcast")}</p>
                  <p class="text-var"> {trendArrow()}</p>
                </div>
              </span>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 ">
              <span class="hovertext" data-hover={t("button3hover_nowcast")}>
                <div class="button infobutton">
                  <p class="text-fix">{t("button3_nowcast")}</p>
                  <p class="text-var">{unkorrHundValue}</p>
                </div>
              </span>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 ">
              <span class="hovertext" data-hover={t("button4hover_nowcast")}>
                <div class="button infobutton">
                  <p class="text-fix">{t("button4_nowcast")}</p>
                  <p class="text-var">{unkorrAbsValue}</p>
                </div>
              </span>
            </div>
          </div>

          {/* Text */}
          <section id="text">
            <div class="text-intro">
              <p>{t("text1_nowcast")}</p>
              <p>{t("text2_nowcast")}</p>
              <p>{t("text3_nowcast")}</p>
            </div>
          </section>
        </section>

        {/* Chart overall */}
        {/* Methode  */}

        <section id="chart">
          {/* Chart to be inserted*/}

          <MethodenDivSimple />
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
