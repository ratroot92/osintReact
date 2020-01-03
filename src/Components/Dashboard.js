
import ReactSpeedometer from "react-d3-speedometer";
import DashboardChart from './DashboardComponents/DashboardChart.js';
import DashboardPie from './DashboardComponents/DashboardPie.js';
import Animation from './DashboardComponents/Animation.js';
import ReverseAnimation from './DashboardComponents/ReverseAnimation.js';
import DashboardProgressbars from './DashboardComponents/DashboardProgressbars.js';
import CylenderFill from './DashboardComponents/CylenderFill.js';

import React,{Component} from 'react';
class Dashboard extends Component{
	render(){


		return(<div className="container-fluid bg-dark mt-5">
<div className="row">
<div className="col-md-12"></div></div>
			<div className="row">
			<div className="col-md-4">

<div><Animation/></div>
<div class="card m-0 p-0  " >
	<div class="card-header  " >
		<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" ></span>Overview</div>
		<div class="card-body m-0 p-0 ">
			<table class="table m-0 p-0 ">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">First</th>
						
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">7</th>
						<td>Extracted</td>
						
						
					</tr>
					<tr>
						<th scope="row">0</th>
						<td>Intrested Today</td>
						
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Fetched Author Today</td>
						
					</tr>
				</tbody>
			</table>
			
		</div>
		<div class="card-footer" >Updated </div>
	</div>


<div><Animation/></div>

<div class="card m-0 p-0  mt-1" >
	<div class="card-header  " >

		<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" ></span>Hashtags</div>
		<div class="card-body m-0 p-0 ">
			<table class="table m-0 p-0 ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
       <th scope="col">First</th>
     
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>#NigerianArmy</td>
         <td>96</td>
    
   
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>#IraqiInsurgency</td>
       <td>25</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>#BlockbusterMovies</td>
        <td>44</td>
    </tr>

    <tr>
      <th scope="row">4</th>
      <td>#NawazSharif</td>
        <td>128</td>
    </tr>
  </tbody>
</table>
			
		</div>
		<div class="card-footer" >Updated </div>
	</div>

<div><Animation/></div>
<div class="card m-0 p-0  mt-1" >
	<div class="card-header  " >

		<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" ></span>Hashtags</div>
		<div class="card-body ">
			<div class="row">
			<div className="col-md-4 p-1"><DashboardProgressbars/></div>
			<div className="col-md-4 p-1"><DashboardProgressbars/></div>
			<div className="col-md-4 p-1"><DashboardProgressbars/></div>

			</div>
			
		</div>
		<div class="card-footer" >Updated </div>
	</div>

			</div>

			<div className="col-md-4  m-0 p-0 text-center ">
<div className="bg-dark ml-auto mr-auto m-0 pt-5 "  style={{width: '100%',}}>
<div className="bg-dark ml-auto mr-auto  "  style={{width: '500px',height: '300px',marginTop:'10px!important'}}>
		<ReactSpeedometer
	maxValue    ={500}
	value       ={473}
	needleColor ="red"
	startColor  ="green"
	segments    ={10}
	endColor    ="blue"
	width       ="425"
	height      ="200"
	textColor="white"
	paddingHorizontal=""
	currentValueText="Value: ${value}"
	textColor="white"
	fluidWidth
	 labelFontSize="12px"
  valueTextFontSize="12px"


  needleTransitionDuration={10000}
  needleTransition="easeElastic"
   style={{border:"10px solid white"}}

/>
</div>
</div>

			</div>

			<div className="col-md-4  m-0 p-0 text-center ">
<CylenderFill/>

			</div>



			<div className="col-md-4">
<div><ReverseAnimation/></div>
<div class="card m-0 p-0  " >
	<div class="card-header  " >
		<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" ></span>Monthly Overview</div>
		<div class="card-body m-0 p-2">
		<DashboardChart/>
			
		</div>
		<div class="card-footer" >Updated </div>
	</div>



<div><ReverseAnimation/></div>

<div class="card m-0 p-0  " >
	<div class="card-header  " >
		<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" ></span>Yearly Overview</div>
		<div class="card-body m-0 p-0 ">
			<DashboardPie/>
			
		</div>
		<div class="card-footer" >Updated </div>
	</div>

<div><ReverseAnimation/></div>

<div class="card m-0 p-0  " >
	<div class="card-header  " >
		<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" ></span>Monthly Overview</div>
		<div class="card-body m-0 p-0 ">
			<table class="table m-0 p-0 ">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">First</th>
						
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">7</th>
						<td>Extracted</td>
						
						
					</tr>
					<tr>
						<th scope="row">0</th>
						<td>Intrested Today</td>
						
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Fetched Author Today</td>
						
					</tr>
				</tbody>
			</table>
			
		</div>
		<div class="card-footer" >Updated </div>
	</div>
		

			</div>
			</div>


			
			</div>);
	}
}

export default Dashboard;