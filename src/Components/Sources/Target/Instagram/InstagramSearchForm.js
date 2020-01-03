
import React,{Component} from 'react';
import axios from 'axios';
import $ from 'jquery'; 
import { MDBContainer,MDBFormInline,MDBInputGroup, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBInput,MDBCardBody,MDBCardHeader,MDBCol } from 'mdbreact';










class InstagramForm extends Component{
constructor(props){
super(props);
this.state={
author_type:'instagram_search',
need_screenshots:false,
periodic_interval:'',
page_url:'',
target_keywords:'',
expired_on:'',
message:'',
//selectbox
intervals:[],
}



}

//modal data
state = {
  modal: false
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

//modal data




  handleInputChange=(event)=> {
 this.setState({
  [event.target.name]:event.target.value,
 })


}


  handleInputChange1=(event)=> {
this.setState({
  [event.target.name]:event.target.checked
})


}



handleSubmit=(event)=>{
 event.preventDefault(); 
const RequestObject=({
  author_type:this.state.author_type,
  page_url:this.state.page_url,
  target_keywords:this.state.target_keywords,
  expired_on:this.state.expired_on,
  need_screenshots:this.state.need_screenshots,
   periodic_interval:this.state.periodic_interval,
})

// fetch('http://localhost:3001/getdata' , {
 fetch('http://192.168.18.56:8000/core/add_instagram_target/' , {
  method: "POST",
  dataType: 'json',
  headers: {    'Content-type': 'application/json',
                'Accept':'application/json',
       
  },
  body: JSON.stringify(RequestObject),
})
.then((result) => result.json())
.then((info) => { 
if(info.status==='200'){
  console.log("Query submitted successfully ...... Instagram Search Target has beeen added ");
  this.setState({
    message:"Query submitted successfully ...... Instagram Search Target has beeen added ",
  })
}
else{
  console.log("failed to submit query ! ....")
}

/*console.log(info.status); */})





}

populateSelectbox=(event)=>{



fetch('http://192.168.18.56:8000/core/add_news_target/')
    .then(res => res.json())
      .then(json=>this.setState(
        {intervals:json.news_target_form.intervals}
        ))

            
       
   } 



componentDidMount(){
  this.populateSelectbox();

}


  render(){



    return (<form method="POST"id='myform' onSubmit={this.handleSubmit}>
       <MDBContainer>
      <MDBBtn onClick={this.toggle}>Add Search Target</MDBBtn>
      <MDBModal size="lg" isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader className="btn btn-secondary" toggle={this.toggle}>Add instagram author target</MDBModalHeader>
        <MDBModalBody>
      
      <div className="form-group form-inline mt-5 mb-5">
          <label className="col-4 font-weight-bold  text-primary" for="">select Interval</label>
            <select className="form-control col-5" name="periodic_interval"  onChange={this.handleInputChange} required="required">
            <option value="0">Select option </option>{this.state.intervals.map(interval =><option value={interval[0]}>{interval[1]}</option>)}
            </select>
          </div>







      <div className="form-group form-inline  ">
      <label className="col-4 font-weight-bold  text-primary" for="author_type">author type</label>
      <input type="text" value={this.state.author_type} onChange={this.handleInputChange} id="author_type" value={this.state.author_type} placeholder="Instagram Author" name="author_type"className="form-control col-6" disabled="dosbaled"
      required="required"/>
      </div>







      <div className="form-group form-inline">
      <label className="col-4 font-weight-bold  text-primary" for="author_type">target keywords</label>
      <input type="text" value={this.state.target_keywords} onChange={this.handleInputChange  } id="target_keywords" name="target_keywords"className="form-control col-6" required="required"/>
      </div>





      <div className="form-group form-inline">
      <label className="col-4 font-weight-bold  text-primary" for="author_type">page url </label>
      <input type="text" value={this.state.page_url} onChange={this.handleInputChange  } id="page_url" name="page_url"className="form-control col-6" required="required"/>
      </div>




      <div className="form-group form-inline">
      <label className="col-4 font-weight-bold  text-primary" for="author_type">expired on</label>
      <input type="date" value={this.state.expired_on} onChange={this.handleInputChange  } id="expired_on" name="expired_on"className="form-control col-6" required="required"/>
      </div>





<div className="form-group form-inline">
                         <label className="col-4 font-weight-bold text-primary" for="">Other Options </label>
                         
                          
 <MDBFormInline className="p-5">
         <MDBInput
           label='need_screenshots'
           filled
           name="need_screenshots"
           type='checkbox'
           checked={this.state.need_screenshots}
           defaultChecked={this.state.need_screenshots}
           onChange={this.handleInputChange1}
          id='checkbox1'
          required="required"
           containerClass='mr-5'
         />
         {/*<MDBInput
           label='is_expired'
           filled
           type='checkbox'
           id='checkbox2'
           containerClass='mr-5'
         />*/}
      
       </MDBFormInline>
                          </div>
      




</MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
          <MDBBtn color="primary" type="submit" value="submit" onClick={this.submitForm}>Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer></form>);
  }
}

export default InstagramForm;