import React, { useEffect, useState, useCallback } from "react";
import { scaleLinear, scaleTime, timeFormat, max, timeDay } from "d3";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import "./Graph.css";
import { line, curvexNatural } from "d3";
import { MarksRealDataGrau } from "./MarksRealDataGrau";
import { MarksRealDataSchwarz } from "./MarksRealDataSchwarz";
import { useTranslation } from "react-i18next";

const lngs = [
  { code: "de", native: "Deutsch" },
  { code: "en", native: "English" },
];

// Here the graph (expert mode) is set

//Set magnitudes for the graph
const height = 500;
const margin = { top: 20, right: 10, bottom: 65, left: 100 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;

export const Graph = ({
  isVisible,
  isDatenstandSchwarz,
  isDatenstandGrau,
  isEpiforecast,
  isILM,
  isKIT,
  isLMU,
  isNowcast,
  isNowcastMedian,
  isRIVM,
  isRKI,
  isSU,
  isSZ,
  data,
  EPIdata,
  ILMdata,
  KITdata,
  LMUdata,
  Nowcastdata,
  NowcastMediandata,
  RIVMdata,
  RKIdata,
  SUdata,
  SZdata,
  datenstand_schwarz,
  datenstand_grau,
  dateGraphStart,
}) => {
  //Set the width for the graph depending on whether methods are open or not. 
  let width;
  if (isVisible === true) {
    width = +(0.55 * window.innerWidth);
    {
    }
  } else {
    width = +(0.75 * window.innerWidth);
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

//Convert button output (true/false) to hide/visible. This will then be passed to Marks.

  let anzeigeDatenstandSchwarz;
  let anzeigeDatenstandGrau;
  let anzeigeEpiforecast;
  let anzeigeILM;
  let anzeigeKIT;
  let anzeigeLMU;
  let anzeigeNowcast;
  let anzeigeNowcastMedian;
  let anzeigeRIVM;
  let anzeigeRKI;
  let anzeigeSU;
  let anzeigeSZ;

  if (isEpiforecast) {
    anzeigeEpiforecast = "visible";
  } else {
    anzeigeEpiforecast = "hidden";
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

  if (isILM) {
    anzeigeILM = "visible";
  } else {
    anzeigeILM = "hidden";
  }

  if (isKIT) {
    anzeigeKIT = "visible";
  } else {
    anzeigeKIT = "hidden";
  }

  if (isLMU) {
    anzeigeLMU = "visible";
  } else {
    anzeigeLMU = "hidden";
  }

  if (isNowcast) {
    anzeigeNowcast = "visible";
  } else {
    anzeigeNowcast = "hidden";
  }
  if (isNowcastMedian) {
    anzeigeNowcastMedian = "visible";
  } else {
    anzeigeNowcastMedian = "hidden";
  }

  if (isRIVM) {
    anzeigeRIVM = "visible";
  } else {
    anzeigeRIVM = "hidden";
  }

  if (isRKI) {
    anzeigeRKI = "visible";
  } else {
    anzeigeRKI = "hidden";
  }

  if (isSU) {
    anzeigeSU = "visible";
  } else {
    anzeigeSU = "hidden";
  }

  if (isSZ) {
    anzeigeSZ = "visible";
  } else {
    anzeigeSZ = "hidden";
  }

  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  //Check if the data are already loaded or still loading.
  if (
    !data ||
    !EPIdata ||
    !ILMdata ||
    !KITdata ||
    !LMUdata ||
    !Nowcastdata ||
    !NowcastMediandata ||
    !RIVMdata ||
    !RKIdata ||
    !SUdata ||
    !SZdata ||
    !datenstand_schwarz
  ) {
    return <p className="loading">Loading...</p>;
  }

  //Assign X and Y for the axes.
  const xValue = (d) => d.date;
  const yValueDatenstand = (d) => d.valueSieben;
  const yValue = (d) => d.value;
  const yQuantileKlein = (d) => d.quantileKlein;
  const yQuantileGro?? = (d) => d.quantileGro??;
  const xAxisTickFormat = timeFormat("%d.%m.%Y");

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const dateGraphStartFormat = new Date(dateGraphStart);

  //Setting the Achses
  const xScale = scaleTime()
    .domain([dateGraphStartFormat, yesterday])
    .range([0, innerWidth]);
  // .nice();

  const yScale = scaleLinear()
    .domain([
      0,
      Math.max(
        max(datenstand_schwarz, yValueDatenstand),
        max(data, yQuantileGro??)
      ),
    ])
    .range([innerHeight, 0])
    .nice();

  return (
    <div>
      <svg id="my_dataviz" width={width} height={height}>

      {/* Pass axis settings AxisLeft and AxisBottom.  */}
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

          {/* Set the different lines for the methods.  */}
            <Marks
              data={EPIdata}
              xScale={xScale}
              yScale={yScale}
              xValue={xValue}
              yValue={yValue}
              yQuantileKlein={yQuantileKlein}
              yQuantileGro??={yQuantileGro??}
              circleRadius={3}
              anzeigeAnAus={anzeigeEpiforecast}
              farbe={"red"}
            />

            <Marks
              data={ILMdata}
              xScale={xScale}
              yScale={yScale}
              xValue={xValue}
              yValue={yValue}
              yQuantileKlein={yQuantileKlein}
              yQuantileGro??={yQuantileGro??}
              circleRadius={3}
              anzeigeAnAus={anzeigeILM}
              farbe={"0,0,255"}
            />

            <Marks
              data={KITdata}
              xScale={xScale}
              yScale={yScale}
              xValue={xValue}
              yValue={yValue}
              yQuantileKlein={yQuantileKlein}
              yQuantileGro??={yQuantileGro??}
              circleRadius={3}
              anzeigeAnAus={anzeigeKIT}
              farbe={"100,0,250"}
            />
            <Marks
              data={LMUdata}
              xScale={xScale}
              yScale={yScale}
              xValue={xValue}
              yValue={yValue}
              yQuantileKlein={yQuantileKlein}
              yQuantileGro??={yQuantileGro??}
              circleRadius={3}
              anzeigeAnAus={anzeigeLMU}
              farbe={"400,10,200"}
            />
            <Marks
              data={Nowcastdata}
              xScale={xScale}
              yScale={yScale}
              xValue={xValue}
              yValue={yValue}
              yQuantileKlein={yQuantileKlein}
              yQuantileGro??={yQuantileGro??}
              circleRadius={3}
              anzeigeAnAus={anzeigeNowcast}
              farbe={"100,049,0"}
            />
            <Marks
              data={NowcastMediandata}
              xScale={xScale}
              yScale={yScale}
              xValue={xValue}
              yValue={yValue}
              yQuantileKlein={yQuantileKlein}
              yQuantileGro??={yQuantileGro??}
              circleRadius={3}
              anzeigeAnAus={anzeigeNowcastMedian}
              farbe={"255, 115, 0"}
            />

            <Marks
              data={RIVMdata}
              xScale={xScale}
              yScale={yScale}
              xValue={xValue}
              yValue={yValue}
              yQuantileKlein={yQuantileKlein}
              yQuantileGro??={yQuantileGro??}
              circleRadius={3}
              anzeigeAnAus={anzeigeRIVM}
              farbe={"600,100,200"}
            />
            <Marks
              data={RKIdata}
              xScale={xScale}
              yScale={yScale}
              xValue={xValue}
              yValue={yValue}
              yQuantileKlein={yQuantileKlein}
              yQuantileGro??={yQuantileGro??}
              circleRadius={3}
              anzeigeAnAus={anzeigeRKI}
              farbe={"100,100,100"}
            />
            <Marks
              data={SUdata}
              xScale={xScale}
              yScale={yScale}
              xValue={xValue}
              yValue={yValue}
              yQuantileKlein={yQuantileKlein}
              yQuantileGro??={yQuantileGro??}
              circleRadius={3}
              anzeigeAnAus={anzeigeSU}
              farbe={"010,200,222"}
            />
            <Marks
              data={SZdata}
              xScale={xScale}
              yScale={yScale}
              xValue={xValue}
              yValue={yValue}
              yQuantileKlein={yQuantileKlein}
              yQuantileGro??={yQuantileGro??}
              circleRadius={3}
              anzeigeAnAus={anzeigeSZ}
              farbe={"0,200,100"}
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
