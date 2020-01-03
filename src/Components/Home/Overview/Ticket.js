import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class Ticket extends Component{
render(){
const para = {
color: '#fff',
fontSize: '25px',

};
const header_text = {

fontSize: '2.5vh',
fontWeight:'bolder',


};

const numeric_values = {
fontSize:'2.5vh',
border:'none',
};

const para_values = {
fontSize:'2.5vh',
border:'none',

};
return <div className="card card-primary  " style={{height:'465px'}}>
		<div  className="card-header pb-3 text-danger "style={header_text} >Ticket ( to me only and by me only )
		<i class="spinner-border text-info spinner-border-lg float-right"></i></div>
		<div className=" card-body m-0 p-0 mt-5 mb-5">
			
			<table class="table">

    <tr>
      <th scope="col" className="text-primary" style={para_values}>Read Tickets:</th>
      <th scope="col" className="text-warning" style={numeric_values}>1</th>
      
    </tr>

  <tbody>
    <tr>
     
      <th className="text-primary" style={para_values}>New Coming Tickets:</th>
      <th className="text-warning" style={numeric_values}>2</th>
    </tr>
    <tr>
      
      <th className="text-primary" style={para_values}>Total Inbox Count:</th>
      <th className="text-warning"style={numeric_values}>3</th>
    </tr>

    <tr>
      
      <th className="text-primary" style={para_values}>Replied Tickets:</th>
      <th className="text-warning"style={numeric_values}>3</th>
    </tr>

    
    <tr>
      
      <th className="text-primary" style={para_values}>Tickets with New Reply:</th>
      <th className="text-warning"style={numeric_values}>3</th>
    </tr>
    
  </tbody>
</table>
			
		</div>
	</div>

}
}
export default Ticket;