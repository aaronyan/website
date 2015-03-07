var data_left = [87.5, 75, 75, 62.5, 62.5, 50],
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
				.domain(["Rookie","Geek","Ninja","Master"])
				.rangePoints([0,width]);

var axis = d3.svg.axis()
			.scale(axisName);

var canvas = d3.select("#rightgraph").append("svg")
				.attr("width", (width + margin.left + margin.right) + 'px')
				.attr("height", height)
				.append("g")
				.attr("transform", 'translate(' + [margin.left, margin.top] + ')');

canvas.append('g')
        .attr('class', 'x axis top')
        .call(axis.orient('top'));

var bars = canvas.selectAll("rect")
	.data(data_left)
	.enter()
		.append("rect")
		.attr("width", function(d){return widthScale(d);})
		.attr("height", 45)
		.attr("y", function(d, i){return i*60+15});

bars.append('rect')
	.attr('class', 'background')
	.attr("height", 45)
	.attr('width', width);

bars.append('rect')
	.attr('class', 'val')
	.attr("height", 45)
	.attr('width', function(d){return widthScale(d);});

d3.select(window).on('resize', resize); 
 
function resize() {
    // update width
    width = parseInt(d3.select('#rightgraph').style('width'), 10);
    width = width - margin.left - margin.right;
 
    // resize the chart
    widthScale.range([0, width]);
    d3.select(canvas.node().parentNode)
        .style('width', (width + margin.left + margin.right) + 'px');
 
    chart.selectAll('rect.background')
    	.attr('width', width)

    chart.selectAll('rect.val')
        .attr('width', function(d){return widthScale(d);});
}