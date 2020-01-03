import React,{Component} from 'react';
import ReactDOM from 'react-dom';



import FetchNavbar from './FetchNavbar';
import {BrowserRouter ,Route,Switch,} from 'react-router-dom';



import Author from  './Author/AuthorPage';
import People from  './People/PeoplePage';
class FetchTemplate extends Component{
render(){


return 	<BrowserRouter> <div  className="container-fluid ">
<div className="row">
<div className="col-md-12">


	<FetchNavbar  />	

	</div>
	</div>

<div clasName="row">
<div clasName="col-md-12">


	<Switch>
	<Route path="/fetch/author" exact component={Author}/>
	<Route path="/fetch/people" exact component={People}/>
	</Switch>

</div>
</div>



</div>
	</BrowserRouter>

	}
	}
	export default FetchTemplate;