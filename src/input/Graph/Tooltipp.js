import React, { useRef, useState } from 'react';
import { select, scaleLinear, scaleBand, axisLeft, axisBottom } from 'd3';

const svgRef = useRef();

const xValue = d => d.xValue;
const yValueDatenstand = d => d.yValueDatenstand;
const yValue = d => d.yValue;
const yQuantileKlein = d => d.yQuantileKlein;
const yQuantileGroß = d => d.yQuantileGroß;

const margin = { top: 20, right: 20, bottom: 30, left: 40 };
const innerWidth = 800 - margin.left - margin.right;
const innerHeight = 500 - margin.top - margin.bottom;

const [data, setData] = useState([]);

const xScale = scaleBand()
.domain(data.map(xValue))
.range([0, innerWidth])
.padding(0.1);

const yScale = scaleLinear()
.domain([0, Math.max(...data.map(yValueDatenstand))])
.range([innerHeight, 0]);

const xAxis = axisBottom(xScale);
const yAxis = axisLeft(yScale);

const tooltipRef = useRef();

const onMouseOver = (d, i, n) => {
select(tooltipRef.current)
.style("opacity", 1)
.style("left", ${xScale(xValue(d)) + xScale.bandwidth() / 2}px)
.style("top", ${yScale(yValueDatenstand(d))}px)
.html( <p>xValue: ${xValue(d)}</p> <p>yValueDatenstand: ${yValueDatenstand(d)}</p> <p>yValue: ${yValue(d)}</p> <p>yQuantileKlein: ${yQuantileKlein(d)}</p> <p>yQuantileGroß: ${yQuantileGroß(d)}</p> );
};

const onMouseOut = (d, i, n) => {
select(tooltipRef.current).style("opacity", 0);
};

return (
<div>
<svg ref={svgRef} width={800} height={500}>
<g transform={translate(${margin.left}, ${margin.top})}>
{data.map((d, i) => (
<rect
key={i}
x={xScale(xValue(d))}
y={yScale(yValueDatenstand(d))}
width={xScale.bandwidth()}
height={innerHeight - yScale(yValueDatenstand(d))}
fill="blue"
onMouseOver={onMouseOver}
onMouseOut={onMouseOut}
/>
))}
</g>
<div ref={tooltipRef} style={{ opacity: 0, position: 'absolute' }} />
</svg>
</div>
);