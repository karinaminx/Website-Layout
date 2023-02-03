import "./Graph.css";
import { line, area } from "d3";

//Set the line for methods.

export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  anzeigeAnAus,
  yQuantileGroß,
  yQuantileKlein,
  farbe
}) => (
  <g className="mark" stroke={farbe}>

{/* Setting the line for mean*/}
    <path
      visibility={anzeigeAnAus}
      fill="none"
      stroke={`rgba(${farbe},0.9)`}
      d={
        line()
          .x((d) => xScale(xValue(d)))
          .y((d) => yScale(yValue(d)))(data)
      }
    />
  {/* Setting the line for the small quantile*/}
    <path
      visibility={anzeigeAnAus}
      fill="none"
      stroke={`rgba(${farbe},0.4)`}
      d={
        line()
          .x((d) => xScale(xValue(d)))
          .y((d) => yScale(yQuantileKlein(d)))(data)
      }
    />
  {/* Setting the line for the big quantile*/}
    <path
      visibility={anzeigeAnAus}
      fill="none"
      stroke={`rgba(${farbe},0.4)`}
      d={
        line()
          .x((d) => xScale(xValue(d)))
          .y((d) => yScale(yQuantileGroß(d)))(data)
      }
    />
  {/* Setting the area for the big quantile to mean*/}

    <path
      visibility={anzeigeAnAus}
      fill={`rgba(${farbe},0.2)`}
      d={
        area()
          .x((d) => xScale(xValue(d)))
          .y0((d) => yScale(yQuantileKlein(d)))
          .y1((d) => yScale(yValue(d)))(data)
      }
    />
    {/* Setting the area for the big quantile to mean*/}
    <path
      visibility={anzeigeAnAus}
      fill={`rgba(${farbe},0.2)`}
      d={
        area()
          .x((d) => xScale(xValue(d)))
          .y0((d) => yScale(yValue(d)))
          .y1((d) => yScale(yQuantileGroß(d)))(data)
      }
    />
      <path
      visibility={anzeigeAnAus}
      fill="none"
      stroke={`rgba(${farbe},0.9)`}
      d={
        line()
          .x((d) => xScale(xValue(d)))
          .y((d) => yScale(yScale.domain()[0]))
          .defined((d) => yScale(yValue(d)))
      }
    />

  </g>
);
