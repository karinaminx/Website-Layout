// import React, { useState, useEffect } from "react";
// import { csv } from "d3";
// import "./Graph.css";
// // import { getPopulation, Population } from "./Population";

// let zwischenspeicher;

// const dateEnde = new Date("2023-01-18"); //dies muss nachher noch global festgelegt und übergeben werden. Zur einfacheren Handhabung lege ich es hier fest.
// const dateAnfang = new Date("2022-12-23"); //das gleiche gilt hierfür. Dies ergebt sich aus dem Anfang der Methoden. Also dem Start des Graphen

// const csvUrl =
//   "https://raw.githubusercontent.com/KITmetricslab/hospitalization-nowcast-hub/main/data-truth/COVID-19/COVID-19_hospitalizations_preprocessed.csv";

// export const useDataDatenstand = (
//   methode,
//   menuAge,
//   selectedScope,
//   anzeige,
//   date
// ) => {
//   const [data, setData] = useState(null);
//   const [datesAfterEnde, setDatesAfterEnde] = useState(null);
//   const [Datenstand, setDatenstand] = useState(null);

//   useEffect(() => {
//     const row = (d) => {
//       for (let i = 0; i <= 80; i++) {
//         d[`value_${i}d`] = parseFloat(d[`value_${i}d`]);
//       }
//       d["value_>80d"] = parseFloat(d["value_>80d"]);
//       d.date = new Date(d.date);

//       return d;
//     };

//     csv(csvUrl, row).then((loadedData) => {
//       const filteredData = loadedData.filter(
//         (d) => d.location === selectedScope && d.age_group === menuAge
//       );

//       setData(filteredData);
//     });
//   }, [methode, menuAge, selectedScope, anzeige]);

//   return data;
// };

// Version mit Spielereien

// import React, { useState, useEffect } from "react";
// import { csv } from "d3";
// import "./Graph.css";
// // import { getPopulation, Population } from "./Population";

// let zwischenspeicher;

// const dateEnde = new Date("2023-01-18"); //dies muss nachher noch global festgelegt und übergeben werden. Zur einfacheren Handhabung lege ich es hier fest.
// const dateAnfang = new Date("2022-12-23"); //das gleiche gilt hierfür. Dies ergebt sich aus dem Anfang der Methoden. Also dem Start des Graphen

// const csvUrl =
//   "https://raw.githubusercontent.com/KITmetricslab/hospitalization-nowcast-hub/main/data-truth/COVID-19/COVID-19_hospitalizations_preprocessed.csv";

// export const useDataDatenstand = (
//   methode,
//   menuAge,
//   selectedScope,
//   anzeige,
//   date
// ) => {
//   const [data, setData] = useState(null);
//   const [datesAfterEnde, setDatesAfterEnde] = useState(null);
//   const [Datenstand, setDatenstand] = useState(null);

//   useEffect(() => {
//     const row = (d) => {
//       for (let i = 0; i <= 80; i++) {
//         d[`value_${i}d`] = parseFloat(d[`value_${i}d`]);
//       }
//       d["value_>80d"] = parseFloat(d["value_>80d"]);
//       d.date = new Date(d.date);

//       return d;
//     };

//     csv(csvUrl, row).then((loadedData) => {
//       const filteredData = loadedData.filter(
//         (d) => d.location === selectedScope && d.age_group === menuAge
//       );

//       // console.log(filteredData);
//       const index = filteredData.findIndex(
//         (d) => d.date.toString() === dateEnde.toString()
//       );

//       const filteredDataWithValueAusgabe = filteredData.map((row, index) => {
//         let valueAusgabe = 0;
//         // for (let i = 0; i < Object.keys(row).length - index; i++) {
//         //   valueAusgabe += row[`value_${i}d`];
//         // }
//         for (let i = 0; i < filteredData.length; i++) {
//           const row = filteredData[i];
//           let valueAusgabe = 0;
//           for (let j = 0; j < Object.keys(row).length - 4; j++) {
//             valueAusgabe += row[`value_${j}d`];
//           }
//           row.valueAusgabe = valueAusgabe;
//         }

//         return { ...row, valueAusgabe };
//       });

//       console.log(filteredDataWithValueAusgabe);

//       setData(filteredData);
//     });
//   }, [methode, menuAge, selectedScope, anzeige]);

//   return data;
// };

import React, { useState, useEffect } from "react";
import { csv } from "d3";
import "./Graph.css";

const dateEnd = new Date("2023-01-18");
const dateStart = new Date("2022-12-23");

const csvUrl =
  "https://raw.githubusercontent.com/KITmetricslab/hospitalization-nowcast-hub/main/data-truth/COVID-19/COVID-19_hospitalizations_preprocessed.csv";

export const useDataDatenstand = (
  method,
  menuAge,
  selectedScope,
  display,
  date
) => {
  const [data, setData] = useState(null);
  const [Datenstand, setDatenstand] = useState(null);

  useEffect(() => {
    const processRow = (row) => {
      for (let i = 0; i <= 80; i++) {
        row[`value_${i}d`] = parseFloat(row[`value_${i}d`]);
      }
      row["value_>80d"] = parseFloat(row["value_>80d"]);
      row.date = new Date(row.date);
      return row;
    };

    csv(csvUrl, processRow).then((loadedData) => {
      const filteredData = loadedData.filter(
        (row) => row.location === selectedScope && row.age_group === menuAge
      );

      const filteredDataWithValue = filteredData.map((row) => {
        let value = 0;

        for (let i = 0; i < Object.keys(row).length - 4; i++) {
          if (isNaN(row[`value_${i}d`])) break;
          value += row[`value_${i}d`];
        }
        return { ...row, value };
      });

      setData(filteredData);
      console.log(filteredDataWithValue);
    });
  }, [method, menuAge, selectedScope, display]);

  return data;
};
