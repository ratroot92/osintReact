
import React,{Component} from 'react';
import axios from 'axios';
import $ from 'jquery'; 
import { MDBContainer,MDBFormInline,MDBInputGroup, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBInput,MDBCardBody,MDBCardHeader,MDBCol } from 'mdbreact';










class facebookPersonForm extends Component{
constructor(props){
super(props);
this.state={
author_type:'facebook_search',



need_screenshots:false,
periodic_interval:'',
author_id:'',
author_account:'',
author_name:'',
author_url:'',
expired_on:'',

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
  author_name:this.state.author_name,
  author_id:this.state.author_id,
  author_account:this.state.author_account,
  author_url:this.state.author_url,
  expired_on:this.state.expired_on,
  need_screenshots:this.state.need_screenshots,
   periodic_interval:this.state.periodic_interval,
})
console.log(RequestObject);
 //fetch('http://localhost:3001/getdata' , {
fetch('http://192.168.18.56:8000/core/add_facebook_target/' , {
  method: "POST",
 cache: "no-cache",
  headers: {    'Content-type': 'application/json',
               
       
  },
  body: JSON.stringify({ author_type:this.state.author_type,
  author_name:this.state.author_name,
  author_id:this.state.author_id,
  author_account:this.state.author_account,
  author_url:this.state.author_url,
  expired_on:this.state.expired_on,
  need_screenshots:this.state.need_screenshots,
   periodic_interval:this.state.periodic_interval,}),
})
.then((info) => { console.log(info.status); })






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
      <MDBBtn onClick={this.toggle}>Add Group  Target</MDBBtn>
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
      <input type="text" value={this.state.author_type} onChange={this.handleInputChange} id="author_type" value={this.state.author_type} placeholder="facebook Author" name="author_type"className="form-control col-6" disabled="dosbaled"
      required="required"/>
      </div>







      <div className="form-group form-inline">
      <label className="col-4 font-weight-bold  text-primary" for="author_type">author id</label>
      <input type="text" value={this.state.author_id} onChange={this.handleInputChange  } id="author_id" name="author_id"className="form-control col-6" required="required"/>
      </div>





      <div className="form-group form-inline">
      <label className="col-4 font-weight-bold  text-primary" for="author_type">author account</label>
      <input type="text" value={this.state.author_account} onChange={this.handleInputChange  } id="author_account" name="author_account"className="form-control col-6" required="required"/>
      </div>




      <div className="form-group form-inline">
      <label className="col-4 font-weight-bold  text-primary" for="author_type">author name</label>
      <input type="text" value={this.state.author_name} onChange={this.handleInputChange  } id="author_name" name="author_name"className="form-control col-6" required="required"/>
      </div>



      <div className="form-group form-inline">
      <label className="col-4 font-weight-bold  text-primary" for="author_type">author url</label>
      <input type="text" value={this.state.author_url} onChange={this.handleInputChange  } id="author_url" name="author_url"className="form-control col-6" required="required"/>
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

export default facebookPersonForm;