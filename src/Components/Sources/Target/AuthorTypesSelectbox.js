import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';




class AuthorTypesSelectbox extends Component {

state = {
      author_types:[], 

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
        {author_types:json.news_target_form.author_types}
        ))

            
       
   } 
   


  

render() {



  return (<div className="form-group form-inline">
         <label className="col-4 font-weight-bold  text-primary" for="">Select Author Type</label>
      <select className="form-control col-5"  id={this.props.author_type_id}
       ><option value="">Select option </option>
       {this.state.author_types.map(sss =><option id={sss.id} value="sss[0]">{sss[1]}</option>)}</select>
         </div>
    );
  }

}

export default AuthorTypesSelectbox;