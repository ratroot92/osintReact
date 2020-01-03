import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class My_Article_Stat_Chart extends Component{
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
return <div className="card card-primary  "style={{height:'465px'}} >
		<div  className="card-header pb-3 text-danger "style={header_text} >My Article Stat:
		<i class="spinner-border text-info spinner-border-lg float-right"></i></div>
		<div className=" card-body m-0 p-0 mt-5 mb-5">
			
			<table class="table">

    <tr>
      <th scope="col" className="text-primary" style={para_values}>Reviewed Count:</th>
      <th scope="col" className="text-warning" style={numeric_values}>1</th>
      
    </tr>

  <tbody>
    <tr>
     
      <th className="text-primary" style={para_values}>To PCO Only Count:</th>
      <th className="text-warning" style={numeric_values}>2</th>
    </tr>
    <tr>
      
      <th className="text-primary" style={para_values}>To RPO Count:</th>
      <th className="text-warning"style={numeric_values}>3</th>
    </tr>
    <tr>
      
      <th className="text-primary" style={para_values}>To DSO With Comment Count:</th>
      <th className="text-warning"style={numeric_values}>4</th>
    </tr>
  </tbody>
</table>
			
		</div>
	</div>

}
}
export default My_Article_Stat_Chart;