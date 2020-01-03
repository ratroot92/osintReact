import React, { Component } from 'react';
import $ from 'jquery'; 
import { MDBContainer,MDBFormInline,MDBInputGroup, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBInput,MDBCardBody,MDBCardHeader,MDBCol } from 'mdbreact';




import AuthorTypesSelectbox from './../AuthorTypesSelectbox';
import SSSListSelectbox from './../SSSListSelectbox';
import IntervalSelectbox from './../IntervalSelectbox';
import NewsWebsiteSelectbox from './../NewsWebsiteSelectbox';



class AddTwitterTargetModal extends Component {


constructor(props){
    super(props);
    this.initialState={
        // sss_id:'',
        author_id:'',
        author_account:'',
        author_name:'',
        author_url:'',
         author_type:'',
        expired_on:'',
        page_url:'',
        target_keywords:'',

        // periodic_interval:'',



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
twitter_Form_Type:'',
      

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
console.log(this.state.twitter_Form_Type);


  return (
    









    <MDBContainer>
      <MDBBtn onClick={this.toggle}>Add New  </MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
        <MDBModalHeader toggle={this.toggle} className="font-weight-bold text-white bg-secondary font-weight-bold">Twitter Target Form </MDBModalHeader>
        <form onSubmit={this.handleSubmit} >
        <MDBModalBody>


<MDBCol  className="text-center">
{this.renderFormSelector()}
</MDBCol>



                         
                         

<div>{this.renderFormHere(this.state.twitter_Form_Type)}</div>

                         
 


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



  renderFormSelector(){
    return <select className="form-control  col-8 ml-auto mr-auto " onChange={(e)=>{
  this.setState({
    twitter_Form_Type:e.target.value,
  })
}}>


 <option value="">Select Author Type </option> 
 <option value="TwitterAuthor_Form">Author is a twitter person</option>
 <option value="TwitterSearch_Form">Author is a twitter search</option>
</select>



  }


  renderFormHere(twitter_Form_Type){
console.log("function called "+twitter_Form_Type);
  
      


       if(twitter_Form_Type=='TwitterAuthor_Form'){
      
      return (<div className="text-center mt-5   ">
{/*         <MDBCardHeader color="info-color" className="mb-2 font-weight-bold" style={{fontSize:"25px"}}>Twitter Author Form</MDBCardHeader>*/}




<AuthorTypesSelectbox />
<SSSListSelectbox  />
<IntervalSelectbox/>
<NewsWebsiteSelectbox/>






<div className="form-group form-inline">
                         <label className="col-4 font-weight-bold  text-primary" for="">Author id  </label>
                         
                         <input type="date"
                         id                   ="author_id"
                         name                 ="author_id"
                         type                  ="text"
                         value                ={this.state.author_id}
                         onChange             ={this.handleChange}
                         className            ="form-control col-5"
                         placeholder          =""
                         required             ="required"
                         minlength            =""
                         minlength            ="" 
                         validate
                         />       
                         </div>
                         
                         
                         
                         
                         <div className="form-group form-inline">
                         <label className="col-4 font-weight-bold text-primary" for="">Author account   </label>
                         
                         <input type="text"
                         id                   ="author_account"
                         name                 ="author_account"
                         type                  ="text"
                         value                ={this.state.author_acount}
                         onChange             ={this.handleChange}
                         className            ="form-control col-5"
                         placeholder          =""
                         required             ="required"
                         minlength            =""
                         minlength            =""
                         vaidate
                          />       
                         </div>



                         <div className="form-group form-inline">
                         <label className="col-4 font-weight-bold text-primary" for="">Author name   </label>
                         
                         <input type="text"
                         id                   ="author_name"
                         name                 ="author_name"
                         type                  ="text"
                         value                ={this.state.author_name}
                         onChange             ={this.handleChange}
                         className            ="form-control col-5"
                         placeholder          =""
                         required             ="required"
                         minlength            =""
                         minlength            =""
                         vaidate
                          />       
                         </div>



                         <div className="form-group form-inline">
                         <label className="col-4 font-weight-bold text-primary" for="">Author url   </label>
                         
                         <input type="text"
                         id                   ="author_url"
                         name                 ="author_url"
                         type                  ="text"
                         value                ={this.state.author_url}
                         onChange             ={this.handleChange}
                         className            ="form-control col-5"
                         placeholder          =""
                         required             ="required"
                         minlength            =""
                         minlength            =""
                         vaidate
                          />       
                         </div>



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
                         </div>)
      }








      else if (twitter_Form_Type=='TwitterSearch_Form'){
       
      
      return (<div className="text-center mt-5 ">
        {/* <MDBCardHeader color="info-color" className="mb-2 font-weight-bold" style={{fontSize:"25px"}} >Twitter Search Form</MDBCardHeader>
*/}


<AuthorTypesSelectbox />
<SSSListSelectbox  />
<IntervalSelectbox/>
<NewsWebsiteSelectbox/>
<div className="form-group form-inline">
                         <label className="col-4 font-weight-bold  text-primary" for="">Target keywords  </label>
                         
                         <input type="date"
                         id                   ="target_keywords"
                         name                 ="target_keywords"
                         type                  ="text"
                         value                ={this.state.target_keywords}
                         onChange             ={this.handleChange}
                         className            ="form-control col-5"
                         placeholder          =""
                         required             ="required"
                         minlength            =""
                         minlength            ="" 
                         validate
                         />       
                         </div>

























                         
                         
                         
                         
                         <div className="form-group form-inline">
                         <label className="col-4 font-weight-bold text-primary" for="">Page url   </label>
                         
                         <input type="text"
                         id                   ="page_url"
                         name                 ="page_url"
                         type                  ="text"
                         value                ={this.state.page_url}
                         onChange             ={this.handleChange}
                         className            ="form-control col-5"
                         placeholder          =""
                         required             ="required"
                         minlength            =""
                         minlength            =""
                         vaidate
                          />       
                         </div>





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
                         </div>)
      
    }










      
else{


return(<div className="mt-3 text-center" ><span className="alert alert-warning "> * Nothing selected ! Please select a form type</span></div>);





}      
      
}













}



export default AddTwitterTargetModal;