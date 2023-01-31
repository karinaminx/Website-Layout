import React, { useState, useEffect } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { Graph } from "../Graph/Graph";
import "./DesignMethoden.css";
import { Dropdown } from "./Dropdown";
import { color, timeFormat } from "d3";
import { useData } from "../Graph/useData";
import { QuestionMark } from "./QuestionMark";
import { Tabelle } from "../Graph/Tabelle";
import {
  optionsAge,
  options,
  methodenTabelle,
  initialValueAge,
  initialValueAnzeige,
  initialValue,
  initialValueIntervall,
  initialValueTabelle,
  dateFormatter,
  initialDate,
  initialdateGraphStart
} from "./optionsCollection";
import { useDataAxes } from "../Graph/useDataAxes";
import { useDataDatenstand } from "../Graph/useDataBjörn";

import datenstand_g from "../../images/datenstand_grau.png";
import datenstand_sw from "../../images/datenstand_sw.png";
import Epiforecast_line from "../../images/Epiforecast_line.png";
import ILM_line from "../../images/ILM_line.png";
import KIT_line from "../../images/KIT_line.png";
import LMU_line from "../../images/LMU_line.png";
import NowcastHub_line from "../../images/NowcastHub_line.png";
import RIVM_line from "../../images/RIVM_line.png";
import RKI_line from "../../images/RKI_line.png";
import SU_line from "../../images/SU_line.png";
import SZ_line from "../../images/SZ_line.png";

import { useTranslation } from 'react-i18next';
import { init } from "i18next";

const lngs = [
    { code: "de", native: "Deutsch" },
    { code: "en", native: "English" },
  ];


