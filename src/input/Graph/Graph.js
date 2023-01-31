import React, { useEffect, useState, useCallback } from "react";
import {
  scaleLinear,
  scaleTime,
  timeFormat,
  min,
  max,
  tickStep,
  timeDay,
} from "d3";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import "./Graph.css";
import { line, curveNatural } from "d3";
import { MarksRealData } from "./MarksRealData";
// import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import {Tooltipp} from "./Tooltipp";

const height = 500;
const margin = { top: 20, right: 10, bottom: 65, left: 100 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;

//_______________________________________________________

export const Graph = ({
  isVisible,
  isDatenstandSchwarz,
  isDatenstandGrau,
  isEpiforecast,
  isILM,
  isKIT,
  isLMU,
  isNowcast,
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
  RIVMdata,
  RKIdata,
  SUdata,
  SZdata,
  datenstand_schwarz,
  datenstand_grau,
}) => {
  let width = 800;

  let anzeigeDatenstandSchwarz;
  let anzeigeDatenstandGrau;

  let anzeigeEpiforecast;
  let anzeigeILM;
  let anzeigeKIT;
  let anzeigeLMU;
  let anzeigeNowcast;
  let anzeigeRIVM;
  let anzeigeRKI;
  let anzeigeSU;
  let anzeigeSZ;

  if (isVisible === true) {
    width = +(0.55 * window.innerWidth);
    {
      /* Stauchung Graph*/
    }
  } else {
    width = +(0.75 * window.innerWidth);
  }

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

  if (
    !data ||
    !EPIdata ||
    !ILMdata ||
    !KITdata ||
    !LMUdata ||
    !Nowcastdata ||
    !RIVMdata ||
    !RKIdata ||
    !SUdata ||
    !SZdata ||
    !datenstand_schwarz
  ) {
    return <p className="loading">Loading...</p>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = (d) => d.date;
  const xAxisLabel = "Meldedatum";

  const yValueDatenstand = (d) => d.valueSieben;

  const yValue = (d) => d.value;
  const yQuantileKlein = (d) => d.quantileKlein;
  const yQuantileGroß = (d) => d.quantileGroß;
  const yAxisLabel = "7 Tage Hospitalisierungsinzidenz";

  const xAxisTickFormat = timeFormat("%d.%m.%Y");

  const dateStart = timeDay.offset(max(data, xValue), -35);
  const dateEnde = timeDay.offset(max(data, xValue), 0);

  // const xScale = scaleTime()
  // .domain([dateStart,dateEnde])
  // .range([0, innerWidth])
  // .nice();

  const xScale = scaleTime()
    .domain([dateStart, max(data, xValue)])
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain([0, max(data, yQuantileGroß)])
    .range([innerHeight, 0])
    .nice();

  // const toopltipp = 

  return (
    <div>
    <Tooltipp xScale={xScale} yScale={yScale}/>
    <svg width={width} height={height}>

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
          {yAxisLabel}
        </text>
        <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={10} />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset + 10}
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <g className="mark">
          <Marks
            data={EPIdata}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            yQuantileKlein={yQuantileKlein}
            yQuantileGroß={yQuantileGroß}
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
            yQuantileGroß={yQuantileGroß}
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
            yQuantileGroß={yQuantileGroß}
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
            yQuantileGroß={yQuantileGroß}
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
            yQuantileGroß={yQuantileGroß}
            circleRadius={3}
            anzeigeAnAus={anzeigeNowcast}
            farbe={"100,049,0"}
          />

          <Marks
            data={RIVMdata}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            yQuantileKlein={yQuantileKlein}
            yQuantileGroß={yQuantileGroß}
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
            yQuantileGroß={yQuantileGroß}
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
            yQuantileGroß={yQuantileGroß}
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
            yQuantileGroß={yQuantileGroß}
            circleRadius={3}
            anzeigeAnAus={anzeigeSZ}
            farbe={"0,200,100"}
          />
          <MarksRealData
            data={datenstand_schwarz}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValueDatenstand}
            circleRadius={3}
            anzeigeAnAus={anzeigeDatenstandSchwarz}
            farbe={"0,0,0"}
          />

          <MarksRealData
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

