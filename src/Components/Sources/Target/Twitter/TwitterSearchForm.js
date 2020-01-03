import React,{Component} from 'react';
import axios from 'axios';
import $ from 'jquery';
import { MDBContainer,MDBFormInline,MDBInputGroup, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBInput,MDBCardBody,MDBCardHeader,MDBCol } from 'mdbreact';
import MultiTagInputs from './MultiTagInputs';
class twitterForm extends Component{
constructor(props){
super(props);
this.state={
author_type:'twitter_search',
need_screenshots:false,
periodic_interval:'',
page_url:'',
target_keywords:'',
expired_on:new Date().toLocaleString(),
searchtype:'',
//
city:'',
distance:'',
until_date:'',
since_date:'',
phrase_type:'',
hash_keywords:'',
//selectbox
intervals:[],
search_type:[],
search_type_hashtag:[],
visible:'',
default_date:'',
hashtag_list:[],
hash_message:'',
}
this.handleHashTags = this.handleHashTags.bind(this);
this.updateHashList = this.updateHashList.bind(this)
}
state = {
modal: false
}
toggle = () => {
this.setState({
modal: !this.state.modal
});
}
handleInputChange=(event)=> {
console.log([event.target.name]+""+event.target.value)
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
fetch('http://192.168.18.56:8000/core/add_twitter_target/' , {
method: "POST",
dataType: 'json',
headers: {    'Content-type': 'application/json',
'Accept':'application/json',

},
body: JSON.stringify(RequestObject),
})
.then((result) => result.json())
.then((info) => { console.log(info.status); })
}
populateSelectbox=(event)=>{
fetch('http://192.168.18.56:8000/core/add_news_target/')
.then(res => res.json())
.then(json=>this.setState(
{intervals:json.news_target_form.intervals}
))


}
populateAdditionalInputs(){
axios.get('http://192.168.18.56:8000/core/add_twitter_target/')
.then(response=> {
this.setState(
{search_type:response.data.twitter_target_form.search_type},
)
console.log(response.data);
})
.catch(function (error) {
// handle error
console.log(error);
})
.finally(function () {
// always executed
});
}
handleHashTags=(event)=>{
console.log("printing ");
console.log(this.state.hash_keywords);
if(this.state.hash_keywords===""){
this.setState({
  hash_message:"! No hash tag enetered ",
})
}else{
this.setState({hashtag_list: this.state.hashtag_list.concat([this.state.hash_keywords])})
this.setState({
hash_keywords:"",
});
console.log(this.state.hashtag_list);
this.setState({
  hash_message:"! Hash tag added  ",
})
}
}
updateHashList=(event)=>{
  /*var temp_value=event.target.value;

console.log(event.target.value);

const temp_list = [...this.state.hashtag_list]; // make a separate copy of the array
var index = temp_list.indexOf(temp_value)
if (index !== -1) {
temp_list.splice(index, 1);
this.setState({hashtag_list: temp_list});
console.log("updated array ")
console.log(this.state.hashtag_list);
}*/
}
componentDidMount(){
this.populateSelectbox();
this.populateAdditionalInputs();
var curr = new Date();
curr.setDate(curr.getDate() + 3);
var date = curr.toISOString().substr(0,10);
this.setState({
default_date:date,
})
}
render(){
return (<form method="POST"id='myform' onSubmit={this.handleSubmit}>
  <MDBContainer>
  <MDBBtn onClick={this.toggle}>Add Search Target</MDBBtn>
  <MDBModal size="lg" isOpen={this.state.modal} toggle={this.toggle}>
  <MDBModalHeader className="btn btn-secondary" toggle={this.toggle}>Add instagram author target</MDBModalHeader>
  <MDBModalBody>
  
  <div className="form-group form-inline  ">
    <label className="col-4 font-weight-bold  text-primary" for="author_type">author type</label>
    <input type="text" value={this.state.author_type} onChange={this.handleInputChange} id="author_type" value={this.state.author_type} placeholder="twitter Author" name="author_type"className="form-control col-6" disabled="dosbaled"
    required="required"/>
  </div>
  <div className="form-group form-inline ">
    <label className="col-4 font-weight-bold  text-primary" for="">select Interval</label>
    <select className="form-control col-5" name="periodic_interval"  onChange={this.handleInputChange} required="required">
      <option value="">Select option </option>{this.state.intervals.map(interval =><option value={interval[0]}>{interval[1]}</option>)}
    </select>
  </div>
  {this.renderContentSelector()}
  {this.renderContentOnSelect(this.state.searchtype)}
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
    <input type="date" value={this.state.expired_on} onChange={this.handleInputChange  } id="expired_on"  defaultValue={this.default_date} name="expired_on"className="form-control col-6" required="required"/>
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
renderContentSelector(){
return (<div className="">
  <div className="form-group form-inline ">
    <label className="col-4 font-weight-bold  text-dark" for="">select search type</label>
    <select className="form-control col-5" name="searchtype" onClick={this.handleContent}  onChange={this.handleInputChange} required="required">
      <option value="">Select search type </option>{this.state.search_type.map(type =><option value={type[0]}>{type[1]}</option>)}
    </select>
  </div>
</div>);
}
renderContentOnSelect(searchtype){
if(searchtype==='phrase')
{
return (<div><div className="form-group form-inline">
  <label className="col-4 font-weight-bold text-dark" for="">Phrase Options </label>
  
  
  <MDBFormInline className="">
  <MDBInput
  label='negitive'
  filled
  name="phrase_type"
  type='radio'
  checked={this.state.phrase_type}
  defaultChecked={this.state.phrase_type}
  onChange={this.handleInputChange1}
  id='checkbox2'
  required="required"
  containerClass='mr-5'
  />
  <MDBInput
  label='positive'
  filled
  name="phrase_type"
  type='radio'
  checked={this.state.phrase_type}
  
  onChange={this.handleInputChange1}
  id='checkbox2'
  required="required"
  containerClass='mr-5'
  />
  
  </MDBFormInline>
</div>
</div>)
}
else if(searchtype==='hashtag')
{



return(<div className="">
{/*
<div className="form-group form-inline">
  <label className="col-4 font-weight-bold  text-dark" for="author_type">Hash  keywords</label>
  <input type="text" value={this.state.hash_keywords} onChange={this.handleInputChange  } id="hash_keywords" name="hash_keywords"className="form-control col-6" placeholder="@seperate hash_keywords by comma " required="required"/>
  
</div>*/}
{/*





*/}




<MultiTagInputs/>

{/*


*/}
<ul className="list-inline ">{this.state.hashtag_list.map(function(hash) {
  return (
  <li  className="btn btn-primary btn-sm" onClick={event=>this.updateHashList(event,"value")}  value={hash}  key={hash}>{hash}<i class="fas fa-times"></i></li>);
  
  })
  }
</ul>

<div className="form-group form-inline">
<label className="col-4 font-weight-bold  text-dark" for="author_type">Hash  keywords</label>
<input type="text" value={this.state.hash_keywords} onChange={this.handleInputChange  } id="hash_keywords" name="hash_keywords"className="form-control col-5" />
{/*<input type="text" className="form-control " name="hash_keywords" value={this.state.hash_keywords} onChange={this.handleInputChange}/>*/}
<button className="btn btn-info btn-sm  col-1 p-0 m-0 pt-2 pb-2 ml-2" type="button" onClick={this.handleHashTags} >Add </button>

</div>
</div>
);








}
else if(searchtype==='bydate')
{
return(<div className=""><div className="form-group form-inline">
<label className="col-4 font-weight-bold  text-dark" for="author_type">since date   </label>
<input type="date" value={this.state.since_date} onChange={this.handleInputChange  } id="since_date" name="since_date"className="form-control col-6" required="required"/>
</div>
<div className="form-group form-inline">
<label className="col-4 font-weight-bold  text-dark" for="author_type">until date  </label>
<input type="date" value={this.state.until_date} onChange={this.handleInputChange  } id="until_date" name="until_date"className="form-control col-6" required="required"/>
</div></div>);
}
else if(searchtype==='location')
{
return(<div className=""><div className="form-group form-inline">
<label className="col-4 font-weight-bold  text-dark" for="author_type">city   </label>
<input type="date" value={this.state.city} onChange={this.handleInputChange  } id="city" name="city"className="form-control col-6" required="required"/>
</div>
<div className="">
</div>
<div className="form-group form-inline ">
<label className="col-4 font-weight-bold  text-dark" for="">distance</label>
<select className="form-control col-5" name="ditsance"  onChange={this.handleInputChange} required="required">
  <option value="">Select distance in miles  </option>
  <option value="1">10 miles  </option>
  <option value="2">30 miles  </option>
  <option value="3">50 miles  </option>
  <option value="4">80 miles  </option>
  <option value="5">100 miles  </option>
</select>
</div></div>);
}
}
}
export default twitterForm;