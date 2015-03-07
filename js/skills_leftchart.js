var canvas = d3.select("body")
	.append("svg")
	.attr("width", 500)
	.attr("height", 500);

var data_left = [87.5, 87.5, 75, 62.5, 62.5, 50];

var bars = canvas.selectAll("rect")
	.data(data_left)
	.enter()
		.append("rect")
		.attr("width", function(d){return d;})
		.attr("height", 50)
		.attr("y", function(d, i){return i*100})