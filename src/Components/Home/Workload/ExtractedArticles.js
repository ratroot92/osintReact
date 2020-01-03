import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import PieChart from './PieChart';
import SocialMediaLineChart from './SocialMediaLineChart';
class ExtractedArticles extends Component{
render(){
const para = {
color: '#fff',
fontSize: '25px',

};

return <div className="card">
<div className="card-header row">
<div className="col-md-4">
  <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Today
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button className="dropdown-item" type="button">Today</button>
    <button className="dropdown-item" type="button">Yesterday</button>
    <button className="dropdown-item" type="button">This Month</button>
    <button className="dropdown-item" type="button">Last Month</button>
    <button className="dropdown-item" type="button">This Year</button>
    <button className="dropdown-item" type="button">Last Year </button>
  </div>
</div>
</div>
<div className="col-md-8">
  
</div>
</div>  
<div className="card-body">
  <div className="container-fluid">
<div className="row">
<div className="col-md-6 text-center">
  <p>All Webistes</p>
  <div className="">
    <PieChart/>
  </div>
</div>
<div className="col-md-6 text-center">
    <p>Social Media</p>
    <div className="" >
    <SocialMediaLineChart  />
    </div>
</div>    
  </div>  
</div>
</div>
</div>

}
}
export default ExtractedArticles;