import React, { useState, useEffect } from "react";
import { csv, filter } from "d3";
import "./Graph.css";
import {
  DE00,
  DEBW,
  DEBY,
  DEBE,
  DEBB,
  DEHB,
  DEHH,
  DEHE,
  DEMV,
  DENI,
  DENW,
  DERP,
  DESL,
  DESN,
  DEST,
  DESH,
  DETH,
  age00to04,
  age05to14,
  age15to34,
  age35to59,
  age60to79,
  age80up,
} from "./useEinwohnerZahlen.js";

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
  const [data, setData] = useState(null);

  useEffect(() => {
    const dateStart = new Date(dateGraphStart);
    const dateEnd = new Date(dateEndÜbergeben);

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

      const filteredDataWithValueSiebenUHunderttausend =
        filteredDataWithValueSieben.filter((d) => {
          if (anzeige == "hunderttausend") {
            if (selectedScope === "DE" && menuAge === "00+") {
              d.valueSieben = (100000 / DE00) * d.valueSieben;
            } else if (selectedScope === "DE-BW") {
              d.valueSieben = (100000 / DEBW) * d.valueSieben;
            } else if (selectedScope == "DE-BY") {
              d.valueSieben = (100000 / DEBY) * d.valueSieben;
            } else if (selectedScope == "DE-BE") {
              d.valueSieben = (100000 / DEBE) * d.valueSieben;
            } else if (selectedScope == "DE-BB") {
              d.valueSieben = (100000 / DEBB) * d.valueSieben;
            } else if (selectedScope == "DE-HB") {
              d.valueSieben = (100000 / DEHB) * d.valueSieben;
            } else if (selectedScope == "DE-HH") {
              d.valueSieben = (100000 / DEHH) * d.valueSieben;
            } else if (selectedScope == "DE-HE") {
              d.valueSieben = (100000 / DEHE) * d.valueSieben;
            } else if (selectedScope == "DE-MV") {
              d.valueSieben = (100000 / DEMV) * d.valueSieben;
            } else if (selectedScope == "DE-NI") {
              d.valueSieben = (100000 / DENI) * d.valueSieben;
            } else if (selectedScope == "DE-NW") {
              d.valueSieben = (100000 / DENW) * d.valueSieben;
            } else if (selectedScope == "DE-RP") {
              d.valueSieben = (100000 / DERP) * d.valueSieben;
            } else if (selectedScope == "DE-SL") {
              d.valueSieben = (100000 / DESL) * d.valueSieben;
            } else if (selectedScope == "DE-SN") {
              d.valueSieben = (100000 / DESN) * d.valueSieben;
            } else if (selectedScope == "DE-ST") {
              d.valueSieben = (100000 / DEST) * d.valueSieben;
            } else if (selectedScope == "DE-SH") {
              d.valueSieben = (100000 / DESH) * d.valueSieben;
            } else if (selectedScope == "DE-TH") {
              d.valueSieben = (100000 / DETH) * d.valueSieben;
            } else if (menuAge == "00-04") {
              d.valueSieben = (100000 / age00to04) * d.valueSieben;
            } else if (menuAge == "05-14") {
              d.valueSieben = (100000 / age05to14) * d.valueSieben;
            } else if (menuAge == "15-34") {
              d.valueSieben = (100000 / age15to34) * d.valueSieben;
            } else if (menuAge == "35-59") {
              d.valueSieben = (100000 / age35to59) * d.valueSieben;
            } else if (menuAge == "60-79") {
              d.valueSieben = (100000 / age60to79) * d.valueSieben;
            } else if (menuAge == "80+") {
              d.valueSieben = (100000 / age80up) * d.valueSieben;
            }
          }else(d.valueSieben =  d.valueSieben)
          return d.date >= dateStart && d.date <= dateEnd;
        });

      setData(filteredDataWithValueSiebenUHunderttausend);
    });

  }, [menuAge, selectedScope, display, anzeige, dateGraphStart, dateEndÜbergeben]);
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
