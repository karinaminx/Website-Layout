import { 
    select, bisector, line, mouse
} from 'd3';
import { Graph } from './Graph';
import {xScale , yScale, width , height, margin, yValueDatenstand, xValue, yValue, yQuantileKlein, yQuantileGroß} from './Graph'


var svg = select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// This allows to find the closest X index of the mouse:
var bisect = bisector(function(d) { return d.x; }).left;

// Create the circle that travels along the curve of chart
var focus = svg
.append('g')
.append('circle')
.style("fill", "none")
.attr("stroke", "black")
.attr('r', 8.5)
.style("opacity", 0)

// Create the text that travels along the curve of chart
var focusText = svg
.append('g')
.append('text')
.style("opacity", 0)
.attr("text-anchor", "left")
.attr("alignment-baseline", "middle")

 // Create a rect on top of the svg area: this rectangle recovers mouse position
svg
.append('rect')
.style("fill", "none")
.style("pointer-events", "all")
.attr('width', width)
.attr('height', height)
.on('mouseover', mouseover)
.on('mousemove', mousemove)
.on('mouseout', mouseout);

// What happens when the mouse move -> show the annotations at the right positions.
function mouseover() {
    focus.style("opacity", 1)
    focusText.style("opacity",1)
  }

  function mousemove() {
    // recover coordinate we need
    var x0 = xScale.invert(mouse(this)[0]);
    var i = bisect(data, x0, 1);
    selectedData = data[i]
    focus
      .attr("cx", x(selectedData.x))
      .attr("cy", y(selectedData.y))
    focusText
      .html("x:" + selectedData.x + "  -  " + "y:" + selectedData.y)
      .attr("x", x(selectedData.x)+15)
      .attr("y", y(selectedData.y))
    }
  function mouseout() {
    focus.style("opacity", 0)
    focusText.style("opacity", 0)
  }


export function Tooltipp({xScale,yScale}){
    return <div> </div>
}

