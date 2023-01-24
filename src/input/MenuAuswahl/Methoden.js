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
} from "./optionsCollection";
import { useDataAxes } from "../Graph/useDataAxes";
import { useDataDatenstand } from "../Graph/useDataBjörn";

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
  const [isDatenstand, setDatenstand] = useState(false);
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
  function handleClickDatenstand() {
    setDatenstand(!isDatenstand);
  }
  function handleClickEpi() {
    setEpiforecast(!isEpiforecast);
  }
  function handleClickILM() {
    if (selectedScope === "DE") {
      setILM(!isILM);
    }else{setILM(isILM)}
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
    "KIT-simple_nowcast",
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    date
  );

  // let datesAfterEnde = useDataDatenstand(datenstand_schwarz);

  console.log(SUdata);

  return (
    <div>

    <div className="btn-method">
          <button className=" btn btn-light button-method-exp" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" onClick={handleClick}>
            {isVisible ? (
              <p><i className="fa-solid fa-caret-right"></i>    Methoden ausblenden</p>
            ) : (
              <p><i className="fa-solid fa-caret-left"></i>     Methoden einblenden</p>
            )}
          </button>
          
          
          <label className="methodenEinblenden" onClick={handleClick}>
            {label}
          </label>
          </div>

    <div className="row rowchart">
      <div className="col-3">
      <div id="menuBand" classNAme="menuBand rounded">
        {/* Methoden Button ----------------------------------------------------------- */}
        <section>
        

        <div className="Methoden">       

      <div id="datenstand" className="menuOptionen">
          <label className="einführung"><b>Datenstand</b></label>
          <div id="inhalt">
            
              <div>
              <button className="btn btn-light button-datenstand rounded ">
                <input
                  type="date"
                  name="select-date"
                  onChange={(e) => setDate(e.target.value)}
                  max={initialDate}
                  min="2021-07-01"
                />
                </button>
              </div>
          </div>
  </div>
  </div>
  
 {/* 
<div id="datenstand" className="menuOptionen">
        <label className="einführung"><b>Datenstand</b></label>
         <div id="inhalt">
          <button className="btn btn-light button-anzeige rounded container">
             <input
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  max={initialDate}
                  min="2021-07-01"
                />
          </button>*/}

                {/* Man kann ein anderes Datum nicht auswählen. Jedoch werden sie trz. angezeigt. @Lena, kannst du dir das mal anschauen? */}
             
            
        
    
      <div id="filter" className="menuOptionen">
         <label className="einführung"><b>Filter</b></label>
         <div id="inhalt">
          <div id="div1" className="visible">
              <label for="scope-select">Bundesland:</label>
              <button className="btn btn-light button-filter rounded">
              <Dropdown name="BundeslandSelect"
                options={options}
                id="scope-select"
                selectedValue={selectedScope}
                onSelectedValueChange={(selectedScope) => {
                  setmenuAge("00+");
                  setScope(selectedScope);
                  handleDiv1Selection();
                  handleClickILM()
                }}
              /> 
             </button>
          </div>
          <div id="div2" className="hidden">
              <label for="scope-select">Alter:</label>
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

    {/* 
        <div id="filter" className="menuOptionen">
          <u><label className="einführung"><b>Filter</b></label></u>
          <div id="inhalt">
            <div id="div1" className="visible">
              <label for="scope-select">Bundesland:</label>
              
              <Dropdown
                options={options}
                id="scope-select"
                selectedValue={selectedScope}
                onSelectedValueChange={(selectedScope) => {
                  setmenuAge("00+");
                  setScope(selectedScope);
                  handleDiv1Selection();
                }}
              /> 
              

            </div>

            <div id="div2" className="hidden">
              <label for="scope-select">Alter:</label>
              
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
              
            </div>*/}

          </div>
        </div>
        
{/*}
        <div id="anzeige" className="menuOptionen">
          <label className="einführung"><b>Anzeige</b></label>
          <div id="inhalt">
           { /*<div style={{ display: "flex", flexWrap: "wrap" }}> 
            <div className="Anzeigel">
              <label>Pro 100.000: </label></div>
              <div className="Anzeiger">
              <input
                type="radio"
                name="größe"
                value="hunderttausend"
                onChange={(e) => setAnzeige(e.target.value)}
                checked={anzeige === "hunderttausend"}
              />
              </div>
              <div className="Anzeigel">
              <label>absolute Zahlen: </label> </div>
              <div className="Anzeiger">{" "}
              <input
                type="radio"
                name="größe"
                value="absoluteZahlen"
                onChange={(e) => setAnzeige(e.target.value)}
                checked={anzeige === "absoluteZahlen"}
              />
              </div>
            </div>
        </div> 
        
        <label className="einführung"><b>Unsicherheitsintervall</b></label>
          <div id="inhalt">
          <div>
            <div className="Anzeigel">
              95% :</div> <div className="Anzeiger">{" "}
              <input
                type="radio"
                name="unsicherheitsintervall"
                value="FÜNFundNEUNZIG"
                onChange={(e) => setIntervall(e.target.value)}
              />
              </div>
              <div className="Anzeigel">50% :</div><div className="Anzeiger">{" "}
              <input
                type="radio"
                name="unsicherheitsintervall"
                value="FÜNFZIG"
                onChange={(e) => setIntervall(e.target.value)}
              />
              </div>
        
        <div className="Anzeigel">keines:</div> <div className="Anzeiger">{" "}
              <input
                type="radio"
                name="unsicherheitsintervall"
                value="keines"
                onChange={(e) => setIntervall(e.target.value)}
                defaultChecked
              />
              </div>
            </div>
        */
        }
      
        <div id="anzeige" className="menuOptionen">
         <label className="einführung"><b>Anzeige</b></label>
         <div id="inhalt">
          <button className="btn btn-light button-anzeige rounded ">
             <label>Pro 100.000 </label>
             <input 
               type="radio"
               name="größe"
               value="hunderttausend"
               onChange={(e) => setAnzeige(e.target.value)}
               checked={anzeige === "hunderttausend"}
             />
          </button>

          <button className="btn btn-light button-anzeige rounded" >
              <label>absolute Zahlen </label>
              {" "}
              <input 
                type="radio"
                name="größe"
                value="absoluteZahlen"
                onChange={(e) => setAnzeige(e.target.value)}
                checked={anzeige === "absoluteZahlen"}
              />
              </button>
       </div>
       </div>
        

        <div id="unsicherheitsintervall" className="menuOptionen">
        <label className="einführung"><b>Unsicherheitsintervall</b></label>
         <div id="inhalt">
          <button className="btn btn-light button-unsicherheitsintervall rounded ">
             <label className="usi"> 95%  </label>
             <input 
                type="radio"
                name="unsicherheitsintervall"
                value="FÜNFundNEUNZIG"
                onChange={(e) => setIntervall(e.target.value)}
                defaultChecked
              />
          </button>
          <button className="btn btn-light button-unsicherheitsintervall rounded ">
             <label className="usi"> 50%  </label>
             <input 
                type="radio"
                name="unsicherheitsintervall"
                value="FÜNFZIG"
                onChange={(e) => setIntervall(e.target.value)}
              />
          </button>

          <button className="btn btn-light button-unsicherheitsintervall rounded ">
             <label className="usi"> keines </label>
             <input 
                type="radio"
                name="unsicherheitsintervall"
                value="keines"
                onChange={(e) => setIntervall(e.target.value)}
              />
          </button>
          </div>
        </div>

        


        </section>
        </div>

      </div>
      <div className="col-7">

      {/* Graph ----------------------------------------------------------- */}
      <div className="GraphundMethoden">
        <Graph
          className="graph"
          isVisible={isVisible}
          isDatenstand={isDatenstand}
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
        />

        {/* Methoden ----------------------------------------------------------- */}
        
        {isVisible && (
          <table className="methdentabelle">
            <div className="auswahl">
              {/*1*/}
              <tr className="methodenauswahl">
                <div
                  className={`container ${isDatenstand ? "moved" : ""}`}
                  onClick={handleClickDatenstand}
                >
                  <td className="linelayout">
                    <hr
                      className="line"
                      style={{
                        backgroundColor: "blue",
                        borderColor: "blue",
                        height: "1px",
                        height: "3.4px",
                        width: "30px",
                      }}
                    />
                  </td>
                  <td className="methodnamerow">
                    <p
                      className={`datenstand ${isDatenstand ? "bold" : ""}`}
                      onClick={handleClickDatenstand}
                    >
                      Datenstand
                    </p>
                  </td>
                  <td>
                    
                      <div
                        className="hovertext questionmark hoverq"
                        data-hover="hover text 1"
                      >
                        <div className="">
                          <p> ?</p>
                        </div>
                      </div>
                    
                  </td>
                </div>
                </tr>
                
                {/*2*/}
                <tr>
                  <div
                    className={`container ${isEpiforecast ? "moved" : ""}`}
                    onClick={handleClickEpi}
                  >
                    <td className="linelayout">
                      <hr
                        className="line"
                        style={{
                          backgroundColor: "rgb(0,200,100)",
                          height: "1px",
                          height: "3.4px",
                          width: "30px",
                        }}
                      />
                    </td>

                    <td className="methodnamerow">
                      <p
                        className={`Epiforecast ${isEpiforecast ? "bold" : ""}`}
                        onClick={handleClickEpi}
                      >
                        independent Epiforecast
                      </p>
                    </td>
                    <td>
                      <div
                        className="hovertext questionmark"
                        data-hover="hover text 1"
                      >
                        <div className="">
                          <p> ?</p>
                        </div>
                      </div>
                    </td>
                  </div>
                </tr>

                {/*3*/}
                <tr>
                  <div
                    className={`container ${isILM ? "moved" : ""}`}
                    onClick={handleClickILM}
                  >
                    <td className="linelayout">
                      <hr
                        className="line"
                        style={{
                          backgroundColor: "rgb(0,0,255)",
                          borderColor: "rgb(0,0,255)",
                          height: "1px",
                          height: "3.4px",
                          width: "30px",
                        }}
                      />
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
                        data-hover="hover text 3"
                      >
                        <div className="">
                          <p> ?</p>
                        </div>
                      </div>
                    </td>
                  </div>
                </tr>

                {/*4*/}
                <tr>
                  <div
                    className={`container ${isKIT ? "moved" : ""}`}
                    onClick={handleClickKIT}
                  >
                    <td className="linelayout">
                      <hr
                        className="line"
                        style={{
                          backgroundColor: "rgb(100,0,250)",
                          borderColor: "rgb(100,0,250)",
                          height: "1px",
                          height: "3.4px",
                          width: "30px",
                        }}
                      />
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
                        data-hover="hover text 4"
                      >
                        <div className="">
                          <p> ?</p>
                        </div>
                      </div>
                    </td>
                  </div>
                </tr>

                {/*5*/}
                <tr>
                  <div
                    className={`container ${isLMU ? "moved" : ""}`}
                    onClick={handleClickLMU}
                  >
                    <td className="linelayout">
                      <hr
                        className="line"
                        style={{
                          backgroundColor: "rgb(400,10,200)",
                          borderColor: "rgb(400,10,200)",
                          height: "1px",
                          height: "3.4px",
                          width: "30px",
                        }}
                      />
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
                        data-hover="hover text 5"
                      >
                        <div className="">
                          <p> ?</p>
                        </div>
                      </div>
                    </td>
                  </div>
                </tr>

                {/*6*/}
                <tr>
                  <div
                    className={`container ${isNowcast ? "moved" : ""}`}
                    onClick={handleClickNowcast}
                  >
                    <td className="linelayout">
                      <hr
                        className="line"
                        style={{
                          backgroundColor: "rgb(100,049,0)",
                          borderColor: "rgb(100,049,0)",
                          height: "1px",
                          height: "3.4px",
                          width: "30px",
                        }}
                      />
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
                        data-hover="hover text 6"
                      >
                        <div className="">
                          <p> ?</p>
                        </div>
                      </div>
                    </td>
                  </div>
                </tr>
                {/*7*/}
                <tr>
                  <div
                    className={`container ${isRIVM ? "moved" : ""}`}
                    onClick={handleClickRIVM}
                  >
                    <td className="linelayout">
                      <hr
                        className="line"
                        style={{
                          backgroundColor: "rgb(600,100,200)",
                          borderColor: "rgb(600,100,200)",
                          height: "1px",
                          height: "3.4px",
                          width: "30px",
                        }}
                      />
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
                        data-hover="hover text 7"
                      >
                        <div className="">
                          <p> ?</p>
                        </div>
                      </div>
                    </td>
                  </div>
                </tr>
                {/*8*/}
                <tr>
                  <div
                    className={`container ${isRKI ? "moved" : ""}`}
                    onClick={handleClickRKI}
                  >
                    <td className="linelayout">
                      <hr
                        className="line"
                        style={{
                          backgroundColor: "rgb(100,100,100)",
                          borderColor: "rgb(100,100,100)",
                          height: "1px",
                          height: "3.4px",
                          width: "30px",
                        }}
                      />
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
                        data-hover="hover text 8"
                      >
                        <div className="">
                          <p> ?</p>
                        </div>
                      </div>
                    </td>
                  </div>
                </tr>

                {/*9*/}
                <tr>
                  <div
                    className={`container ${isSU ? "moved" : ""}`}
                    onClick={handleClickSU}
                  >
                    <td className="linelayout">
                      <hr
                        className="line"
                        style={{
                          backgroundColor: "rgb(010,200,222)",
                          borderColor: "rgb(010,200,222)",
                          height: "1px",
                          height: "3.4px",
                          width: "30px",
                        }}
                      />
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
                        data-hover="hover text 9"
                      >
                        <div className="">
                          <p> ?</p>
                        </div>
                      </div>
                    </td>
                  </div>
                </tr>
                {/*10*/}
                <tr>
                  <div
                    className={`container ${isSZ ? "moved" : ""}`}
                    onClick={handleClickSZ}
                  >
                    <td className="linelayout">
                      <hr
                        className="line"
                        style={{
                          backgroundColor: "rgb(0,200,100)",
                          borderColor: "rgb(0,200,100)",
                          height: "1px",
                          height: "3.4px",
                          width: "30px",
                        }}
                      />
                    </td>
                    <td className="methodnamerow">
                      <p
                        className={`SZ container ${isSZ ? "bold" : ""}`}
                        onClick={handleClickSZ}
                      >
                        SZ Nowcast
                      </p>
                    </td>
                    <td>
                      <div
                        className="hovertext questionmark hoverq"
                        data-hover="hover text 10"
                      >
                        <div className="">
                          <p> ?</p>
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

      <section id="tabelle" >
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
      </section>
    </div>
  );
};
