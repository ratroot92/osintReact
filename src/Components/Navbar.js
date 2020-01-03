import React,{Component} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
class Navbar extends Component{
render(){
return <div className="container-fluid sticky-top">
  <div className="row">
    <div className="col-md-10 m-0 p-0 ">
      <nav className="navbar navbar-expand-lg navbar-success " style={{backgroundColor:"#0E2355"}} >
        <div className="d-flex flex-row justifty-content-around align-items-center">
          <a className="navbar-brand" ><i className="fa fa-2x fa-eye mr-2  "></i>OSINT</a>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item  btn  btn-lg p-2 active">
              
              <Link to="/">Home</Link> <span className="sr-only">(current)</span>
              
            </li>
            
            <li className="nav-item  btn  btn-lg p-2"><Link to='/dashboard'>Dashboard</Link></li>
            <li className="nav-item  btn  btn-lg p-2"><Link to='/monitor'>Monitor</Link></li>
            <li className="nav-item  btn  btn-lg p-2"><Link to='/explore'>Explore</Link></li>
            <li className="nav-item  btn  btn-lg p-2"><Link to='/fetch'>Fetch</Link></li>
            <li className="nav-item  btn  btn-lg p-2"><Link to='/analyze'>Analyze</Link></li>
            <li className="nav-item  btn  btn-lg p-2"><Link to='/collaborate'>Collaborate</Link></li>
            <li className="nav-item  btn  btn-lg p-2"><Link to='/deliver'>Deliver</Link></li>
            <li className="nav-item  btn  btn-lg p-2"><Link to='/source'>Source</Link></li>
            
            
            
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-sm btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
    <div className="col-md-2  d-flex flex-row justify-content-end align-items-center" style={{backgroundColor:"#0E2355"}}>
      <span className="float-right mr-1" ><i className="fa fa-commenting text-white " style={{fontSize:"22px"}}></i></span>
      
      
      <div className="dropdown mr-2">
        <span className="dropdown-toggle ml-2" type="button" data-toggle="dropdown"><i className="fa fa-cog fa-2x ">Username</i>
          <span className="caret"></span></span>
          <ul className ="dropdown-menu bg-primary mt-2">
            <li className ="nav-item  p-1 text-dark  "><a >My Webiste Groups</a></li>
            <li className ="nav-item p-1  text-dark "><a >System Management</a></li>
            <li className ="divider"></li>
            <li className ="nav-item p-1 text-dark "><a >Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12" style={{height:"3px",backgroundColor:"white"}}>
      </div>
    </div>
  </div>
  }
  }
  export default Navbar;