import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React, { Component } from 'react';

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "LPG Level Indicator",
    lowerlimit: "0",
    upperlimit: "25",
    lowerlimitdisplay: "Empty",
    upperlimitdisplay: "Full",
    numbersuffix: " ltrs",
    cylfillcolor: "#5D62B5",
    plottooltext: "LPG Consumption: <b>20 ltrs</b>",
    cylfillhoveralpha: "85",
    theme: "fusion"
  },
  value: "20"
};

class MyComponent extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="cylinder"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default MyComponent;