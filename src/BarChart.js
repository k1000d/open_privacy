import React, {Component} from 'react';
import * as d3 from "d3";


class BarChart extends Component {
    componentDidMount() {
      this.drawChart();
    }
      
    drawChart() {
        const h = 300;
     
      const w  = 300
      const data = [12, 5, 6, 6, 9, 10];
      
      const svg = d3.select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("margin-left", 100);
                    
    


      svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => h - 10 * d)
        .attr("width", 65)
        .attr("height", (d, i) => d * 10)
        .attr("fill", "yellow")
        
       
        const width = svg.attr('width');
        const height = svg.attr('height');
        const centerX = width / 2;
        const centerY = height / 2;
        const numPoints = 5;
        const radius = height / 5;
        
        const points = d3.range(numPoints)
          .map(i => {
            const angle = i / numPoints * Math.PI * 2 + Math.PI;
            return {
              x: Math.sin(angle) * radius + centerX,
              y: Math.cos(angle) * radius + centerY
            };
          });
        
        const spokes = points.map(point => ({
          x1: centerX,
          y1: centerY,
          x2: point.x,
          y2: point.y
        }));
        
        const wheelLines = d3.range(numPoints).map(i => ({
          x1: points[i].x,
          y1: points[i].y,
          x2: points[(i + 1) % numPoints].x,
          y2: points[(i + 1) % numPoints].y
        }));
        
        const lines = spokes.concat(wheelLines);
        
        svg.selectAll('line').data(lines)
          .enter().append('line')
            .attr('x1', d => d.x1)
            .attr('y1', d => d.y1)
            .attr('x2', d => d.x2)
            .attr('y2', d => d.y2)
            .attr('stroke', 'yellow')
            .attr('stroke-width', 5)

           
            
          
            
    }
          
    render(){
      return (<div id={"#" + this.props.id} >

      </div>
    )
    }
  }
      
  export default BarChart;