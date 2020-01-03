/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '../../../assets/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class BarChart_Extracted_Selected_Social extends Component {
	render() {
		const options = {
      title:{
        text: "Extracted & Selected of All Social"
      },
      height:"400",

      data: [
      {
			type: "column",
			showInLegend: true, 
			name: "Extracted",
       legendText: "",
        color: "rgb(0, 153, 198)",
			legendText: "Extracted",
        dataPoints: [
        { y: 198, label: "Twitter"},
        { y: 201, label: "Facebook"},
        { y: 202, label: "Instagram"},
        { y: 236, label: "Youtube"},
        { y: 395, label: "Telegram"},
        { y: 957, label: "Tumblr"},
        { y: 957, label: "Other"}
        ]
      },
      {
			type: "column",
			showInLegend: true, 
			name: "Selected",
      legendText: "",
       
         color: "rgb(102, 170, 0)",
			legendText: "Selected",
        dataPoints: [
        { y: 166, label: "Twitter"},
        { y: 144, label: "Facebook"},
        { y: 223, label: "Instagram"},
        { y: 272, label: "Youtube"},
        { y: 319, label: "Telegram"},
        { y: 759, label: "Tumblr"},
        { y: 759, label: "Other"}
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
export default BarChart_Extracted_Selected_Social;                   