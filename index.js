d3.select("div.chart").append("ul").data([10, 20, 30, 25, 15]).text(function (d) { return d; }).enter()
.append("li")
.text(function(d) 
   { return "This is dynamically created element and the value is " + d; });