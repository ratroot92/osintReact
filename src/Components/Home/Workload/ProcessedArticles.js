import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import SocialMediaLineChart from './SocialMediaLineChart';
import PieChart2 from './PieChart2';
import FunnelChart from './FunnelChart';

class ExtractedArticles extends Component{
render(){
const para = {
color: '#fff',
fontSize: '25px',

};

return <div className="card">
<div className="card-header row" >
<button className="btn btn-secondary float-right"><i className="fa fa-user"></i>[OFF]</button>
</div>  
<div className="card-body">
  <div className="container-fluid">
<div className="row">
<div className="col-md-6 text-center">
  <p>All Webistes</p>
  <div className="">
    <PieChart2/>
  </div>
</div>
<div className="col-md-6 text-center">
    <p>Social Media</p>
    <div className="" >
    <FunnelChart  />
    </div>
</div>    
  </div>  
</div>
</div>
</div>

}
}
export default ExtractedArticles;