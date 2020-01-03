import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter ,Route,Switch,} from 'react-router-dom';



import SourceTemplate from  './../Components/Sources/SourceTemplate';
import TargetPage from  './../Components/Sources/Target/TargetPage';
import SuggestionPage from  './../Components/Sources/Suggestion/SuggestionPage';

import {Container,MDBContainer,MDBRow,MDBCol}  from 'mdbreact';

class SourcePage extends Component{
render(){
return  <div className="container-fluid bg-dark" style={{width:"100%!important"}}>

<MDBRow >
<MDBCol md="12">
<SourceTemplate/>
</MDBCol>
</MDBRow>

</div>

	
	



}	
}
export default SourcePage;
