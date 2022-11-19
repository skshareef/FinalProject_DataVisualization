var margin = {top: 10, right: 10, bottom: 10, left: 10},
  width = 1000 - margin.left - margin.right,
  height = 900 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#main")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Read data
d3.csv('temp_voilentcrime.csv', function(data) {

  // stratify the data: reformatting for d3.js
  var root = d3.stratify()
    .id(function(d) { return d.name; })   // Name of the entity (column name is name in csv)
    .parentId(function(d) { return d.parent; })(data);
  root.sum(function(d) { return +d.value })   // Compute the numeric value for each entity

  // Then d3.treemap computes the position of each element of the hierarchy
  // The coordinates are added to the root object above
  d3.treemap()
    .size([width, height])
    .padding(4)
    (root)

console.log(root.leaves())
  // use this information to add rectangles:
  var tree_dic=svg
    .selectAll("rect")
    .data(root.leaves())
    .enter()
    .append("rect")
      .attr('x', function (d) { return d.x0; })
      .attr('y', function (d) { return d.y0; })
      .attr('width', function (d) { return d.x1 - d.x0; })
      .attr('height', function (d) { return d.y1 - d.y0; })
      .style("stroke", "black")
      .style("fill", "#69b3a2");


      svg
        .selectAll("text")
        .data(root.leaves())
        .enter()
        .append("text")
          .attr("x", function(d){ return d.x0+10})    // +10 to adjust position (more right)
          .attr("y", function(d){ return d.y0+20})    // +20 to adjust position (lower)
          .text(function(d){ return d.data.name})
          .attr("font-size", "15px")
          .attr("fill", "white")

  // and to add the text labels


})



d3.select("#Burgalary_sum").on('click', function(){
  d3.selectAll('svg').remove();
  var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 1000 - margin.left - margin.right,
    height = 900 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3.select("#main")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");



  d3.csv('tempbug.csv', function(data) {

    // stratify the data: reformatting for d3.js
    var root = d3.stratify()
      .id(function(d) { return d.name; })   // Name of the entity (column name is name in csv)
      .parentId(function(d) { return d.parent; })(data);
    root.sum(function(d) { return +d.value })   // Compute the numeric value for each entity

    // Then d3.treemap computes the position of each element of the hierarchy
    // The coordinates are added to the root object above
    d3.treemap()
      .size([width, height])
      .padding(4)
      (root)

  console.log(root.leaves())
    // use this information to add rectangles:
    var tree_dic=svg
      .selectAll("rect")
      .data(root.leaves())
      .enter()
      .append("rect")
        .attr('x', function (d) { return d.x0; })
        .attr('y', function (d) { return d.y0; })
        .attr('width', function (d) { return d.x1 - d.x0; })
        .attr('height', function (d) { return d.y1 - d.y0; })
        .style("stroke", "red")
        .style("fill", "#69b3a2");

    // and to add the text labels
    svg
      .selectAll("text")
      .data(root.leaves())
      .enter()
      .append("text")
        .attr("x", function(d){ return d.x0+10})    // +10 to adjust position (more right)
        .attr("y", function(d){ return d.y0+20})    // +20 to adjust position (lower)
        .text(function(d){ return d.data.name})
        .attr("font-size", "15px")
        .attr("fill", "white")


              })

})

//#button 2

d3.select("#Rape_sum").on('click', function(){
  d3.selectAll('svg').remove();
  var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 1000 - margin.left - margin.right,
    height = 900 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3.select("#main")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


  d3.csv('temprape.csv', function(data) {

    // stratify the data: reformatting for d3.js
    var root = d3.stratify()
      .id(function(d) { return d.name; })   // Name of the entity (column name is name in csv)
      .parentId(function(d) { return d.parent; })(data);
    root.sum(function(d) { return +d.value })   // Compute the numeric value for each entity

    // Then d3.treemap computes the position of each element of the hierarchy
    // The coordinates are added to the root object above
    d3.treemap()
      .size([width, height])
      .padding(4)
      (root)

  console.log(root.leaves())
    // use this information to add rectangles:
    var tree_dic=svg
      .selectAll("rect")
      .data(root.leaves())
      .enter()
      .append("rect")
        .attr('x', function (d) { return d.x0; })
        .attr('y', function (d) { return d.y0; })
        .attr('width', function (d) { return d.x1 - d.x0; })
        .attr('height', function (d) { return d.y1 - d.y0; })
        .style("stroke", "red")
        .style("fill", "#69b3a2");

    // and to add the text labels
    svg
      .selectAll("text")
      .data(root.leaves())
      .enter()
      .append("text")
        .attr("x", function(d){ return d.x0+10})    // +10 to adjust position (more right)
        .attr("y", function(d){ return d.y0+20})    // +20 to adjust position (lower)
        .text(function(d){ return d.data.name})
        .attr("font-size", "15px")
        .attr("fill", "white")


              })

})

