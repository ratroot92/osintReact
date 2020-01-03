import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import BarChart_Extracted_Selected_Social from './BarChart_Extracted_Selected_Social';

class ExtractedSelectedofSocialMedia extends Component{
render(){
const para = {
color: '#fff',
fontSize: '25px',

};

return <div className="card">
<div className="card-header text-center">
<p className="btn btn-primary font-weight-bold">Extracted & Selected of All Social Media </p>
</div>  
<div className="card-body">
  <div className="container-fluid">
<div className="row">

<div className="col-md-12 text-center">
   
    <div className="" >
    <BarChart_Extracted_Selected_Social />
    </div>
</div>    
  </div>  
</div>
</div>
</div>

}
}
export default ExtractedSelectedofSocialMedia;