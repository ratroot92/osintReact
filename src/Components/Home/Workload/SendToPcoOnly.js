import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import HighChart from './HighChart';
import PyramidChart from './PyramidChart';


class ExtractedArticles extends Component{
render(){
const para = {
color: '#fff',
fontSize: '25px',

};

return <div className="card">
<div className="card-header  text-center">
<p className="text-center btn btn-primary  font-weight-bold" >Sent To PCO Only</p>
</div>  
<div className="card-body">
  <div className="container-fluid">
<div className="row">
<div className="col-md-6 text-center">
  <p>All Webistes</p>
  <div className="">
    <PyramidChart/>
  </div>
</div>
<div className="col-md-6 text-center">
    <p>Social Media</p>
    <div className="" >
    <HighChart  />
    </div>
</div>    
  </div>  
</div>
</div>
</div>

}
}
export default ExtractedArticles;