var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 1920 - margin.left - margin.right,
    height = 200 - margin.top - margin.bottom;
var offset = 0
var year = [2014,2015,2016,2017,2018,2019,2020]
// parse the date / time
var map_tooltip = d3.select("body")
.append("div")

.style("opacity", 1)
.style("position", "absolute")



.style('stroke', 'purple')
var m_leave = function (d) {
    map_tooltip
      .style("opacity", 0)
      d3.select("#BS").transition().duration(500)
      .attr("xlink:href", "/data/ASU.png")
      .attr("x", "52")
      .attr("y", "12")
      .attr("width", "100")
      .attr("height", "100")

    
  }
var m_enter = function (d) {
    map_tooltip.style("opacity", 1)

    d3.select("#BS").transition().duration(500)
    .style("opacity", 0.0) 
    .transition().duration(500)
    .style("opacity", 1.0) 

    .attr("xlink:href", "/resume/data/bs.png")
    .attr("width", "55")
    .attr("height", "55")
    .attr("x", "74")
    .attr("y", "34")
  }
var mousemove = function (d) {
    d3.select("#BS").transition().duration(500)
    .style("opacity", 0.0) 
    .transition().duration(500)
    .style("opacity", 1.0) 

    .attr("xlink:href", "/resume/data/bs.png")
    .attr("width", "55")
    .attr("height", "55")
    .attr("x", "74")
    .attr("y", "34")
  
map_tooltip

      .html("<div style='text-align: center;color:white; padding: 7px 7px 7px 7px;'>" + 
      "<div style='margin-down: 0.25em;font-weight: bold;'>"
     
       + "<div style='margin-down: 0.25em;'>Arizona State University</div>" 
       + "<div style='margin-down: 0.25em;'>Computer Science</div> " 
       + "<div style='margin-down: 0.25em;'>GPA: 3.53/4</div> "
      
       + "<div style='margin-down: 0.25em;'>2014-2018</div> "
       +"</div>" +"</div>"
       )
      .style("background-color", "rgba(0, 0, 0, 0.6)")

      .style("left", (d3.mouse(this)[0] + 500) + "px")
      .style("top", (d3.mouse(this)[1]) +150 + "px")
    d3.select(this)

  }
  var map_tooltip2 = d3.select("body")
  .append("div")
  
  .style("opacity", 1)
  .style("position", "absolute")
  
  
  
  .style('stroke', 'purple')
  var m_leave2 = function (d) {
    map_tooltip2
      .style("opacity", 0)

      d3.select("#MS").transition().duration(500)
      .attr("xlink:href", "/resume/data/ASU.png")
      .attr("x", "52")
      .attr("y", "175")
      .attr("width", "100")
      .attr("height", "100")

      
  }
var m_enter2 = function (d) {
    map_tooltip2.style("opacity", 1)
    d3.select("#MS").transition().duration(500)
    .style("opacity", 0.0) 
    .transition().duration(500)
    .style("opacity", 1.0) 

    .attr("xlink:href", "/resume/data/ms.png")
    .attr("width", "55")
    .attr("height", "55")
    .attr("x", "74")
    .attr("y", "200")
  }
var mousemove2 = function (d) {
  
map_tooltip2

      .html("<div style='text-align: center;color:white; padding: 7px 7px 7px 7px;'>" + 
      "<div style='margin-down: 0.25em;font-weight: bold;'>"
     
       + "<div style='margin-down: 0.25em;'>Arizona State University</div>" 
       + "<div style='margin-down: 0.25em;'>Computer Science</div> " 
       + "<div style='margin-down: 0.25em;'>GPA: 3.56/4</div> "
      
       + "<div style='margin-down: 0.25em;'>2018-2020</div> "
       +"</div>" +"</div>"
       )
      .style("background-color", "rgba(0, 0, 0, 0.6)")

      .style("left", (d3.mouse(this)[0] + 450) + "px")
      .style("top", (d3.mouse(this)[1]) +150 + "px")
    d3.select(this)

  }