export const MethodenDiv = () => {
  // Tabelle mit Button eine und ausblende -----------------------------------

  const [dataTabelleMethode, setdataTabelleMethode] =
    useState(initialValueTabelle);

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  //Filter: If one is selected, the other one´s opacity is set down
  const div1 = document.getElementById("div1");
  const div2 = document.getElementById("div2");

  function handleDiv1Selection() {
    div1.classList.remove("visible");
    div1.classList.add("hidden");
    div2.classList.remove("hidden");
    div2.classList.add("visible");
  }

  function handleDiv2Selection() {
    div2.classList.remove("visible");
    div2.classList.add("hidden");
    div1.classList.remove("hidden");
    div1.classList.add("visible");
  }

  //Const to show and hide the line for the method ----------------------------------------------------------
  const [isDatenstandSchwarz, setDatenstandSchwarz] = useState(true);
  const [isDatenstandGrau, setDatenstandGrau] = useState(true);
  const [isEpiforecast, setEpiforecast] = useState(false);
  const [isILM, setILM] = useState(false);
  const [isKIT, setKIT] = useState(true);
  const [isLMU, setLMU] = useState(false);
  const [isNowcast, setNowcast] = useState(false);
  const [isRIVM, setRIVM] = useState(false);
  const [isRKI, setRKI] = useState(false);
  const [isSU, setSU] = useState(false);
  const [isSZ, setSZ] = useState(false);

  //Hide and Show the selection section for methods ----------------------------------------------------------
  const [label, setLabel] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(!isVisible);
    setLabel(isVisible ? "" : "");
  }

  //Function to show and hide the line for the method ----------------------------------------------------------
  function handleClickDatenstandSchwarz() {
    setDatenstandSchwarz(!isDatenstandSchwarz);
  }
  function handleClickDatenstandGrau() {
    setDatenstandGrau(!isDatenstandGrau);
  }
  function handleClickEpi() {
    setEpiforecast(!isEpiforecast);
  }
  function handleClickILM() {
    if (selectedScope != "DE") {
      setILM(false);
    } else {
      setILM(!isILM);
    }
  }

  function handleClickKIT() {
    setKIT(!isKIT);
  }
  function handleClickLMU() {
    setLMU(!isLMU);
  }
  function handleClickNowcast() {
    setNowcast(!isNowcast);
  }
  function handleClickRIVM() {
    setRIVM(!isRIVM);
  }
  function handleClickRKI() {
    setRKI(!isRKI);
  }
  function handleClickSU() {
    setSU(!isSU);
  }
  function handleClickSZ() {
    setSZ(!isSZ);
  }

  // const for the selection section on the left side of the window ----------------------------------------------------------

  const [menuAge, setmenuAge] = useState(initialValueAge);
  const [anzeige, setAnzeige] = useState(initialValueAnzeige);
  const [selectedScope, setScope] = useState(initialValue);

  const [dateGraphStart, setGraphDateStart] = useState(initialdateGraphStart)


  // const [dateGraphEnde, setGraphDateEnde] = 

  const [date, setDate] = useState(initialDate);

  const [intervall, setIntervall] = useState("FÜNFundNEUNZIG");

  //Importing the data for the graph

  const data = useDataAxes(
    "KIT-simple_nowcast",
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    date
  );

  const EPIdata = useData(
    "Epiforecasts-independent",
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    date
  );

  const ILMdata = useData("ILM-prop", menuAge, "DE", intervall, anzeige, date);

  const KITdata = useData(
    "KIT-simple_nowcast",
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    date
  );

  const LMUdata = useData(
    "LMU_StaBLab-GAM_nowcast",
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    date
  );
  const Nowcastdata = useData(
    "NowcastHub-MeanEnsemble",
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    date
  );
  const RIVMdata = useData(
    "RIVM-KEW",
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    date
  );
  const RKIdata = useData(
    "RKI-weekly_report",
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    date
  );
  const SUdata = useData(
    "SU-hier_bayes",
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    date
  );
  const SZdata = useData(
    "SZ-hosp_nowcast",
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    date
  );


  const datenstand_schwarz = useDataDatenstand(
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    dateGraphStart,
    initialDate
  );
  const datenstand_grau = useDataDatenstand(
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    dateGraphStart,
    date,
  );

  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
      i18n.changeLanguage(code);
    };

  

  return (
    <div>
      <div className="btn-method">
        <button
          className=" btn btn-light button-method-exp"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
          onClick={handleClick}
        >
          {isVisible ? (
            <p>
              <i className="fa-solid fa-caret-right"></i> Methoden ausblenden
            </p>
          ) : (
            <p>
              <i className="fa-solid fa-caret-left"></i> Methoden einblenden
            </p>
          )}
        </button>

        <label className="methodenEinblenden" onClick={handleClick}>
          {label}
        </label>
      </div>

    


      <div className="row rowchart">
        <div className="col-2">
          <div id="menuBand" classNAme="menuBand rounded">
            {/* Methoden Button ----------------------------------------------------------- */}
            <section>
              <div className="Methoden">
                <div id="datenstand" className="menuOptionen">
                  <label className="einführung">
                    <b>Datenstand</b>
                  </label>
                  <div id="inhalt">
                    <div>
                      <button className="btn btn-light button-datenstand rounded ">
                        <input
                          type="date"
                          name="select-date"
                          defaultValue = {initialDate}
                          onChange={(e) => setDate(e.target.value)}
                          max={initialDate}
                          min="2021-07-01"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              

              {/* Man kann ein anderes Datum nicht auswählen. Jedoch werden sie trz. angezeigt. @Lena, kannst du dir das mal anschauen? */}

              <div id="filter" className="menuOptionen">
                <label className="einführung">
                  <b>Filter</b>
                </label>
                <div id="inhalt">
                  <div id="div1" className="visible">
                    <label for="scope-select">Bundesland:</label>
                    <button className="btn btn-light button-filter rounded">
                      <Dropdown
                        name="BundeslandSelect"
                        options={options}
                        id="scope-select"
                        selectedValue={selectedScope}
                        onSelectedValueChange={(selectedScope) => {
                          setmenuAge("00+");
                          setScope(selectedScope);
                          handleDiv1Selection();
                          if (selectedScope !== "DE") {
                            setILM(false);
                          }
                        }}
                      />
                    </button>
                  </div>

                  <div
                    className="hovertext "
                    data-hover={t("hover_oder")} 
                        > <p class="oderText"><sm>{t("oder")}</sm>  </p>
                  </div>
                  

                  <div id="div2" className="hidden">
                    <label className="agelayout" for="scope-select">
                      Alter:
                    </label>
                    <button className="btn btn-light button-filter rounded ">
                      <Dropdown
                        options={optionsAge}
                        id="age-select"
                        selectedValue={menuAge}
                        onSelectedValueChange={(selectedValue) => {
                          setmenuAge(selectedValue);
                          setScope("DE");
                          handleDiv2Selection();
                        }}
                      />
                    </button>
                  </div>
                </div>
                </div>

              <div id="anzeige" className="menuOptionen">
                <label className="einführung">
                  <b>Anzeige</b>
                </label>
                <div id="inhalt">
                  <button
                        className="btn btn-light button-anzeige rounded"
                        onClick={() => setAnzeige("hunderttausend")}
                        
                      >
                        <label>Pro 100.000</label>
                        <input
                          type="radio"
                          name="größe"
                          value="hunderttausend"
                          checked={anzeige === "hunderttausend"}
                          
                        />
                      </button>
                      <button
                          className="btn btn-light button-anzeige rounded"
                          onClick={() => setAnzeige("absoluteZahlen")}
                        >
                          <label>absolute Zahlen</label>
                          <input
                            type="radio"
                            name="größe"
                            value="absoluteZahlen"
                            checked={anzeige === "absoluteZahlen"}
                          />
                        </button>
                </div>
              </div>

              <div id="unsicherheitsintervall" className="menuOptionen">
                <label className="einführung">
                  <b>Unsicherheitsintervall</b>
                </label>
                <div id="inhalt">
                <button
                      className="btn btn-light button-unsicherheitsintervall rounded"
                      onClick={() => setIntervall("FÜNFundNEUNZIG")}
                    >
                      <label className="usi">95%</label>
                      <input
                        type="radio"
                        name="unsicherheitsintervall"
                        value="FÜNFundNEUNZIG"
                        checked={intervall === "FÜNFundNEUNZIG"}
                      />
                    </button>
                    <button
                        className="btn btn-light button-unsicherheitsintervall rounded"
                        onClick={() => setIntervall("FÜNFZIG")}
                      >
                        <label className="usi">50%</label>
                        <input
                          type="radio"
                          name="unsicherheitsintervall"
                          value="FÜNFZIG"
                          checked={intervall === "FÜNFZIG"}
                        />
                      </button>


                      <button
                          className="btn btn-light button-unsicherheitsintervall rounded"
                          onClick={() => setIntervall("keines")}
                        >
                          <label className="usi">keines</label>
                          <input
                            type="radio"
                            name="unsicherheitsintervall"
                            value="keines"
                            checked={intervall === "keines"}
                          />
                        </button>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="col-9" >
          {/* Graph ----------------------------------------------------------- */}
          <div className= "GraphundMethoden">
            <Graph
              className="graph"
              isVisible={isVisible}
              isDatenstandSchwarz={isDatenstandSchwarz}
              isDatenstandGrau={isDatenstandGrau}
              isEpiforecast={isEpiforecast}
              isILM={isILM}
              isKIT={isKIT}
              isLMU={isLMU}
              isNowcast={isNowcast}
              isRIVM={isRIVM}
              isRKI={isRKI}
              isSU={isSU}
              isSZ={isSZ}
              data={data}
              EPIdata={EPIdata}
              ILMdata={ILMdata}
              KITdata={KITdata}
              LMUdata={LMUdata}
              Nowcastdata={Nowcastdata}
              RIVMdata={RIVMdata}
              RKIdata={RKIdata}
              SUdata={SUdata}
              SZdata={SZdata}
              menuAge={menuAge}
              selectedScope={selectedScope}
              datenstand_schwarz={datenstand_schwarz}
              datenstand_grau={datenstand_grau}
            />

            {/* Methoden ----------------------------------------------------------- */}

            {isVisible && (
              <table className="methdentabelle">
                <div className="auswahl">
                  {/*1.0*/}

                  <tr className= "trmethod">
                    <div
                      className={`container ${
                        isDatenstandSchwarz ? "moved" : ""
                      }`}
                      onClick={handleClickDatenstandSchwarz}
                    >
                     <td className="linelayout">
                        <img src={datenstand_sw} style={{ width: "38px" }} />
                      </td>

                      <td className="methodnamerow">
                        <p
                          className={`datenstand ${
                            isDatenstandSchwarz ? "bold" : ""
                          }`}
                          onClick={handleClickDatenstandSchwarz}
                        >
                          Datenstand Schwarz
                        </p>
                      </td>
                      <td>
                        <div
                          className="hovertext questionmark hoverq"
                          data-hover={t("hover1_methoden")} /*{{t("hover1")}}*/
                        >
                          <div className="">
                            <p> ⓘ</p>
                          </div>
                        </div>
                      </td>
                    </div>
                  </tr>

                  {/*1.1*/}

                  <tr className= "trmethod">
                    <div
                      className={`container ${isDatenstandGrau ? "moved" : ""}`}
                      onClick={handleClickDatenstandGrau}
                    >
                      <td className="linelayout">
                        <img src={datenstand_g} style={{ width: "38px" }} />
                      </td>

                      <td className="methodnamerow">
                        <p
                          className={`datenstand ${
                            isDatenstandGrau ? "bold" : ""
                          }`}
                          onClick={handleClickDatenstandGrau}
                        >
                          Datenstand Grau
                        </p>
                      </td>
                      <td>
                        <div
                          className="hovertext questionmark hoverq"
                          data-hover={t("hover1_methoden")} 
                        >
                          <div className="">
                            <p> ⓘ</p>
                          </div>
                        </div>
                      </td>
                    </div>
                  </tr>

                  {/*2*/}
                  <tr className= "trmethod">
                    <div
                      className={`container ${isEpiforecast ? "moved" : ""}`}
                      onClick={handleClickEpi}
                    >
                      <td className="linelayout">
                        <img src={Epiforecast_line} style={{ width: "35px" }} />
                      </td>

                      <td className="methodnamerow">
                        <p
                          className={`Epiforecast ${
                            isEpiforecast ? "bold" : ""
                          }`}
                          onClick={handleClickEpi}
                        >
                          independent Epiforecast
                        </p>
                      </td>
                      <td>
                        <div
                          className="hovertext questionmark hoverq"
                          data-hover={t("hover2_methoden")} 
                        >
                          <div className="">
                            <p> ⓘ</p>
                          </div>
                        </div>
                      </td>
                    </div>
                  </tr>

                  

                  {/*3*/}
                  <tr className= "trmethod">
                    <div
                      className={`container ${isKIT ? "moved" : ""}`}
                      onClick={handleClickKIT}
                    >
                      <td className="linelayout">
                        <img src={KIT_line} style={{ width: "35px" }} />
                      </td>

                      <td className="methodnamerow">
                        <p
                          className={`KIT ${isKIT ? "bold" : ""}`}
                          onClick={handleClickKIT}
                        >
                          KIT Simple Nowcast
                        </p>
                      </td>
                      <td>
                        <div
                          className="hovertext questionmark hoverq"
                          data-hover={t("hover4_methoden")} 
                        >
                          <div className="">
                            <p> ⓘ</p>
                          </div>
                        </div>
                      </td>
                    </div>
                  </tr>

                  {/*4*/}
                  <tr className= "trmethod">
                    <div
                      className={`container ${isLMU ? "moved" : ""}`}
                      onClick={handleClickLMU}
                    >
                      <td className="linelayout">
                        <img src={LMU_line} style={{ width: "35px" }} />
                      </td>
                      <td className="methodnamerow">
                        <p
                          className={`LMU ${isLMU ? "bold" : ""}`}
                          onClick={handleClickLMU}
                        >
                          LMU StaBlab-GAM Nowcast
                        </p>
                      </td>
                      <td>
                        <div
                          className="hovertext questionmark hoverq"
                          data-hover={t("hover5_methoden")} 
                        >
                          <div className="">
                            <p> ⓘ</p>
                          </div>
                        </div>
                      </td>
                    </div>
                  </tr>

                  {/*5*/}
                  <tr className= "trmethod">
                    <div
                      className={`container ${isNowcast ? "moved" : ""}`}
                      onClick={handleClickNowcast}
                    >
                      <td className="linelayout">
                        <img src={NowcastHub_line} style={{ width: "35px" }} />
                      </td>
                      <td className="methodnamerow">
                        <p
                          className={`Nowcast ${isNowcast ? "bold" : ""}`}
                          onClick={handleClickNowcast}
                        >
                          NowcastHub MeanEnsemble
                        </p>
                      </td>
                      <td>
                        <div
                          className="hovertext questionmark hoverq"
                          data-hover={t("hover6_methoden")} 
                        >
                          <div className="">
                            <p> ⓘ</p>
                          </div>
                        </div>
                      </td>
                    </div>
                  </tr>
                  {/*6*/}
                  <tr className= "trmethod">
                    <div
                      className={`container ${isRIVM ? "moved" : ""}`}
                      onClick={handleClickRIVM}
                    >
                      <td className="linelayout">
                        <img src={RIVM_line} style={{ width: "35px" }} />
                      </td>
                      <td className="methodnamerow">
                        <p
                          className={`RIVM ${isRIVM ? "bold" : ""}`}
                          onClick={handleClickRIVM}
                        >
                          RIVM Weekly Report
                        </p>
                      </td>
                      <td>
                        <div
                          className="hovertext questionmark hoverq"
                          data-hover={t("hover7_methoden")} 
                        >
                          <div className="">
                            <p> ⓘ</p>
                          </div>
                        </div>
                      </td>
                    </div>
                  </tr>
                  

                  {/*7*/}
                  <tr className= "trmethod">
                    <div
                      className={`container ${isSU ? "moved" : ""}`}
                      onClick={handleClickSU}
                    >
                      <td className="linelayout">
                        <img src={SU_line} style={{ width: "35px" }} />
                      </td>
                      <td className="methodnamerow">
                        <p
                          className={`SU ${isSU ? "bold" : ""}`}
                          onClick={handleClickSU}
                        >
                          SU hier bayes
                        </p>
                      </td>
                      <td>
                        <div
                          className="hovertext questionmark hoverq "
                          data-hover={t("hover9_methoden")} 
                        >
                          <div className="">
                            <p> ⓘ</p>
                          </div>
                        </div>
                      </td>
                    </div>
                  </tr>
                  {/*8*/}
                  <tr className= "trmethod">
                    <div
                      className={`container ${isSZ ? "moved" : ""}`}
                      onClick={handleClickSZ}
                    >
                      <td className="linelayout">
                        <img src={SZ_line} style={{ width: "35px" }} />
                      </td>

                      <td className="methodnamerow">
                        <p
                          className={`SZ ${isSZ ? "bold" : ""}`}
                          onClick={handleClickSZ}
                        >
                          SZ Nowcast
                        </p>
                      </td>
                      <td>
                        <div
                          className="hovertext questionmark hoverq"
                          data-hover={t("hover10_methoden")} 
                        >
                          <div className="">
                            <p> ⓘ</p>
                          </div>
                        </div>
                      </td>
                    </div>
                  </tr>

                  {/*9*/}
                  <tr className= "trmethod">
                    <div
                      className={`container ${isILM ? "moved" : ""}`}
                      onClick={handleClickILM}
                    >
                      <td className="linelayout">
                        <img src={ILM_line} style={{ width: "35px" }} />
                      </td>

                      <td className="methodnamerow">
                        <p
                          className={`ILM ${isILM ? "bold" : ""}`}
                          onClick={handleClickILM}
                        > 
                          ILM prop
                        </p>
                      </td>
                      <td>
                        <div
                          className="hovertext questionmark hoverq"
                          data-hover={t("hover3_methoden")} 
                        >
                          <div className="">
                            <p> ⓘ</p>
                          </div>
                        </div>
                      </td>
                    </div>
                  </tr>

                    {/*10*/}
                    <tr className= "trmethod">
                    <div
                      className={`container ${isRKI ? "moved" : ""}`}
                      onClick={handleClickRKI}
                    >
                      <td className="linelayout">
                        <img src={RKI_line} style={{ width: "35px" }} />
                      </td>
                      <td className="methodnamerow">
                        <p
                          className={`RKI ${isRKI ? "bold" : ""}`}
                          onClick={handleClickRKI}
                        >
                          RKI Weekly Report
                        </p>
                      </td>
                      <td>
                        <div
                          className="hovertext questionmark hoverq"
                          data-hover={t("hover8_methoden")} 
                        >
                          <div className="">
                            <p> ⓘ</p>
                          </div>
                        </div>
                      </td>
                    </div>
                  </tr>


                </div>
              </table>
            )}
          </div>
        </div>
      </div>

      
        <div className="table">
          <button
            className="btn btn-light button-table rounded"
            onClick={toggleCollapse}
          >
            {" "}
            <i className="fa-solid fa-caret-down"></i> Tabelle anzeigen
          </button>
          {/* {isCollapsed && ( */}
          <div
            className={`collapse ${!isCollapsed ? "show" : ""}`}
            id="collapseExample"
          >
            <div className="card card-body card-table">
              <Dropdown
                options={methodenTabelle}
                id="methodenSelectTabelle"
                dataTabelle={dataTabelleMethode}
                onSelectedValueChange={setdataTabelleMethode}
              />
              <Tabelle
                menuAge={menuAge}
                selectedScope={selectedScope}
                intervall={intervall}
                anzeige={anzeige}
                date={date}
                dataTabelleMethode={dataTabelleMethode}
              />
            </div>
          </div>
          {/* )} */}
        </div>
                          
    </div>
  );
};
