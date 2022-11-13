d3.csv("sumyear.csv").then(

function(data)
{

  console.log(data);

  var dimensions = {
            width: 1200,
            height: 900,
            margin:{
                top: 20,
                bottom: 21,
                right: 10,
                left: 60
            }
        }

  // append the SVG object to the body of the page
  var SVG = d3.select("#main")
    .append("svg")
      .attr("width", dimensions.width + dimensions.margin.left + dimensions.margin.right)
      .attr("height", dimensions.height + dimensions.margin.top + dimensions.margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + dimensions.margin.left + "," + dimensions.margin.top + ")");

            dimensions.boundedWidth = dimensions.width - dimensions.margin.right - dimensions.margin.left
           dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom





            var x = d3.scaleBand()
              .domain(data.map(function(d){return d.year;}))
              .range([ 0, dimensions.boundedWidth ]);



            var xAxis = SVG.append("g")
              .attr("transform", "translate(0," + (dimensions.boundedHeight+dimensions.margin.bottom) + ")")
              .call(d3.axisBottom(x));

            // Add Y axis
            var y = d3.scaleLinear()
              .domain([0, 700000])
              .range([ dimensions.boundedHeight, 0]);
            var yAxis = d3.axisLeft(y)


            var changing_axis = SVG.append("g")
              .attr("transform", "translate(-10,"+ dimensions.margin.top +")")
              .call(yAxis)


                  var dots=  SVG.append("g")
                        .selectAll("circle")
                            .data(data)
                              .enter()
                                .append("circle")
                                .attr("cx", function (d) { return x(d.year); } )
                                .attr("cy", function (d) { return y(d.Aggressive_sum); } )
                                .attr("r", 8)
                                .style("fill", "#61a3a9")
                                .style("opacity", 1.5)


//Button 1
  d3.select("#Burgalary_sum").on('click', function(){
                     nameSelected = "Burgalary_sum"
                      var clip = SVG.append("defs").append("SVG:clipPath")
                         .attr("id", "clip")
                         .append("SVG:rect")
                         .attr("width", dimensions.width )
                         .attr("height", dimensions.height )
                         .attr("x", 0)
                         .attr("y", 0);

                     // Create the scatter variable: where both the circles and the brush take place
                     var scatter = SVG.append('g')
                       .attr("clip-path", "url(#clip)")

                      var max = d3.max(data, function(d) { return d.Burgalary_sum; });
                      console.log(max);

                      var y = d3.scaleLinear()
                        .domain([0, 13000])
                        .range([ dimensions.boundedHeight, 0]);

                  var yAxis = d3.axisLeft(y)

                  changing_axis.transition()
                  .call(yAxis)

                  dots.transition()
                      .attr("cx", function (d) { return x(d.year); } )
                      .attr("cy", function (d) { return y(d[nameSelected]); } )
                      .attr("r", 8)
                      .style("fill", "#61a3a9")
                      .style("opacity", 1.5)
})

//button 1 end

//button 2

d3.select("#Rape_sum").on('click', function(){
                   nameSelected = "Rape_sum"
                    var clip = SVG.append("defs").append("SVG:clipPath")
                       .attr("id", "clip")
                       .append("SVG:rect")
                       .attr("width", dimensions.width )
                       .attr("height", dimensions.height )
                       .attr("x", 0)
                       .attr("y", 0);

                   // Create the scatter variable: where both the circles and the brush take place
                   var scatter = SVG.append('g')
                     .attr("clip-path", "url(#clip)")

                    var max = d3.max(data, function(d) { return d.Burgalary_sum; });
                    console.log(max);

                    var y = d3.scaleLinear()
                      .domain([0, 37000])
                      .range([ dimensions.boundedHeight, 0]);

                var yAxis = d3.axisLeft(y)

                changing_axis.transition()
                .call(yAxis)

                dots.transition()
                    .attr("cx", function (d) { return x(d.year); } )
                    .attr("cy", function (d) { return y(d[nameSelected]); } )
                    .attr("r", 8)
                    .style("fill", "#009688 ")
                    .style("opacity", 1.5)
})

//button 2 end

//button 3

d3.select("#Robbery_sum").on('click', function(){
                   nameSelected = "Robbery_sum"
                    var clip = SVG.append("defs").append("SVG:clipPath")
                       .attr("id", "clip")
                       .append("SVG:rect")
                       .attr("width", dimensions.width )
                       .attr("height", dimensions.height )
                       .attr("x", 0)
                       .attr("y", 0);

                   // Create the scatter variable: where both the circles and the brush take place
                   var scatter = SVG.append('g')
                     .attr("clip-path", "url(#clip)")

                    var max = d3.max(data, function(d) { return d.Burgalary_sum; });
                    console.log(max);

                    var y = d3.scaleLinear()
                      .domain([0, 430000])
                      .range([ dimensions.boundedHeight, 0]);

                var yAxis = d3.axisLeft(y)

                changing_axis.transition()
                .call(yAxis)

                dots.transition()
                    .attr("cx", function (d) { return x(d.year); } )
                    .attr("cy", function (d) { return y(d[nameSelected]); } )
                    .attr("r", 8)
                    .style("fill", "#2a4d69")
                    .style("opacity", 1.5)
})

//button 3 end


//button 4

d3.select("#Aggressive_sum").on('click', function(){
                   nameSelected = "Aggressive_sum"
                    var clip = SVG.append("defs").append("SVG:clipPath")
                       .attr("id", "clip")
                       .append("SVG:rect")
                       .attr("width", dimensions.width )
                       .attr("height", dimensions.height )
                       .attr("x", 0)
                       .attr("y", 0);

                   // Create the scatter variable: where both the circles and the brush take place
                   var scatter = SVG.append('g')
                     .attr("clip-path", "url(#clip)")

                    var max = d3.max(data, function(d) { return d.Burgalary_sum; });
                    console.log(max);

                    var y = d3.scaleLinear()
                      .domain([0, 440000])
                      .range([ dimensions.boundedHeight, 0]);

                var yAxis = d3.axisLeft(y)

                changing_axis.transition()
                .call(yAxis)

                dots.transition()
                    .attr("cx", function (d) { return x(d.year); } )
                    .attr("cy", function (d) { return y(d[nameSelected]); } )
                    .attr("r", 8)
                    .style("fill", "#251e3e")
                    .style("opacity", 1.5)
})

//button 4 end


//button 5

d3.select("#Violentcrime_sum").on('click', function(){
                   nameSelected = "Violentcrime_sum"
                    var clip = SVG.append("defs").append("SVG:clipPath")
                       .attr("id", "clip")
                       .append("SVG:rect")
                       .attr("width", dimensions.width )
                       .attr("height", dimensions.height )
                       .attr("x", 0)
                       .attr("y", 0);

                   // Create the scatter variable: where both the circles and the brush take place
                   var scatter = SVG.append('g')
                     .attr("clip-path", "url(#clip)")

                    var max = d3.max(data, function(d) { return d.Burgalary_sum; });
                    console.log(max);

                    var y = d3.scaleLinear()
                      .domain([0, 950000])
                      .range([ dimensions.boundedHeight, 0]);

                var yAxis = d3.axisLeft(y)

                changing_axis.transition()
                .call(yAxis)

                dots.transition()
                    .attr("cx", function (d) { return x(d.year); } )
                    .attr("cy", function (d) { return y(d[nameSelected]); } )
                    .attr("r", 8)
                    .style("fill", "#3B3486")
                    .style("opacity", 1.5)
})

//button 5 end
























}


)
