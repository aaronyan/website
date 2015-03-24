//
// RIGHT GRAPH
//

// INITIAL VARIABLES

var data_right = [87.5, 75, 75, 62.5, 62.5, 50],
	data_right_name = ['','','','','','Python','Mongo','MySQL','HTML & CSS','JavaScript','Hive'],
	data_right_colors = ['91e0f2','91e0f2','91e0f2','f9d595','f9d595','91e0f2'],
	data_skill_names = ["","Rookie","Geek","Ninja","Master"],
	data_legend = ['','','','','','','','','','','','Back-End','Front-end'],
	data_legend_colors = ['91e0f2','f9d595']
	data_legend_x = [.08, .04]
	margin = {top: 30, right: 10, bottom: 30, left: 10},
	width = parseInt(d3.select('#right-graph').style('width'), 10),
	width = width - margin.left - margin.right,
	height = 480, // placeholder
	barHeight = 60,
	spacing = 3;

// SCALES

var widthScale = d3.scale.linear()
					.domain([0,100])
					.range([0,width]);

var axisName = d3.scale.ordinal()
				.domain(data_skill_names)
				.rangePoints([0,width]);

var y = d3.scale.linear().range([375, 0]);

// AXES

var xAxis = d3.svg.axis()
			.scale(axisName)
		    .tickSize(0)
		    .tickSubdivide(true);

var x2Axis = d3.svg.axis()
	.scale(widthScale)
	.tickSize(-420)
	.tickValues([25,50,75,100]);

var yAxis = d3.svg.axis()
	.scale(y)
	.orient("left")
	.ticks(0)
	.tickSize(0);

// CANVAS & DRAWING AXES

var canvas = d3.select("#right-graph").append("svg")
	.attr("width", (width + margin.left + margin.right) + 'px')
	.attr("height", height)
	.append("g")
	.attr("transform", 'translate(' + [margin.left, margin.top] + ')');

canvas.append('g')
    .attr('class', 'grid')
    .attr("transform", "translate(0," + 375 + ")")
    .call(x2Axis.orient('bottom'))

canvas.append('g')
    .attr('class', 'x axis top')
    .call(xAxis.orient('top'))
    .selectAll("text")
    .attr("y", -10)
    .attr("x", -10)
    .style("text-anchor", "end");

// BARS AND BAR TEXT

var bars = canvas.append('g').selectAll(".bar")
	.data(data_right)
	.enter()
		.append("rect")
		.attr("width", function(d){ return widthScale(d);})
		.attr("height", 40)
		.attr("y", function(d, i){ return i*barHeight+20;})
		.attr("x", 0)
		.attr('fill', function(d, i){ return "#"+data_right_colors[i];})
		.attr("class", "bar");

canvas.append('g').selectAll('text')
	.data(data_right_name)
	.enter()
	.append('text')
	.text(function(d) { return d; })
	.attr("x", 15)
	.attr("y", function(d, i){ return (i-5)*barHeight+46;});

canvas.append('g')
	.attr('class', 'y axis left')
	.call(yAxis.orient('left'))
	.attr("x", 10);

// LEGEND

var key1 = canvas.append('g').selectAll(".legend")
	.data(data_legend_x)
	.enter()
		.append("rect")
		.attr("width", 30)
		.attr("height", 30)
		.attr("y", 400)
		.attr("x", function(d, i){ 
			if (i == 0) {
				return widthScale(width*d-16);
			}
			if (i == 1){
				return widthScale(width*d+42);
			}
		})
		.attr('fill', function(d, i){ return "#"+data_legend_colors[i];})
		.attr("class", "legend");

canvas.append('g').selectAll('.legendtext')
	.data(data_legend)
	.enter()
	.append('text')
	.text(function(d) { return d; })
	.attr("x", function(d, i) { 
			if (i == 11 ) {
				return widthScale(width*data_legend_x[i-11]-16)+35;
			}
			if (i == 12 ) {
				return widthScale(width*data_legend_x[i-11]+42)+35;
			}
		})
	.attr("y", 420)
	.attr("class", "legendtext");


