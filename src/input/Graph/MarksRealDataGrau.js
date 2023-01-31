import "./Graph.css";
import { line, curveNatural, reduce, area } from "d3";

export const MarksRealDataGrau = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  anzeigeAnAus,
  farbe,
}) => (
  <g className="mark" stroke={farbe}>
    <line
      x1={xScale(xValue(data[data.length - 1]))}
      x2={xScale(xValue(data[data.length - 1]))}
      y1={yScale.range()[0]}
      y2={yScale.range()[1]}
      visibility={anzeigeAnAus}
      stroke={`rgba(${farbe},1)`}
      stroke-width="0.3"
    />
    <path
      visibility={anzeigeAnAus}
      fill="none"
      stroke={`rgba(${farbe},0.9)`}
      d={line()
        .x((d) => xScale(xValue(d)))
        .y((d) => yScale(yValue(d)))(data)}
    />
  </g>
);
