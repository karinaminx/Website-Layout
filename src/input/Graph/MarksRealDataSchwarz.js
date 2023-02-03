import "./Graph.css";
import { line} from "d3";

//Set the line for "Datenstand grau".

export const MarksRealDataSchwarz = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  anzeigeAnAus,
  farbe,
}) => (
  <g className="mark" stroke={farbe}>
    {/* Setting the line for "Datenstand grau"*/}
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