//
// LEFT GRAPH
//

// INITIAL VARIABLES

var data_left = [87.5, 87.5, 75, 62.5, 62.5, 50],
	data_left_name = ['','','','','','Linear Optimization','Excel','Machine Learning','R','Google OR-Tools','Tableau'],
	data_left_colors = ['f9b495','b1f2e3','f9b495','b1f2e3','b1f2e3','b1f2e3'],
	data_skill_names1 = ["Master","Ninja","Geek","Rookie",""],
	data_legend1 = ['','','','','','','','','','','','Math','Algorithm Dev.'],
	data_legend_colors1 = ['f9b495','b1f2e3']
	data_legend_x1 = [.08, .04]
	margin1 = {top: 30, right: 10, bottom: 30, left: 10},
	width1 = parseInt(d3.select('#left-graph').style('width'), 10),
	width1 = width1 - margin1.left - margin1.right,
	height1 = 480, // placeholder
	barHeight1 = 60,
	spacing1 = 3;

// SCALES

var widthScale1 = d3.scale.linear()
					.domain([0,100])
					.range([0,width1]);

var axisName1 = d3.scale.ordinal()
				.domain(data_skill_names1)
				.rangePoints([0,width1]);

var y1 = d3.scale.linear().range([375, 0]);

// AXES

var xAxis1 = d3.svg.axis()
			.scale(axisName1)
		    .tickSize(0)
		    .tickSubdivide(true);

var x2Axis1 = d3.svg.axis()
	.scale(widthScale1)
	.tickSize(-420)
	.tickValues([0,25,50,75]);

var yAxis1 = d3.svg.axis()
	.scale(widthScale1)
	.tickSize(-375)
	.tickValues([100]);

// canvas1 & DRAWING AXES

var canvas1 = d3.select("#left-graph").append("svg")
	.attr("width", (width1 + margin1.left + margin1.right) + 'px')
	.attr("height", height1)
	.append("g")
	.attr("transform", 'translate(' + [margin1.left, margin1.top] + ')');

canvas1.append('g')
    .attr('class', 'grid')
    .attr("transform", "translate(0," + 375 + ")")
    .call(x2Axis1.orient('bottom'))

canvas1.append('g')
    .attr('class', 'x axis top')
    .call(xAxis1.orient('top'))
    .selectAll("text")
    .attr("y", -10)
    .attr("x", 10)
    .style("text-anchor", "start");

// BARS AND BAR TEXT

var graph_bars1 = canvas1.append('g').selectAll(".graph_bars1")
	.data(data_left)
	.enter()
		.append("rect")
		.attr("width", function(d){ return widthScale1(d);})
		.attr("height", 40)
		.attr("y", function(d, i){ return i*barHeight1+20;})
		.attr("x", function(d){ return width1-widthScale1(d);})
		.attr('fill', function(d, i){ return "#"+data_left_colors[i];})
		.attr("class", "graph_bars1");

canvas1.append('g').selectAll('.barttext1')
	.data(data_left_name)
	.enter()
	.append('text')
	.text(function(d) { return d; })
	.attr("x", width1 - 15)
	.style("text-anchor", "end")
	.attr("y", function(d, i){ return (i-5)*barHeight1+46;})
	.attr("class", "barttext1");

canvas1.append('g')
    .attr('class', 'y axis bottom')
    .attr("transform", "translate(0," + 375 + ")")
    .call(yAxis1.orient('bottom'));

// LEGEND

var key1 = canvas1.append('g').selectAll(".legend1")
	.data(data_legend_x1)
	.enter()
		.append("rect")
		.attr("width", 30)
		.attr("height", 30)
		.attr("y", 400)
		.attr("x", function(d, i){ 
			if (i == 0) {
				return widthScale1(width1*d-16);
			}
			if (i == 1){
				return widthScale1(width1*d+32);
			}
		})
		.attr('fill', function(d, i){ return "#"+data_legend_colors1[i];})
		.attr("class", "legend1");

