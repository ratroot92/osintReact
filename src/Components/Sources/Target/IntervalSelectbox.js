import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';




class IntervalSelectbox extends Component {

state = {
      intervals:[], 
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}




componentDidMount() {


fetch('http://192.168.18.56:8000/core/add_news_target/')
    .then(res => res.json())
      .then(json=>this.setState(
        {intervals:json.news_target_form.intervals}
        ))

            
       
   } 
   

  

render() {



  return (<div className="form-group form-inline">
         <label className="col-4 font-weight-bold  text-primary" for="">Periodic intervals</label>
      <select className="form-control col-5"><option value="">Select option </option>{this.state.intervals.map(interval =><option value="interval[0]">{interval[1]}</option>)}</select>
         </div>
    );
  }

}

export default IntervalSelectbox;