import React, { useState } from "react";
import { Graph } from "../Graph/GraphSimple";
import "./DesignMethoden.css";
import { Dropdown } from "./Dropdown";
import { useData } from "../Graph/useDataMethode";
import { Tabelle } from "../Graph/Tabelle";
import {
  optionsAge,
  options,
  methodenTabelle,
  initialValueAge,
  initialValueAnzeige,
  initialValue,
  initialValueTabelle,
  initialDate,
  initialdateGraphStart,
} from "./optionsCollection";
import { useDataAxes } from "../Graph/useDataAxes";
import { useDataDatenstand } from "../Graph/useDataDatenstand";
import datenstand_g from "../../images/datenstand_grau.png";
import datenstand_sw from "../../images/datenstand_sw.png";
import NowcastHub_line from "../../images/NowcastHub_line.png";
import { useTranslation } from "react-i18next";
import { init } from "i18next";

const lngs = [
  { code: "de", native: "Deutsch" },
  { code: "en", native: "English" },
];

export const MethodenDivSimple = () => {
  const [dateGraphStart, setGraphDateStart] = useState(initialdateGraphStart);

  // Tabelle mit Button eine und ausblende -----------------------------------

  const [dataTabelleMethode, setdataTabelleMethode] =
    useState(initialValueTabelle);

  //Const to show and hide the line for the method ----------------------------------------------------------
  const [isDatenstandSchwarz, setDatenstandSchwarz] = useState(true);
  const [isDatenstandGrau, setDatenstandGrau] = useState(true);
  const [isNowcast, setNowcast] = useState(true);

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
  function handleClickNowcast() {
    setNowcast(!isNowcast);
  }

  let j;
  function showgrey() {
    if (date == initialDate) {
      j = "hidden";
    } else if (date != initialDate) {
      j = "";
    }
    return j;
  }

  // const for the selection section on the left side of the window ----------------------------------------------------------

  const [menuAge, setmenuAge] = useState(initialValueAge);
  const [anzeige, setAnzeige] = useState(initialValueAnzeige);
  const [selectedScope, setScope] = useState(initialValue);
  const [date, setDate] = useState(initialDate); // vom Datenstand
  const [intervall, setIntervall] = useState("F??NFundNEUNZIG");

  //Importing the data for the graph

  const data = useDataAxes(
    "",
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
    dateGraphStart,
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
    date
  );

  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div>
      <div className=" buttonschart">
        <button
          className="btn-outline-dark buttonmovearea"
          onClick={() => setGraphDateStart(initialdateGraphStart)}
        >
          <p>default</p>
        </button>

        <span className="hovertext hoverd" data-hover={t("hover_date")}>
          <button className="btn btn-light rounded btn-date" onClick={() => {}}>
            <input
              type="date"
              name="select-date"
              defaultValue={initialdateGraphStart}
              onInput={(e) => setGraphDateStart(e.target.value)}
              max={date}
              min="2021-07-01"
            />
          </button>
        </span>
        {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
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
              <i className="fa-solid fa-caret-right"></i> {t("unshow_method")}
            </p>
          ) : (
            <p>
              <i className="fa-solid fa-caret-left"></i> {t("show_method")}
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
                  <label className="einf??hrung">
                    <b>{t("Datenstand")}</b>
                  </label>
                  <div id="inhalt">
                    <div>
                      <button
                        className="btn btn-light button-datenstand rounded"
                        onClick={() => {}}
                      >
                        <input
                          type="date"
                          name="select-date"
                          defaultValue={initialDate}
                          onChange={(e) => setDate(e.target.value)}
                          max={initialDate}
                          min="2021-07-01"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div id="filter" className="menuOptionen">
                <label className="einf??hrung">
                  <b>{t("Filter")}</b>
                </label>
                <div id="inhalt">
                  <div id="div1" className="visible">
                    <label className="BLlayout" for="scope-select">
                      {t("Bundesland")}
                    </label>
                    <button className="btn btn-light button-filter rounded">
                      <Dropdown
                        name="BundeslandSelect"
                        options={options}
                        id="scope-select"
                        selectedValue={selectedScope}
                        onSelectedValueChange={(selectedScope) => {
                          setmenuAge("00+");
                          setScope(selectedScope);
                          // if (selectedScope !== "DE") {
                          //   setILM(false);
                          // }
                        }}
                      />
                    </button>
                  </div>

                  <div className="hovertext " data-hover={t("hover_oder")}>
                    {" "}
                    <p class="oderText">
                      <sm>{t("oder")}</sm>{" "}
                    </p>
                  </div>

                  <div id="div2" className="hidden">
                    <label className="agelayout" for="scope-select">
                      {t("Alter")}
                    </label>
                    <button className="btn btn-light button-filter rounded ">
                      <Dropdown
                        options={optionsAge}
                        id="age-select"
                        selectedValue={menuAge}
                        onSelectedValueChange={(selectedValue) => {
                          setmenuAge(selectedValue);
                          setScope("DE");
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div id="anzeige" className="menuOptionen">
                <label className="einf??hrung">
                  <b>{t("Anzeige")}</b>
                </label>
                <div id="inhalt">
                  <button
                    className="btn btn-light button-anzeige rounded"
                    onClick={() => setAnzeige("hunderttausend")}
                  >
                    <label>{t("per100k")}</label>
                    <input
                      type="radio"
                      name="gr????e"
                      value="hunderttausend"
                      checked={anzeige === "hunderttausend"}
                    />
                  </button>
                  <button
                    className="btn btn-light button-anzeige rounded"
                    onClick={() => setAnzeige("absoluteZahlen")}
                  >
                    <label>{t("absoluteZ")}</label>
                    <input
                      type="radio"
                      name="gr????e"
                      value="absoluteZahlen"
                      checked={anzeige === "absoluteZahlen"}
                    />
                  </button>
                </div>
              </div>

              <div id="unsicherheitsintervall" className="menuOptionen">
                <label className="einf??hrung">
                  <b>{t("Unsicherheitsintervall")}</b>
                </label>
                <div id="inhalt">
                  <button
                    className="btn btn-light button-unsicherheitsintervall rounded"
                    onClick={() => setIntervall("F??NFundNEUNZIG")}
                  >
                    <label className="usi">95%</label>
                    <input
                      type="radio"
                      name="unsicherheitsintervall"
                      value="F??NFundNEUNZIG"
                      checked={intervall === "F??NFundNEUNZIG"}
                    />
                  </button>
                  <button
                    className="btn btn-light button-unsicherheitsintervall rounded"
                    onClick={() => setIntervall("F??NFZIG")}
                  >
                    <label className="usi">50%</label>
                    <input
                      type="radio"
                      name="unsicherheitsintervall"
                      value="F??NFZIG"
                      checked={intervall === "F??NFZIG"}
                    />
                  </button>

                  <button
                    className="btn btn-light button-unsicherheitsintervall rounded"
                    onClick={() => setIntervall("keines")}
                  >
                    <label className="usi">{t("keines")}</label>
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

        <script></script>

        <div className="col-9">
          {/* Graph ----------------------------------------------------------- */}
          <div className="GraphundMethoden">
            <Graph
              className="graph"
              isVisible={isVisible}
              isDatenstandSchwarz={isDatenstandSchwarz}
              isDatenstandGrau={isDatenstandGrau}
              isNowcast={isNowcast}
              data={data}
              Nowcastdata={Nowcastdata}
              datenstand_schwarz={datenstand_schwarz}
              datenstand_grau={datenstand_grau}
              dateGraphStart={dateGraphStart}
            />

            {/* Methoden ----------------------------------------------------------- */}

            {isVisible && (
              <table className="methdentabelle">
                <div className="auswahl">
                  {/*1.0*/}

                  <tr className="trmethod">
                    <div
                      className={`container ${
                        isDatenstandSchwarz ? "moved" : ""
                      }`}
                      onClick={handleClickDatenstandSchwarz}
                    >
                      <td className="linelayout ">
                        <img
                          className="bildfix"
                          src={datenstand_sw}
                          style={{ width: "30px" }}
                        />
                      </td>

                      <td className="methodnamerow">
                        <p
                          className={`datenstand methodtext ${
                            isDatenstandSchwarz ? "bold " : ""
                          }`}
                          onClick={handleClickDatenstandSchwarz}
                        >
                          {t("Datenstand_s")}
                        </p>
                      </td>
                      <td>
                        <div
                          className="hovertext questionmark hoverq"
                          data-hover={t(
                            "hover1_1_methoden"
                          )} /*{{t("hover1")}}*/
                        >
                          <div className="">
                            <p> ???</p>
                          </div>
                        </div>
                      </td>
                    </div>
                  </tr>

                  {/*2*/}

                  <tr className="trmethod" hidden={showgrey()}>
                    <div
                      className={`container ${isDatenstandGrau ? "moved" : ""}`}
                      onClick={handleClickDatenstandGrau}
                    >
                      <td className="linelayout">
                        <img src={datenstand_g} style={{ width: "30px" }} />
                      </td>

                      <td className="methodnamerow">
                        <p
                          className={`datenstand methodtext ${
                            isDatenstandGrau ? "bold " : ""
                          }`}
                          onClick={handleClickDatenstandGrau}
                        >
                          {t("Datenstand_g")}
                        </p>
                      </td>
                      <td>
                        <div
                          className="hovertext questionmark hoverq"
                          data-hover={t("hover1_2_methoden")}
                        >
                          <div className="">
                            <p> ???</p>
                          </div>
                        </div>
                      </td>
                    </div>
                  </tr>

                  {/*3*/}
                  <tr className="trmethod">
                    <div
                      className={`container ${isNowcast ? "moved" : ""}`}
                      onClick={handleClickNowcast}
                    >
                      <td className="linelayout">
                        <img
                          className="bildfix"
                          src={NowcastHub_line}
                          style={{ width: "30px" }}
                        />
                      </td>
                      <td className="methodnamerow">
                        <p
                          className={`Nowcast methodtext ${
                            isNowcast ? "bold " : ""
                          }`}
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
                            <p> ???</p>
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
    </div>
  );
};
