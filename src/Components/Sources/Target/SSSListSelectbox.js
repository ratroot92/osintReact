import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';




class SSSListSelectbox extends Component {

state = {
      sss_list:[], 
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
        {sss_list:json.news_target_form.sss_list}
        ))

            
       
   } 
   

  

render() {



  return (<div className="form-group form-inline">
         <label className="col-4 font-weight-bold  text-primary"  for="">SSS LIST</label>
      <select  className="form-control col-5"><option value="">Select option </option>{this.state.sss_list.map(sss_list =><option value="sss_list.id">{sss_list.title}</option>)}</select>
         </div>
    );
  }

}

export default SSSListSelectbox;