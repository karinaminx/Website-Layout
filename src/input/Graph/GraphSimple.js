import React, { useEffect, useState, useCallback } from "react";
import {
  scaleLinear,
  scaleTime,
  timeFormat,
  max
} from "d3";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import "./Graph.css";
import { MarksRealDataGrau } from "./MarksRealDataGrau";
import { MarksRealDataSchwarz } from "./MarksRealDataSchwarz";
import { useTranslation } from "react-i18next";

const lngs = [
  { code: "de", native: "Deutsch" },
  { code: "en", native: "English" },
];

const height = 500;
const margin = { top: 20, right: 10, bottom: 65, left: 100 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;

//_______________________________________________________

export const Graph = ({
  isVisible,
  isDatenstandSchwarz,
  isDatenstandGrau,
  isNowcast,
  data,
  Nowcastdata,
  datenstand_schwarz,
  datenstand_grau,
  dateGraphStart,
}) => {
  let width = 800;

  let anzeigeDatenstandSchwarz;
  let anzeigeDatenstandGrau;
  let anzeigeNowcast;

  if (isVisible === true) {
    width = +(0.55 * window.innerWidth);
    {
      /* Stauchung Graph*/
    }
  } else {
    width = +(0.75 * window.innerWidth);
  }

  if (isDatenstandGrau) {
    anzeigeDatenstandGrau = "visible";
  } else {
    anzeigeDatenstandGrau = "hidden";
  }

  if (isDatenstandSchwarz) {
    anzeigeDatenstandSchwarz = "visible";
  } else {
    anzeigeDatenstandSchwarz = "hidden";
  }

  if (isNowcast) {
    anzeigeNowcast = "visible";
  } else {
    anzeigeNowcast = "hidden";
  }

  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  if (
    !data ||
    !Nowcastdata ||
    !datenstand_schwarz
  ) {
    return <p className="loading">Loading...</p>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = (d) => d.date;
  const yValueDatenstand = (d) => d.valueSieben;
  const yValue = (d) => d.value;
  const yQuantileKlein = (d) => d.quantileKlein;
  const yQuantileGroß = (d) => d.quantileGroß;
  const xAxisTickFormat = timeFormat("%d.%m.%Y");




  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);


  const dateGraphStartFormat = new Date(dateGraphStart);

  const xScale = scaleTime()
    .domain([dateGraphStartFormat, yesterday])
    .range([0, innerWidth])
    // .nice();

  const yScale = scaleLinear()
    .domain([
      0,
      Math.max(
        max(datenstand_schwarz, yValueDatenstand),
        max(data, yQuantileGroß)
      ),
    ])
    .range([innerHeight, 0])
    .nice();

    

  return (
    <div>
      <svg id="my_dataviz" width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <AxisBottom
            xScale={xScale}
            innerHeight={innerHeight + 10}
            tickFormat={xAxisTickFormat}
            tickOffset={10}
          />
          <text
            className="axis-label"
            textAnchor="middle"
            transform={`translate(${-yAxisLabelOffset - 25},${
              innerHeight / 2
            }) rotate(-90)`}
          >
            {t("yAxis")}
          </text>
          <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={10} />
          <text
            className="axis-label"
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset + 10}
            textAnchor="middle"
          >
            {t("xAxis")}
          </text>

          <g className="mark">
            <Marks
              data={Nowcastdata}
              xScale={xScale}
              yScale={yScale}
              xValue={xValue}
              yValue={yValue}
              yQuantileKlein={yQuantileKlein}
              yQuantileGroß={yQuantileGroß}
              circleRadius={3}
              anzeigeAnAus={anzeigeNowcast}
              farbe={"100,049,0"}
            />
            <MarksRealDataSchwarz
              data={datenstand_schwarz}
              xScale={xScale}
              yScale={yScale}
              xValue={xValue}
              yValue={yValueDatenstand}
              circleRadius={3}
              anzeigeAnAus={anzeigeDatenstandSchwarz}
              farbe={"0,0,0"}
            />

            <MarksRealDataGrau
              data={datenstand_grau}
              xScale={xScale}
              yScale={yScale}
              xValue={xValue}
              yValue={yValueDatenstand}
              circleRadius={3}
              anzeigeAnAus={anzeigeDatenstandGrau}
              farbe={"134, 134, 134"}
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
