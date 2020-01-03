import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter ,Route,Switch,} from 'react-router-dom';



import HomeTemplate from  './../Components/Home/HomeTemplate';
import OverviewPage from  './../Components/Home/Overview/OverviewPage';
import WorkloadPage from  './../Components/Home/Workload/WorkloadPage';



class Home extends Component{
render(){
return  <div className="container-fluid bg-dark">
	
<HomeTemplate/>


	</div>



	
	



}	
}
export default Home;
