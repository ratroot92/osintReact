import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {




  
  state = {
    dataPie: {
      labels: ["Social", "News", "Vedio", "Page", ],
     
      datasets: [
        {
          data: [300, 50, 100, 40],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
           
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774",
          
          ]
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <Pie data={this.state.dataPie} height={230} options={{ responsive: true }} />
      </div>
    );
  }
}

export default ChartsPage;