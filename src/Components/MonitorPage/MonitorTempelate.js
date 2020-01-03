import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import MonitorNavbar from './MonitorNavbar';

import {BrowserRouter ,Route,Switch,} from 'react-router-dom';
import {Container,MDBContainer,MDBRow,MDBCol}  from 'mdbreact';


import LiveNewsPage from  './LiveNews/LiveNewsPage';
import LiveFeedsPage from  './LiveFeeds/LiveFeedsPage';



class MonitorTempelate extends Component{
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
<Route path="/monitor/livenews" exact component={LiveNewsPage}/>
<Route path="/source/livefeed" exact component={LiveFeedsPage}/>
</Switch>
</MDBCol>
</MDBRow>

</div>
</BrowserRouter>

	}
	}
	export default MonitorTemplate;