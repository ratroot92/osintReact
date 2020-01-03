import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import BarChart_Extracted_Selected_Websites from './BarChart_Extracted_Selected_Websites';

class ExtractedSelectedofAllWebsites extends Component{
render(){
const para = {
color: '#fff',
fontSize: '25px',

};

return <div className="card">
<div className="card-header text-center">
<p  className="btn btn-primary font-weight-bold" >Extracted & Selected of All Websites</p>
</div>  
<div className="card-body">
  <div className="container-fluid">
<div className="row">

<div className="col-md-12 text-center">
    <div className="" >
    <BarChart_Extracted_Selected_Websites />
    </div>
</div>    
  </div>  
</div>
</div>
</div>

}
}
export default ExtractedSelectedofAllWebsites;