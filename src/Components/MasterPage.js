import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom';


import Navbar from './Navbar';
import Footer from './Footer';
import MonitorPage from './MonitorPage';
import AnalyzePage from './AnalyzePage';
import ColaboratePage from './ColaboratePage';
import FetchPage from './FetchPage';
import DeliverPage from './DeliverPage';
import ExplorePage from './ExplorePage';
import SourcePage from './SourcePage';
import Dashboard from './Dashboard';
import Home from './Home';



class MasterPage extends Component{
	render(){

		return(
		<BrowserRouter>
		 <div className="">
		<Navbar/>
		<Switch>
		<Route path="/" exact component={Home}/>
		<Route path="/monitor" exact component={MonitorPage}/>
		<Route path="/explore" exact component={ExplorePage}/>
		<Route path="/collaborate" exact component={ColaboratePage}/>
		<Route path="/fetch" exact component={FetchPage}/>
		<Route path="/explore" exact component={ExplorePage}/>
		<Route path="/deliver" exact component={DeliverPage}/>
		<Route path="/analyze" exact component={AnalyzePage}/>
		<Route path="/source" exact component={SourcePage}/>
		<Route path="/dashboard" exact component={Dashboard}/>
		</Switch>
			
		<Footer/>
		</div>
		

		</BrowserRouter>
		);
	}
}
export default MasterPage;