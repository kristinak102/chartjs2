$(document).ready(function () {

	var ctx = $("#bar-chartcanvas");

	var data = {
		labels : ["Jan", "Feb", "Mar", "Apr", "May"],
		datasets : [
			{
				label : "Jan",
				data : [25],
				backgroundColor : [
					"red",
					"green",
					"blue",
					"purple",
					"magenta"
				],
				borderColor : [
					"#111",
					"#111",
					"#111",
					"#111",
					"#111"
				],
				borderWidth : 1
			},
			{
				label : "Feb",
				data : [25, 25],
				backgroundColor : [
					"aqua",
					"salmon",
					"darkgray",
					"pink",
					"coral"
				],
				borderColor : [
					"#111",
					"#111",
					"#111",
					"#111",
					"#111"
				],
				borderWidth : 1
			}
		]
	};

	var options = {
		title : {
			display : true,
			position : "top",
			text : "Multicolor Bar Graph",
			fontSize : 18,
			fontColor : "#111"
		},
		legend : {
			display : false
		},
		scales : {
			yAxes : [{
				ticks : {
					min : 0
				}
			}]
		}
	};

	var chart = new Chart( ctx, {
		type : "bar",
		data : data,
		options : options
	});

});
