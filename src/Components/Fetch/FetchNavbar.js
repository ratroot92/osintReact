import React, { Component } from 'react';
import {  MDBNavbarToggler,
MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';




class FetchNavbar extends Component {
state = {
  collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

render() {
  return (

    <div className="container-fluid m-0 p-0 mt-1 "style={{height:60}}>
    <div className="row ">
    <div className="col-md-4 m-0 p-0 "></div>
    <div className="col-md-4 m-0 p-0 ">



 <ul class="nav justify-content-center m-0 p-0 ">


  <li class="nav-item nav-link border border-white mr-1 mt-1">
   <Link to="/fetch/Author" >Author</Link>
  </li>

  <li class="nav-item nav-link border border-white mr-1 mt-1">
    <Link to="/fetch/People" >People</Link>
  </li>


  <li class="nav-item nav-link border border-white mr-1 mt-1">
    <Link to="/fetch/firstpublisher" >First Publisher</Link>
  </li>



  <li class="nav-item nav-link border border-white mr-1 mt-1">
    <Link to="/fetch/content" >Content</Link>
  </li>




  <li class="nav-item nav-link border border-white mr-1 mt-1">
    <Link to="/fetch/website" >Webiste</Link>
  </li>



  <li class="nav-item nav-link border border-white mr-1 mt-1">
    <Link to="/fetch/people" >Keywords Trends </Link>
  </li>
  


  <li class="nav-item nav-link border border-white mr-1 mt-1">
    <Link to="/fetch/tools" >Tools</Link>
  </li>
  




</ul>



    </div>
    <div className="col-md-4 justify-content-end m-0 p-0 "><MDBNavbarToggler image="https://mdbootstrap.com/img/svg/hamburger3.svg?color=00FBD8" className="float-right" onClick={this.toggleCollapse('navbarCollapse11')} /></div>
     </div>
     </div>


    );
  }
}

export default FetchNavbar;