canvas1.append('g').selectAll('.legendtext1')
	.data(data_legend1)
	.enter()
	.append('text')
	.text(function(d) { return d; })
	.attr("x", function(d, i) {
		if (i == 11 ) {
			return widthScale1(width1*data_legend_x1[i-11]-16)+35;
		}
		if (i == 12 ) {
			return widthScale1(width1*data_legend_x1[i-11]+32)+35;
		}
	})
	.attr("y", 420)
	.attr("class", "legendtext1");


// RESIZE WIDTH, BARS, LEGEND, AXES, GRID

window.onresize = resize; 
 
function resize() {

	//
	// RIGHT GRAPH
	//

    // update width
    width = parseInt(d3.select('#right-graph').style('width'), 10);
    width = width - margin.left - margin.right;
 
    // resize the canvas
    widthScale.range([0, width]);
    d3.select(canvas.node().parentNode)
        .style('width', (width + margin.left + margin.right) + 'px');

    // resize the bars
    canvas.selectAll(".bar")
        .attr("width", function(d){ return widthScale(d);});

    // resize the legend
    canvas.selectAll(".legend")
        .attr("x", function(d, i){ 
        	if (i == 0) {
				return widthScale(width*d-16);
			}
			if (i == 1){
				return widthScale(width*d+42);
			}
        });

    canvas.selectAll(".legendtext")
        .attr("x", function(d, i) { 
			if (i == 11 ) {
				return widthScale(width*data_legend_x[i-11]-16)+35;
			}
			if (i == 12 ) {
				return widthScale(width*data_legend_x[i-11]+42)+35;
			}
		});

    // resize the top x axis
    axisName.rangePoints([0,width]);
    canvas.select('.x.axis.top')
    	.call(xAxis.orient('top'))
    	.selectAll("text")
        .attr("y", -10)
        .attr("x", -10)
        .style("text-anchor", "end");

    // resize the grid
    canvas.select('.grid')
    .attr("transform", "translate(0," + 375 + ")")
    .call(x2Axis.orient('bottom'))

    //
	// LEFT GRAPH
	//

    // update width
    width1 = parseInt(d3.select('#left-graph').style('width'), 10);
    width1 = width1 - margin1.left - margin1.right;
 
    // resize the canvas1
    widthScale1.range([0, width1]);
    d3.select(canvas1.node().parentNode)
        .style('width', (width1 + margin1.left + margin1.right) + 'px');

    // resize the graph_bars1
    canvas1.selectAll(".graph_bars1")
        .attr("width", function(d){ return widthScale1(d);})
        .attr("x", function(d){ return width1-widthScale1(d);})

    // resize the legend
    canvas1.selectAll(".legend1")
        .attr("x", function(d, i){ 
        	if (i == 0) {
				return widthScale1(width1*d-16);
			}
			if (i == 1){
				return widthScale1(width1*d+32);
			}
        });

    canvas1.selectAll(".legendtext1")
        .attr("x", function(d, i) {
		if (i == 11 ) {
			return widthScale1(width1*data_legend_x1[i-11]-16)+35;
		}
		if (i == 12 ) {
			return widthScale1(width1*data_legend_x1[i-11]+32)+35;
		}
	});

    // resize the top x axis
    axisName1.rangePoints([0,width1]);
    canvas1.select('.x.axis.top')
    	.call(xAxis1.orient('top'))
    	.selectAll("text")
        .attr("y", -10)
        .attr("x", 10)
        .style("text-anchor", "start");

    canvas1.select('.y.axis.bottom')
    	.attr("transform", "translate(0," + 375 + ")")
	    .call(yAxis1.orient('bottom'));

    // resize the grid
    canvas1.select('.grid')
	    .attr("transform", "translate(0," + 375 + ")")
	    .call(x2Axis1.orient('bottom'));

	canvas1.selectAll('.barttext1')
		.attr("x", width1 - 15);

}