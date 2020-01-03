import React from "react";
import { Polar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
 



  state = {
    dataPolar: {
      datasets: [
        {
          data: [300, 50, 100, 40, 120,41,55],
          backgroundColor: [
            "red",
            "blue",
            "green",
            "orange",
            "black",
            "yellow",
            "brown"
          ],
          label: "My dataset" // for legend
        }
      ],
      labels: ["Twitter", "Facebook", "Instagram", "Youtube", "Telegram","Parler","Tumblr"]
    }
  }

  render() {
    return (
      <div>
       
        <Polar data={this.state.dataPolar} height={250} options={{ responsive: true }} />
      </div>
    );
  }
}

export default ChartsPage;