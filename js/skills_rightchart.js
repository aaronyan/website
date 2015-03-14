var data_right = [87.5, 75, 75, 62.5, 62.5, 50],
	data_right_name = ['','','','','','Python','Mongo','MySQL','HTML & CSS','JavaScript','Hive'],
	data_right_colors = ['a7e6f5','a7e6f5','a7e6f5','faddaa','faddaa','a7e6f5'],
	data_skill_names = ["","Rookie","Geek","Ninja","Master"],
	data_legend = ['Back-End','Front-end'],
	data_legend_colors = ['a7e6f5','faddaa']
	margin = {top: 30, right: 25, bottom: 30, left: 25},
	width = parseInt(d3.select('#rightgraph').style('width'), 10),
	width = width - margin.left - margin.right,
	height = 450, // placeholder
	barHeight = 60,
	spacing = 3;

var widthScale = d3.scale.linear()
					.domain([0,100])
					.range([0,width]);

var axisName = d3.scale.ordinal()
				.domain(data_skill_names)
				.rangePoints([0,width]);

var xAxis = d3.svg.axis()
			.scale(axisName)
		    .tickSize(0)
		    .tickSubdivide(true);

var x2Axis = d3.svg.axis()
	.scale(widthScale)
	.tickSize(-420)
	.tickValues([25,50,75,100]);

var y = d3.scale.linear().range([380, 0]);

var yAxis = d3.svg.axis()
	.scale(y)
	.orient("left")
	.ticks(0)
	.tickSize(0);

var canvas = d3.select("#rightgraph").append("svg")
	.attr("width", (width + margin.left + margin.right) + 'px')
	.attr("height", height)
	.append("g")
	.attr("transform", 'translate(' + [margin.left, margin.top] + ')');

canvas.append('g')
    .attr('class', 'grid')
    .attr("transform", "translate(0," + 380 + ")")
    .call(x2Axis.orient('bottom'))

canvas.append('g')
    .attr('class', 'x axis top')
    .call(xAxis.orient('top'))
    .selectAll("text")
    .attr("y", -10)
    .attr("x", -10)
    .style("text-anchor", "end");

canvas.append('g')
	.attr('class', 'y axis left')
	.call(yAxis.orient('left'))
	.attr("x", 10);

canvas.append('g').append("path")
	.attr("class", "line");

var bars = canvas.append('g').selectAll("rect")
	.data(data_right)
	.enter()
		.append("rect")
		.attr("width", function(d){ return widthScale(d);})
		.attr("height", 40)
		.attr("y", function(d, i){ return i*barHeight+20;})
		.attr("x", 1)
		.attr('fill', function(d, i){ return "#"+data_right_colors[i];});

canvas.append('g').selectAll('text')
	.data(data_right_name)
	.enter()
	.append('text')
	.text(function(d) { return d; })
	.attr("x", 15)
	.attr("y", function(d, i){ return (i-5)*barHeight+46;});

var key1 = canvas.append('g').append("rect")
	.data(data_legend)
	.enter()
		.append("rect")
		.attr("width", 30)
		.attr("height", 30)
		.attr("y", 360)
		.attr("x", function(d, i){ return i*100;})
		.attr('fill', function(d, i){ return "#"+data_legend_colors[i];});


d3.select(window).on('resize', resize); 
 
function resize() {
    // update width
    width = parseInt(d3.select('#rightgraph').style('width'), 10);
    width = width - margin.left - margin.right;
 
    // resize the chart
    widthScale.range([0, width]);
    d3.select(canvas.node().parentNode)
        .style('width', (width + margin.left + margin.right) + 'px');

    canvas.selectAll('rect')
        .attr("width", function(d){ return widthScale(d);});

    axisName.rangePoints([0,width]);
    canvas.select('.x.axis.top')
    	.call(xAxis.orient('top'))
    	.selectAll("text")
        .attr("y", -10)
        .attr("x", -10)
        .style("text-anchor", "end");

    canvas.select('.grid')
    .attr("transform", "translate(0," + 380 + ")")
    .call(x2Axis.orient('bottom'))

}