d3.csv("data/year.csv", function(error, data) {
   


var svg = d3.select("#timeline")
    .attr("width", width + margin.left + margin.right)
    .attr("height", 300)
 ;
var g1 = svg.append("g")
var g2 = svg.append("g")

g1.on("mouseover", m_enter)
.on("mousemove", mousemove)
.on("mouseleave", m_leave)
  .append("path")
  .attr("transform", "translate(100,60)")
  .attr("d", d3.arc()
    .innerRadius( 50 )
    .outerRadius( 60 )
    .startAngle( 3.14 )     // It's in radian, so Pi = 3.14 = bottom.
    .endAngle( 12.56 )       // 2*Pi = 6.28 = top
    )
    .attr("stroke-opacity", 0)
  .attr('fill', '#dcf0ef ')
 
  ;

  g1
  .append("path")
  
  .attr('fill', '#dcf0ef ')
  .attr("transform", "translate(100,60)")
.transition().duration(2000)

    .attr("d", d3.arc()
    .innerRadius( 50 )
    .outerRadius( 60 )
    .startAngle( 3.14 )     // It's in radian, so Pi = 3.14 = bottom.
    .endAngle( 9 )       // 2*Pi = 6.28 = top
    )
    .attr("stroke-opacity", 0)
  .attr('fill', '#994c00')

 
  ;


  g1.append("image")
  .attr("id","BS")
  .attr("xlink:href", "/resume/data/ASU.png")
  .attr("x", "52")
  .attr("y", "12")
  .attr("width", "100")
  .attr("height", "100")
 
 
  ;

  g1.append("text")
  
  .attr("x", "200")
  .attr("y", "60")
  .attr("font-family","sans-serif")
  .attr("font-size","20px")
  .attr("dy", ".35em")
  .style("opacity", 0.0)
  .transition()           // apply a transition
    .duration(2000)  
    .style("opacity", 1.0) 
  .text("Bachelor's Degree")
  .attr("fill","gray")
  .attr("font-weight","bold")

  ;
  


  g2.on("mouseover", m_enter2)
  .on("mousemove", mousemove2)
  .on("mouseleave", m_leave2)
  .append("path")
  .attr("transform", "translate(100,220)")
  .attr("d", d3.arc()
    .innerRadius( 50 )
    .outerRadius( 60 )
    .startAngle( 3.14 )     // It's in radian, so Pi = 3.14 = bottom.
    .endAngle( 12.56)       // 2*Pi = 6.28 = top
    )
    .attr("stroke-opacity", 0)
  .attr('fill', '#dcf0ef ')
 
  ;
  g2
  .append("path")
 
  .attr("transform", "translate(100,220)")
  .attr('fill', '#dcf0ef ')
  .transition()
  .duration(2000)
  .attr("d", d3.arc()
    .innerRadius( 50 )
    .outerRadius( 60 )
    .startAngle( 3.14 )     // It's in radian, so Pi = 3.14 = bottom.
    .endAngle( 9.1 )       // 2*Pi = 6.28 = top
    )
    .attr("stroke-opacity", 0)
  .attr('fill', '#994c00')
 
  ;

  g2.append("image")
  .attr("xlink:href", "/resume/data/ASU.png")
  .attr("id","MS")
  .attr("x", "52")
  .attr("y", "172")
  .attr("width", "100")
  .attr("height", "100")

  ;

  g2.append("text")

  .attr("x", "200")
  .attr("y", "220")
  .attr("font-family","sans-serif")
  .attr("font-size","20px")
  .attr("dy", ".35em")
  .style("opacity", 0.0)
  .transition()           // apply a transition
    .duration(2000)  
    .style("opacity", 1.0) 
  .text("Master's Degree")
  .attr("fill","gray")
  .attr("font-weight","bold")


  ;
  



})