import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';




class NewsWebsiteSelectbox extends Component {

state = {
      news_sites:[], 
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
        {news_sites:json.news_target_form.news_sites}
        ))

            
       
   } 
   

  

render() {



  return (<div className="form-group form-inline">
         <label className="col-4 font-weight-bold  text-primary" for="">News site</label>
      <select className="form-control col-5"><option value="">Select option </option>{this.state.news_sites.map(news_sites =><option value="news_sites[0]">{news_sites[1]}</option>)}</select>
         </div>
    );
  }

}

export default NewsWebsiteSelectbox;