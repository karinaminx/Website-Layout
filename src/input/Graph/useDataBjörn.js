import React, { useState, useEffect } from "react";
import { csv, filter } from "d3";
import "./Graph.css";
import { initialDate } from "../MenuAuswahl/optionsCollection";

const dateEnd = new Date("2023-01-19");
const dateStart = new Date("2022-12-23");

const csvUrl =
  "https://raw.githubusercontent.com/KITmetricslab/hospitalization-nowcast-hub/main/data-truth/COVID-19/COVID-19_hospitalizations_preprocessed.csv";

export const useDataDatenstand = (
  menuAge,
  selectedScope,
  display,
  anzeige,
  dateGraphStart,
  dateEndÜbergeben
) => {
  const dateStarA= new Date(dateGraphStart);

  // console.log(dateStarA);



  const [data, setData] = useState(null);

  useEffect(() => {
    const dateStart = new Date(dateGraphStart);
    const dateEnd = new Date(dateEndÜbergeben)

    const processRow = (row) => {
      for (let i = 0; i <= 80; i++) {
        const value = row[`value_${i}d`];
        if (isNaN(parseFloat(value))) {
          delete row[`value_${i}d`];
        } else {
          row[`value_${i}d`] = parseFloat(value);
        }
      }

      const value = row[`value_>80d`];
      if (isNaN(parseFloat(value))) {
        delete row[`value_>80d`];
      } else {
        row[`value_>80d`] = parseFloat(value);
      }

      row.date = new Date(row.date);
      return row;
    };

    csv(csvUrl, processRow).then((loadedData) => {
      const filteredData = loadedData.filter(
        (row) => row.location === selectedScope && row.age_group === menuAge
      );

      const filteredDataWithValue = filteredData.map((row) => {
        let value = 0;

        for (
          let i = 0;
          i <
          Object.keys(row).length - 4 - distanceToEnd(filteredData, dateEnd);
          i++
        ) {
          if (isNaN(row[`value_${i}d`])) break;
          value += row[`value_${i}d`];
        }

        return { ...row, value };
      });

      const filteredDataWithValueSieben = filteredDataWithValue.map(
        (row, index) => {

          let valueSieben = filteredDataWithValue[index].value;
          for (let i = 1; i <= 6 && index >= i; i++) {
            valueSieben += filteredDataWithValue[index - i].value;
          }

          return { ...row, valueSieben };
        }
      );
      setData(filteredDataWithValueSieben);

    });
  }, [ menuAge, selectedScope, display, dateStart, dateEndÜbergeben]);


  return data;
};

function distanceToEnd(array, dateEnd) {
  let dateEndIndex = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i].date.getTime() === dateEnd.getTime()) {
      dateEndIndex = i;
      break;
    }
  }
  return array.length - dateEndIndex - 1;
}
