var margin = {top: 20, right: 20, bottom: 30, left: 50},
width = 1920 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

var year = [2014,2015,2016,2017,2018,2019,2020]
// parse the date / time
var map_tooltip2 = d3.select("body")
.append("div")
var map_tooltip3 = d3.select("body")
.append("div")

.style("opacity", 1)
.style("position", "absolute")
d3.csv("data/year.csv", function(error, data) {
    var m_leave3 = function (d) {
        map_tooltip2
          .style("opacity", 0)
         
    
        
      }
    var m_enter3 = function (d) {
        map_tooltip2.style("opacity", 1)
    
        
       
        .style("opacity", 1.0) 
    
      }
    var mousemove3 = function (d) {
     
        map_tooltip2.style("opacity", 1.0) 
    
      
    map_tooltip2
    
          .html("<div style='text-align: center;color:white; padding: 7px 7px 7px 7px;'>" + 
          "<div style='margin-down: 0.25em;font-weight: bold;'>"
         
           + "<div style='margin-down: 0.25em;'>Web Developer internship</div>" 
           + "<div style='margin-down: 0.25em;'>Excenergy Energy-Saving Technology, Hangzhou, China</div> " 
           + "<div style='margin-down: 0.25em;'>Responsibilities: </div> "
          
           + "<ul><li>Responsible for developing front-end web page for Heating Energy Saving Project</li>"+
           "<li>Knowledge of Spring MVC Framwork and SVN</li></ul> "
           + "<div style='margin-down: 0.25em;'>May 2017 – July 2017</div> "
           +"</div>" +"</div>"
           )
          .style("background-color", "rgba(0, 0, 0, 0.6)")
    
          .style("left", (d3.mouse(this)[0] + 700) + "px")
          .style("top", (d3.mouse(this)[1]) +800 + "px")
        d3.select(this)
    
      }




      var m_leave4 = function (d) {
        map_tooltip3
          .style("opacity", 0)
         
    
        
      }
    var m_enter4 = function (d) {
        console.log("hello")
        map_tooltip3.style("opacity", 1)
    
        
       
        .style("opacity", 1.0) 
    
      }
    var mousemove4 = function (d) {
     
        map_tooltip3.style("opacity", 1.0) 
    
      
    map_tooltip3
    
          .html("<div style='text-align: center;color:white; padding: 7px 7px 7px 7px;'>" + 
          "<div style='margin-down: 0.25em;font-weight: bold;'>"
         
           + "<div style='margin-down: 0.25em;'>Web Operations Engineer Intern</div>" 
           + "<div style='margin-down: 0.25em;'>Hangzhou Dt Dream Technology, Hangzhou, China</div> " 
           + "<div style='margin-down: 0.25em;'>Responsibilities: </div> "
          
           + "<ul><li>Working with Dt Innovation Team and help them maintain existing projects.</li>"+
           "<li>Deploying Zhejiang GovCloud Project, responsible for environment set up and implementation, daily site maintenance and"+
           " issue resolution</li><li>Knowledge of Kubernetes, bash, mysql</li></ul> "
           
           + "<div style='margin-down: 0.25em;'>May 2019 – August 2019</div> "
           +"</div>" +"</div>"
           )
          .style("background-color", "rgba(0, 0, 0, 0.6)")
    
          .style("left", (d3.mouse(this)[0] + 700) + "px")
          .style("top", (d3.mouse(this)[1]) +700 + "px")
        d3.select(this)
    
      }





var svg3 = d3.select("#experience")
.attr("width", width + margin.left + margin.right)
.attr("height", 400)
;

   svg3.append("line")          // attach a line
    .style("stroke", "gray")  // colour the line
    .attr("x1", 60)     // x position of the first end of the line
    .attr("y1", 0)      // y position of the first end of the line
    .attr("x2", 60)     // x position of the second end of the line
    .attr("y2", 20)
    .attr("stroke-width", "4px" ).transition()           // apply a transition
    .duration(2000)   
    .attr("y2", 370) 


    svg3.append("text")
  .attr("x", "85")  
  .attr("y", "100")
  .attr("font-family","sans-serif")
  
  .attr("dy", ".35em")
  .text("")
  .style("opacity", 0.0)
  .on("mouseover", m_enter3)
    .on("mousemove", mousemove3)
    .on("mouseleave", m_leave3)
  .transition()           // apply a transition
    .duration(2000)  
    .style("opacity", 1.0) 
    .attr("font-size","17px")
    .attr("fill","gray")
    
  .text("2017 May");
    svg3.append("line")          // attach a line
    .style("stroke", "gray")  // colour the line
    .attr("x1", 60)     // x position of the first end of the line
    .attr("y1", 120)      // y position of the first end of the line
    .attr("x2", 60)     // x position of the second end of the line
    .attr("y2", 120)
    .attr("stroke-width", "4px" )
    .on("mouseover", m_enter3)
    .on("mousemove", mousemove3)
    .on("mouseleave", m_leave3)
    .transition()           // apply a transition
    .duration(2000)   
    .attr("x2", 190) 


    svg3.append("text")
    .attr("x", "85")
    .attr("y", "230")
    .attr("font-family","sans-serif")
    
    .attr("dy", ".35em")
    .text("")
    .style("opacity", 0.0)
    .on("mouseover", m_enter4)
    .on("mousemove", mousemove4)
    .on("mouseleave", m_leave4)
    .transition()           // apply a transition
      .duration(2000)  
      .style("opacity", 1.0) 
    .attr("font-size","17px")
    .attr("fill","gray")
    .text("2019 May");

    svg3.append("image")
    .attr("x", 205)
    .attr("y", 200)
    .attr("width", "100")
    .attr("height", "100")
    .attr("xlink:href", "/data/dtdream.png")
    .attr("id","dtDream")
    .on("mouseover", m_enter4)
    .on("mousemove", mousemove4)
    .on("mouseleave", m_leave4)
    

    svg3.append("line")          // attach a line
    .style("stroke", "gray")  // colour the line
    .attr("x1", 60)     // x position of the first end of the line
    .attr("y1", 250)      // y position of the first end of the line
    .attr("x2", 60)     // x position of the second end of the line
    .attr("y2", 250)
    .attr("stroke-width", "4px" )
    .attr("id","dtDream")
    .on("mouseover", m_enter4)
    .on("mousemove", mousemove4)
    .on("mouseleave", m_leave4)
    .transition()           // apply a transition
    .duration(2000)   
    .attr("x2", 190) 

    svg3.append("image")
    .attr("x", 205)
    .attr("y", 70)
    .attr("width", "100")
    .attr("height", "100")
    .attr("xlink:href", "/data/zyh.png")
    .attr("id","zyh")
    .on("mouseover", m_enter3)
  .on("mousemove", mousemove3)
  .on("mouseleave", m_leave3)
    
    




})