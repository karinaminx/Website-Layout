import React, { useState, useEffect } from "react";
import { csv } from "d3";
import "./Graph.css";
import {DE00, DEBW, DEBY, DEBE, DEBB, DEHB, DEHH, DEHE, DEMV, DENI, DENW, DERP, DESL, DESN, DEST, DESH, DETH, age00to04, age05to14, age15to34, age35to59, age60to79, age80up} from "./useEinwohnerZahlen.js"
import { getPopulation, Population } from "./Population"

const datum = "2023-01-10";

//{DE00, DEBW, DEBY, DEBE, DEBB, DEHB, DEHH, DEHE, DEMV, DENI, DENW, DERP, DESL, DESN, DEST, DESH, DETH, age00to04, age05to14, age15to34, age35to59, age60to79, age80up}

// const csvUrl =
//   "https://raw.githubusercontent.com/KITmetricslab/hospitalization-nowcast-hub/main/nowcast_viz_de/plot_data/" +
//   datum +
//   "_forecast_data.csv";

  const csvUrl = "https://raw.githubusercontent.com/KITmetricslab/hospitalization-nowcast-hub/main/nowcast_viz_de/plot_data/2023-01-20_forecast_data.csv";

   


export const useDataAxes = (
  methode,
  menuAge,
  selectedScope,
  intervall,
  anzeige,
  date
) => {
  let unteresQuantile;
  let oberesQuantile;

// console.log(methode + " " +selectedScope + " " + menuAge + " " + intervall + " " + " " + anzeige + " " + date);

  // let populationTabelle = getPopulation(menuAge,selectedScope);

  // console.log(populationTabelle);
  
  // let population = populationTabelle[0].population;


  // d.value = (+d.mean/+population) * 100000;
  // d.quantileKlein = (+[unteresQuantile]/population) * 100000;
  // d.quantileGroß = (+d[oberesQuantile]/population) * 100000;

  const [data, setData] = useState(null);

  useEffect(() => {
    if (intervall === "FÜNFZIG") {
      unteresQuantile = "q0.25";
      oberesQuantile = "q0.75";
    } else if (intervall === "FÜNFundNEUNZIG") {
      unteresQuantile = "q0.025";
      oberesQuantile = "q0.975";
    } else {
      unteresQuantile = "mean";
      oberesQuantile = "mean";
    }

    const row = (d) => {
  
      if (anzeige === "hunderttausend") {
        {
          if(selectedScope == "DE" && menuAge == "00+"){
            d.value = (100000/DE00*(+d.mean))
            d.quantileKlein =  (100000/DE00*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/DE00*(+d[oberesQuantile]))
          } else if (selectedScope == "DE-BW"){
            d.value = (100000/DEBW*(+d.mean))
            d.quantileKlein =  (100000/DEBW*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/DEBW*(+d[oberesQuantile]))
          } else if (selectedScope == "DE-BY"){
            d.value = (100000/DEBY*(+d.mean))
            d.quantileKlein =  (100000/DEBY*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/DEBY*(+d[oberesQuantile]))
          } else if (selectedScope == "DE-BE"){
            d.value = (100000/DEBE*(+d.mean))
            d.quantileKlein =  (100000/DEBE*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/DEBE*(+d[oberesQuantile]))
          } else if (selectedScope == "DE-BB"){
            d.value = (100000/DEBB*(+d.mean))
            d.quantileKlein =  (100000/DEBB*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/DEBB*(+d[oberesQuantile]))
          } else if (selectedScope == "DE-HB"){
            d.value = (100000/DEHB*(+d.mean))
            d.quantileKlein =  (100000/DEHB*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/DEHB*(+d[oberesQuantile]))
          } else if (selectedScope == "DE-HH"){
            d.value = (100000/DEHH*(+d.mean))
            d.quantileKlein =  (100000/DEHH*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/DEHH*(+d[oberesQuantile]))
          } else if (selectedScope == "DE-HE"){
            d.value = (100000/DEHE*(+d.mean))
            d.quantileKlein =  (100000/DEHE*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/DEHE*(+d[oberesQuantile]))
          } else if (selectedScope == "DE-MV"){
            d.value = (100000/DEMV*(+d.mean))
            d.quantileKlein =  (100000/DEMV*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/DEMV*(+d[oberesQuantile]))
          } else if (selectedScope == "DE-NI"){
            d.value = (100000/DENI*(+d.mean))
            d.quantileKlein =  (100000/DENI*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/DENI*(+d[oberesQuantile]))
          } else if (selectedScope == "DE-NW"){
            d.value = (100000/DENW*(+d.mean))
            d.quantileKlein =  (100000/DENW*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/DENW*(+d[oberesQuantile]))
          } else if (selectedScope == "DE-RP"){
            d.value = (100000/DERP*(+d.mean))
            d.quantileKlein =  (100000/DERP*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/DERP*(+d[oberesQuantile]))
          } else if (selectedScope == "DE-SL"){
            d.value = (100000/DESL*(+d.mean))
            d.quantileKlein =  (100000/DESL*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/DESL*(+d[oberesQuantile]))
          } else if (selectedScope == "DE-SN"){
            d.value = (100000/DESN*(+d.mean))
            d.quantileKlein =  (100000/DESN*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/DESN*(+d[oberesQuantile]))
          } else if (selectedScope == "DE-ST"){
            d.value = (100000/DEST*(+d.mean))
            d.quantileKlein =  (100000/DEST*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/DEST*(+d[oberesQuantile]))
          } else if (selectedScope == "DE-SH"){
            d.value = (100000/DESH*(+d.mean))
            d.quantileKlein =  (100000/DESH*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/DESH*(+d[oberesQuantile]))
          } else if (selectedScope == "DE-TH"){
            d.value = (100000/DETH*(+d.mean))
            d.quantileKlein =  (100000/DETH*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/DETH*(+d[oberesQuantile]))
          } else if (menuAge == "00-04"){
            d.value = (100000/age00to04*(+d.mean))
            d.quantileKlein =  (100000/age00to04*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/age00to04*(+d[oberesQuantile]))
          } else if (menuAge == "05-14"){
            d.value = (100000/age05to14*(+d.mean))
            d.quantileKlein =  (100000/age05to14*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/age05to14*(+d[oberesQuantile]))
          } else if (menuAge == "15-34"){
            d.value = (100000/age15to34*(+d.mean))
            d.quantileKlein =  (100000/age15to34*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/age15to34*(+d[oberesQuantile]))
          } else if (menuAge == "35-59"){
            d.value = (100000/{age35to59}*(+d.mean))
            d.quantileKlein =  (100000/{age35to59}*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/{age35to59}*(+d[oberesQuantile]))
          } else if (menuAge== "60-79"){
            d.value = (100000/age60to79*(+d.mean))
            d.quantileKlein =  (100000/age60to79*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/age60to79*(+d[oberesQuantile]))
          } else if (menuAge  == "80+"){
            d.value = (100000/age80up*(+d.mean))
            d.quantileKlein =  (100000/age80up*(+d[unteresQuantile]))
            d.quantileGroß =  (100000/age80up*(+d[oberesQuantile]))
          }


        }      

      } else {
        d.value = +d.mean;
        d.quantileKlein = +d[unteresQuantile];
        d.quantileGroß = +d[oberesQuantile];
      }

      d.date = new Date(d.target_end_date);
      return d;
    }; 

    csv(csvUrl, row).then((loadedData) => {
      const filteredData = loadedData.filter(
        (d) =>
          d.model !== "" &&
          d.location ===  selectedScope &&
          d.age_group === menuAge
  
      );
      setData(filteredData);
    });
  }, [methode, menuAge, selectedScope, intervall, anzeige]);

  return data;
};