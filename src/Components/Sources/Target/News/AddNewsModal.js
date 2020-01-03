import React, { Component } from 'react';
import { MDBContainer,MDBFormInline,MDBInputGroup, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBInput } from 'mdbreact';





import AuthorTypesSelectbox from './../AuthorTypesSelectbox';
import SSSListSelectbox from './../SSSListSelectbox';
import IntervalSelectbox from './../IntervalSelectbox';
import NewsWebsiteSelectbox from './../NewsWebsiteSelectbox';

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
      <MDBBtn onClick={this.toggle}>Add News </MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
        <MDBModalHeader toggle={this.toggle} className="font-weight-bold text-white bg-secondary">News Target Modal </MDBModalHeader>
        <form onSubmit={this.handleSubmit} >
        <MDBModalBody className="mt-5-">



<AuthorTypesSelectbox/>
<SSSListSelectbox/>
<IntervalSelectbox/>
<NewsWebsiteSelectbox/>



                         
                         <div className="form-group form-inline">
                         <label className="col-4 font-weight-bold  text-primary" for="">Will expire on </label>
                         
                         <input type="date"
                         id                   ="expired_on"
                         name                 ="expired_on"
                         type                  ="date"
                         value                ={this.state.expired_on}
                         onChange             ={this.handleChange}
                         className            ="form-control col-5"
                         placeholder          =""
                         required             ="required"
                         minlength            =""
                         minlength            ="" 
                         />       
                         </div>
                         
                         
                         
                         
                         <div className="form-group form-inline">
                         <label className="col-4 font-weight-bold text-primary" for="">Select Top  </label>
                         
                         <input type="number"
                         id                   ="top"
                         name                 ="top"
                         type                  ="number"
                         value                ={this.state.top}
                         onChange             ={this.handleChange}
                         className            ="form-control col-5"
                         placeholder          =""
                         required             ="required"
                         minlength            =""
                         minlength            =""
                          />       
                         </div>



                         <div className="form-group form-inline">
                         <label className="col-4 font-weight-bold text-primary" for="">Other Options </label>
                         
                          
<MDBFormInline className="p-5">
        <MDBInput
          label='is_enabled'
          filled
          type='checkbox'
          id='checkbox1'
          containerClass='mr-5'
        />
        <MDBInput
          label='is_expired'
          filled
          type='checkbox'
          id='checkbox2'
          containerClass='mr-5'
        />
      
      </MDBFormInline>
                         </div>
                         
 


        </MDBModalBody>
        </form>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
          <MDBBtn color="success">Submit form</MDBBtn>
        </MDBModalFooter>
     
      </MDBModal>
    </MDBContainer>
    );
  }

}

export default AddNewsModal;