var margin2 = {top: 20, right: 20, bottom: 30, left: 50},
    width = 1920 - margin.left - margin.right,
    height = 130 - margin.top - margin.bottom;
var svg2 = d3.select("#Project")
.attr("width", width + margin2.left + margin2.right)
.attr("height", height + margin2.top + margin2.bottom)
;

var map_tooltip5 = d3.select("body")
.append("div")

.style("opacity", 1)
.style("position", "absolute")

var m_leave5 = function (d) {
    map_tooltip5
      .style("opacity", 0)
      
    
  }
var m_enter5 = function (d) {
    map_tooltip5.style("opacity", 1)

    
  }
var mousemove5 = function (d) {
    map_tooltip5.style("opacity", 1)
    
  
map_tooltip5

.html("<div style='text-align: center;color:white; padding: 7px 7px 7px 7px;'>" + 
"<div style='margin-down: 0.25em;font-weight: bold;'>"

 + "<div style='margin-down: 0.25em;'>ClassFinder Pro is an cross platform application which helps ASU students monitor their designated courses.</div>" 

 + "<div style='margin-down: 0.25em;'>Responsibilities: </div> "

 + "<ul><li>Developing front-end for both WebApp(React) and iOS(swift)</li>"+
 "<li>Implement backend API by Django framework and use the webpack_loader plugin to achieve integration of front-end and back-end</li>"
 +"<li>Develop Scrapy crawlers for real-time monitoring of course seating information</li>"
 +"<li>Develop Selenium scripts to automate the course selection</li> <li>Deploy Django Application onto Apache server</li></ul> "
 
 + "<div style='margin-down: 0.25em;'>May 2019 – August 2019</div> "
 +"</div>" +"</div>"
 )
      .style("background-color", "rgba(0, 0, 0, 0.6)")

      .style("left", (d3.mouse(this)[0] + 800) + "px")
      .style("top", (d3.mouse(this)[1]) +850 + "px")
    d3.select(this)

  }


svg2.append("image")
.attr("xlink:href", "/resume/data/classfinder.png")
.attr("x", "40")
.attr("y", "10")
.attr("width", "100")
.attr("id","Classfinder")
.attr("height", "100")

.on("mouseover", m_enter5)
.on("mousemove", mousemove5)
.on("mouseleave", m_leave5)
;

svg2.append("text").attr("x", "160")
.attr("y", "40")
.attr("width", "100")
.attr("id","Classfinder2")
.attr("height", "100")

.attr("fill","gray")
.text("ClassFinder is an cross platform application which helps ASU students monitor their designated courses.");

svg2.append("text").attr("x", "160")
.attr("y", "70")
.attr("width", "100")
.attr("id","Classfinder2")
.attr("height", "100")

.attr("fill","gray")
.text("https://apps.apple.com/us/app/classfinder-pro/id1464301208");



svg2.append("text").attr("x", "51")
.attr("y", "130")
.attr("width", "100")
.attr("id","Classfinder2")
.attr("height", "100")
.attr("font-weight","bold")
.attr("fill","gray")
.text("Classfinder");
