var data = fetch('data.json')
  .then(function(response) {
    return response.json();
  }).then((data) => {
    var width = 300,
        height = 300,
        // Think back to 5th grade. Radius is 1/2 of the diameter. What is the limiting factor on the diameter? Width or height, whichever is smaller
        radius = Math.min(width, height) / 2;
      var color = d3.scaleOrdinal()
        .range(["#2C93E8","#838690","#F56C4E"]);
      var pie = d3.pie()
        .value(function(d) { return d.value; })(data.types);
      var arc = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

      var labelArc = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);
      var svg = d3.select("#overall")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
          .append("g")
          .attr("transform", "translate(" + width/2 + "," + height/2 +")"); // Moving the center point. 1/2 the width and 1/2 the height
          
      var g = svg.selectAll("#overall arc")
          .data(pie)
          .enter().append("g")
          .attr("class", "arc");

      g.append("path")
          .attr("d", arc)
          .style("fill", function(d) { 
            return color(d.data.label);
          });
      g.append("text")
          .attr("transform", function(d) { 
            let coord = labelArc.centroid(d);
            if (coord[0] < 0) {
              coord[0] += 10;
            } else {
              coord[0] -= 10;
            }
            if (coord[1] < 0) {
              coord[1] += 10;
            } else {
              coord[1] -= 10;
            }

            return "translate(" + coord + ")"; 
          })
          .text(function(d) { return d.data.label;})
          .style("fill", "#fff");

        var pie2 = d3.pie()
          .value(function(d) { return d.value; })(data.europe);
        var arc2 = d3.arc()
          .outerRadius(radius - 10)
          .innerRadius(0);
  
        var labelArc2 = d3.arc()
          .outerRadius(radius - 40)
          .innerRadius(radius - 40);
        var svg2 = d3.select("#european")
          .append("svg")
          .attr("width", width)
          .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width/2 + "," + height/2 +")"); // Moving the center point. 1/2 the width and 1/2 the height
            
        var g2 = svg2.selectAll("#european arc")
            .data(pie2)
            .enter().append("g")
            .attr("class", "arc");
        console.log(g, g2);
  
       g2.append("path")
            .attr("d", arc2)
            .style("fill", function(d) { 
              return color(d.data.label);
            });
        g2.append("text")
            .attr("transform", function(d) { 
              let coord = labelArc.centroid(d);
              if (coord[0] < 0) {
                coord[0] += 10;
              } else {
                coord[0] -= 40;
              }
              if (coord[1] < 0) {
                coord[1] += 10;
              } else {
                coord[1] -= 10;
              }
  
              return "translate(" + coord + ")"; 
            })
            .text(function(d) { return d.data.label;})
            .style("fill", "#fff");
  });