/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '../../../assets/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class BarChart_Extracted_Selected_Websites extends Component {
	render() {
		const options = {
      title:{
        text: "Extracted & Selected of All Websites"
      },
      height:"400",
      data: [
      {
			type: "column",
			showInLegend: true, 
			name: "series1",
			legendText: "Extracted",
        dataPoints: [
        { y: 198, label: "Social"},
        { y: 201, label: "Search"},
        { y: 202, label: "News"},
        { y: 236, label: "Blog"},
        { y: 395, label: "Image"},
        { y: 957, label: "Video"},
        { y: 957, label: "Page"}
        ]
      },
      {
			type: "column",
			showInLegend: true, 
			name: "series1",
			legendText: "Selected",
        dataPoints: [
        { y: 166, label: "Social"},
        { y: 144, label: "Search"},
        { y: 223, label: "News"},
        { y: 272, label: "Blog"},
        { y: 319, label: "Image"},
        { y: 759, label: "Video"},
        { y: 759, label: "Page"}
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
export default BarChart_Extracted_Selected_Websites;                   