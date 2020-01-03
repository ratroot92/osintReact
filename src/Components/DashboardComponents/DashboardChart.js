/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from './../../assets/js/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class DashboardChart extends Component {
render() {
const options = {
title:{
text: "Extracted & Selected of All Social"
},
height:"400",

data: [
{
type: "column",
axisY:{
labelFontSize: 10
},
axisX:{
labelFontSize: 10
},
showInLegend: true,
name: "Extracted & Selected ",
legendText: "",
color: "rgb(0, 153, 198)",
legendText: "Extracted",

dataPoints: [
{ y: 1, label: "Jan"},
{ y: 2, label: "Feb"},
{ y: 3, label: "Mar"},
{ y: 4, label: "Apr"},
{ y: 5, label: "May"},
{ y: 6, label: "Jun"},
{ y: 7, label: "Jul"},
{ y: 8, label: "Aug"},
{ y: 9, label: "Sep"},
{ y: 10, label: "Oct"},
{ y: 11, label: "Nov"},
{ y: 12, label: "Dec"},

]
},


]
}
return (
<div>
	<CanvasJSChart options = {options}
	/* onRef={ref => this.chart = ref} */
	/>
	{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
</div>
);
}

}
export default DashboardChart;