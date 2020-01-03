import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SourceNavbar from './SourceNavbar';

import {BrowserRouter ,Route,Switch,} from 'react-router-dom';
import {Container,MDBContainer,MDBRow,MDBCol}  from 'mdbreact';
import TargetPage from  './Target/TargetPage';
import SuggestionPage from  './Suggestion/SuggestionPage';
import TwitterDashbaord from './Dashboard/TwitterDashboard';


class SourceTemplate extends Component{
render(){


return 	<BrowserRouter><div className="container-fluid bg-dark" style={{width:"100%!important"}}>



<div className="row" >
	<MDBCol md="12" className="bg-dark" >
	<SourceNavbar  />
	</MDBCol>
</div>
</div>

<div className="container-fluid bg-dark" style={{width:"100%!important"}}>
<MDBRow >
<MDBCol md="12" className="bg-white m-0 p-0" >
<Switch>
<Route path="/source/target" exact component={TargetPage}/>
<Route path="/source/suggestion" exact component={SuggestionPage}/>
<Route path="/source/TwitterDashboard" exact component={TwitterDashbaord}/>
</Switch>
</MDBCol>
</MDBRow>

</div>
</BrowserRouter>

	}
	}
	export default SourceTemplate;