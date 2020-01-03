import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import HomeNavbar from './HomeNavbar';
import {BrowserRouter ,Route,Switch,} from 'react-router-dom';
import ArticleTrendChart from './ArticleTrendChart';
import CardtTable from './CardTable';
import OverviewPage from  './Overview/OverviewPage';
import WorkloadPage from  './Workload/WorkloadPage';
class HomeTemplate extends Component{
render(){
return 	<BrowserRouter> <div  className="container-fluid ">
<div className="row">
<div className="col-md-12">


	<HomeNavbar  />	

	</div>
	</div>

<div clasName="row">
<div clasName="col-md-12">


	<Switch>
	<Route path="/home/overview" exact component={OverviewPage}/>
	<Route path="/home/workload" exact component={WorkloadPage}/>
	</Switch>

</div>
</div>



</div>
	</BrowserRouter>

	}
	}
	export default HomeTemplate;