//button3

d3.select("#Robbery_sum").on('click', function(){
  d3.selectAll('svg').remove();
  var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 1000 - margin.left - margin.right,
    height = 900 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3.select("#main")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

  d3.csv('temp_robbery.csv', function(data) {

    // stratify the data: reformatting for d3.js
    var root = d3.stratify()
      .id(function(d) { return d.name; })   // Name of the entity (column name is name in csv)
      .parentId(function(d) { return d.parent; })(data);
    root.sum(function(d) { return +d.value })   // Compute the numeric value for each entity

    // Then d3.treemap computes the position of each element of the hierarchy
    // The coordinates are added to the root object above
    d3.treemap()
      .size([width, height])
      .padding(4)
      (root)

  console.log(root.leaves())
    // use this information to add rectangles:
    var tree_dic=svg
      .selectAll("rect")
      .data(root.leaves())
      .enter()
      .append("rect")
        .attr('x', function (d) { return d.x0; })
        .attr('y', function (d) { return d.y0; })
        .attr('width', function (d) { return d.x1 - d.x0; })
        .attr('height', function (d) { return d.y1 - d.y0; })
        .style("stroke", "red")
        .style("fill", "#69b3a2");

    // and to add the text labels
    svg
      .selectAll("text")
      .data(root.leaves())
      .enter()
      .append("text")
        .attr("x", function(d){ return d.x0+10})    // +10 to adjust position (more right)
        .attr("y", function(d){ return d.y0+20})    // +20 to adjust position (lower)
        .text(function(d){ return d.data.name})
        .attr("font-size", "15px")
        .attr("fill", "white")


              })

})

//button 4

d3.select("#Aggressive_sum").on('click', function(){
  d3.selectAll('svg').remove();
  var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 1000 - margin.left - margin.right,
    height = 900 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3.select("#main")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

  d3.csv('temp_aggresive.csv', function(data) {

    // stratify the data: reformatting for d3.js
    var root = d3.stratify()
      .id(function(d) { return d.name; })   // Name of the entity (column name is name in csv)
      .parentId(function(d) { return d.parent; })(data);
    root.sum(function(d) { return +d.value })   // Compute the numeric value for each entity

    // Then d3.treemap computes the position of each element of the hierarchy
    // The coordinates are added to the root object above
    d3.treemap()
      .size([width, height])
      .padding(4)
      (root)

  console.log(root.leaves())
    // use this information to add rectangles:
    var tree_dic=svg
      .selectAll("rect")
      .data(root.leaves())
      .enter()
      .append("rect")
        .attr('x', function (d) { return d.x0; })
        .attr('y', function (d) { return d.y0; })
        .attr('width', function (d) { return d.x1 - d.x0; })
        .attr('height', function (d) { return d.y1 - d.y0; })
        .style("stroke", "red")
        .style("fill", "#69b3a2");

    // and to add the text labels
    svg
      .selectAll("text")
      .data(root.leaves())
      .enter()
      .append("text")
        .attr("x", function(d){ return d.x0+10})    // +10 to adjust position (more right)
        .attr("y", function(d){ return d.y0+20})    // +20 to adjust position (lower)
        .text(function(d){ return d.data.name})
        .attr("font-size", "15px")
        .attr("fill", "white")


              })

})

//button 5
d3.select("#Violentcrime_sum").on('click', function(){
  d3.selectAll('svg').remove();
  var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 1000 - margin.left - margin.right,
    height = 900 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3.select("#main")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

  d3.csv('temp_voilentcrime.csv', function(data) {

    // stratify the data: reformatting for d3.js
    var root = d3.stratify()
      .id(function(d) { return d.name; })   // Name of the entity (column name is name in csv)
      .parentId(function(d) { return d.parent; })(data);
    root.sum(function(d) { return +d.value })   // Compute the numeric value for each entity

    // Then d3.treemap computes the position of each element of the hierarchy
    // The coordinates are added to the root object above
    d3.treemap()
      .size([width, height])
      .padding(4)
      (root)

  console.log(root.leaves())
    // use this information to add rectangles:
    var tree_dic=svg
      .selectAll("rect")
      .data(root.leaves())
      .enter()
      .append("rect")
        .attr('x', function (d) { return d.x0; })
        .attr('y', function (d) { return d.y0; })
        .attr('width', function (d) { return d.x1 - d.x0; })
        .attr('height', function (d) { return d.y1 - d.y0; })
        .style("stroke", "red")
        .style("fill", "#69b3a2");

    // and to add the text labels
    svg
      .selectAll("text")
      .data(root.leaves())
      .enter()
      .append("text")
        .attr("x", function(d){ return d.x0+10})    // +10 to adjust position (more right)
        .attr("y", function(d){ return d.y0+20})    // +20 to adjust position (lower)
        .text(function(d){ return d.data.name})
        .attr("font-size", "15px")
        .attr("fill", "white")

        
              })

})
