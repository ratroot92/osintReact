import React, { Component } from 'react';
import { MDBContainer,MDBFormInline, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBInput } from 'mdbreact';
import AuthorTypesSelectbox from './AuthorTypesSelectbox';
import SSSListSelectbox from './SSSListSelectbox';
import IntervalSelectbox from './IntervalSelectbox';
import NewsWebsiteSelectbox from './NewsWebsiteSelectbox';

class AddNewsModal extends Component {


constructor(props){
    super(props);
    this.initialState={
        sss_id:'',
        news_site:'',
        top:'',
        author_type:'',
        expired_on:'',
        is_enabled:'',
        is_expired:'',
        periodic_interval:'',


    }
    this.state=this.initialState;
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);

};


handleSubmit(event){
    console.log(this.state)
}

handleChange(event){
    const name=event.target.name;
    const value=event.target.value;
    this.setState({
        [name]:value
    })
}




state = {
  modal: false,
  date:'15/12/2019',

      

}


componentDidUpload(){
console.log(this.state)
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

  

render() {



  return (
    









    <MDBContainer>
      <MDBBtn onClick={this.toggle}>Add News Form </MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
        <MDBModalHeader toggle={this.toggle} className="font-weight-bold text-white bg-secondary">Add News Target  Form </MDBModalHeader>
        <MDBModalBody>


{/*
<AuthorTypesSelectbox/>
<SSSListSelectbox/>
<IntervalSelectbox/>
<NewsWebsiteSelectbox/>*/}


<form onSubmit={this.handleSubmit} >
                         
                         <div className="form-group form-inline">
                         <label className="col-4 font-weight-bold " for="">Will expire on </label>
                         
                         <input type="date"
                         id                   ="expired_on"
                         name                 ="expired_on"
                         type                  ="date"
                         value                ={this.state.expired_on}
                         onChange             ={this.handleChange}
                         className            ="form-control "
                         placeholder          =""
                         required             ="required"
                         minlength            =""
                         minlength            ="" />       
                         </div>
                         
                         
                         
                         
                         <div className="form-group form-inline">
                         <label className="col-4 font-weight-bold " for="">Select Top  </label>
                         
                         <input type="text"
                         id                   ="top"
                         name                 ="top"
                         type                  ="number"
                         value                ={this.state.top}
                         onChange             ={this.handleChange}
                         className            ="form-control "
                         placeholder          =""
                         required             ="required"
                         minlength            =""
                         minlength            ="" />       
                         </div>
                         
                         



{/*


         <div className="form-group form-inline">
              
        <MDBFormInline>
        <MDBInput
          label='is expired'
            value={}
          type='checkbox'
          id='checkbox1'
          containerClass='mr-5'
        />
        <MDBInput
          label='is enabled'
        
          type='checkbox'
          id='checkbox2'
          containerClass='mr-5'
        />
       
      </MDBFormInline> 
         </div>*/}




        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
        </form>
      </MDBModal>
    </MDBContainer>
    );
  }

}

export default AddNewsModal;