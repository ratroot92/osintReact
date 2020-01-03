import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

import { Socket }  from 'react-Socket-io';


import { subscribeToTimer } from './../../../api';



class ChartsPage extends React.Component {



constructor() {
    super();
    this.state = {
      food_data: []
      // this is where we are connecting to with Sockets,
    };
  }
getData = foodItems => {
    console.log(foodItems);
    this.setState({ food_data: foodItems });
  };
changeData = () => Socket.emit("initial_data");
/*As soon as the component gets mounted ie in componentDidMount method, firing the initial_data event to get the data to initialize the Kitchen Dashboard */
/* Adding change_data listener for listening to any changes made by Place Order and Predicted Order components*/ 
componentDidMount() {
    var state_current = this;
    Socket.emit("initial_data");
    Socket.on("get_data", this.getData);
    Socket.on("change_data", this.changeData);
  }

 Removing the listener before unmounting the component in order to avoid addition of multiple listener at the time revisit
componentWillUnmount() {
    Socket.off("get_data");
    Socket.off("change_data");
  }
/* When Done gets clicked, this function is called and mark_done event gets emitted which gets listened on the backend explained later on*/
markDone = id => {
    // console.log(predicted_details);
    Socket.emit("mark_done", id);
  };
getFoodData() {
    return this.state.food_data.map(food => {
      return (
        <tr key={food._id}>
          <td> {food.name} </td>
          <td> {food.ordQty} </td>
          <td> {food.prodQty} </td>
          <td> {food.predQty} </td>
          <td>
            <button onClick={() => this.markDone(food._id)}>Done</button>
          </td>
        </tr>
      );
    });
  }
  



  
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
