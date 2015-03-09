var data_right = [87.5, 75, 75, 62.5, 62.5, 50],
	data_right_name = ['Python','Mongo', 'MySQL', 'HTML','CSS', 'Hive'],
	data_skill_names = ["Rookie","Geek","Ninja","Master"],
	margin = {top: 30, right: 25, bottom: 30, left: 25},
	width = parseInt(d3.select('#rightgraph').style('width'), 10),
	width = width - margin.left - margin.right,
	height = 500, // placeholder
	barHeight = 20,
	spacing = 3;

var widthScale = d3.scale.linear()
					.domain([0,100])
					.range([0,width]);

var axisName = d3.scale.ordinal()
				.domain(data_skill_names)
				.rangePoints([0,width]);

var xAxis = d3.svg.axis()
			.scale(axisName)
		    .tickSize(5)
		    .tickSubdivide(true);

var canvas = d3.select("#rightgraph").append("svg")
				.attr("width", (width + margin.left + margin.right) + 'px')
				.attr("height", height)
				.append("g")
				.attr("transform", 'translate(' + [margin.left, margin.top] + ')');

canvas.append('g')
        .attr('class', 'x axis top')
        .call(xAxis.orient('top'));

var bars = canvas.selectAll("rect")
	.data(data_right)
	.enter()
		.append("rect")
		.attr("width", function(d){ return widthScale(d);})
		.attr("height", 45)
		.attr("y", function(d, i){ return i*55+10;});

// bars.append('text')
// 	.attr("x", 0)
// 	.attr("y", function(d, i){ return i*55+10;})
// 	.text(function(d, i) { return data_right_name[i]; })
// 	.attr("font-family", "sans-serif")
// 	.attr("font-size", "11px")
// 	.attr("fill", "white");





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
    canvas.select('.x.axis.top').call(xAxis.orient('top'));
}