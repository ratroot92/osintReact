import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer,
MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';




class HomeNavbar extends Component {
state = {
  collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

render() {
  return (

    <div className="container-fluid m-0 p-0 mt-1 "style={{height:"53px"}} >
    <div className="row ">
    <div className="col-md-4 m-0 p-0 "></div>
    <div className="col-md-4 m-0 p-0 ">



 <ul class="nav justify-content-center m-0 p-0 ">


  <li class="nav-item nav-link border border-white mr-1 mt-1">
   <Link to="/home/overview" >Overview</Link>
  </li>

  <li class="nav-item nav-link border border-white mr-1 mt-1">
    <Link to="/home/workload" >Worklaod</Link>
  </li>
  



</ul>



    </div>
    <div className="col-md-4 justify-content-end m-0 p-0 "><MDBNavbarToggler image="https://mdbootstrap.com/img/svg/hamburger3.svg?color=00FBD8" className="float-right" onClick={this.toggleCollapse('navbarCollapse11')} /></div>
     </div>
     </div>


    );
  }
}

export default HomeNavbar;