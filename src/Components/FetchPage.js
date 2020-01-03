import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter ,Route,Switch,} from 'react-router-dom';



import FetchTemplate from  './../Components/Fetch/FetchTemplate';
import AuthorPage from  './../Components/Fetch/Author/AuthorPage';
import PeoplePage from  './../Components/Fetch/People/PeoplePage';



class FetchPage extends Component{
render(){
return  <div className="container-fluid bg-dark">
	
<FetchTemplate/>
	</div>



	
	



}	
}
export default FetchPage;
