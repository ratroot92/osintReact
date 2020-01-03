import React,{Component} from 'react';
import { MDBCard, MDBCardBody,MDBCardFooter, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBNav, MDBNavItem, MDBNavLink,
MDBContainer } from "mdbreact";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

//

import SuccessAlert from './../../SuccessAlert';
import ErrorAlert from 	 './../../ErrorAlert';


import 'react-tabs/style/react-tabs.css';







import AddNewsModal from './News/AddNewsModal';








import FacebookAuthorTable from './Facebook/Tables/FacebookAuthorTable';
import FacebookSearchTable from './Facebook/Tables/FacebookSearchTable';
import FacebookHashTable from './Facebook/Tables/FacebookHashTable';
import FacebookPagetable from './Facebook/Tables/FacebookPagetable';










import InstagramAuthorTable from './Instagram/Tables/InstagramAuthorTable';
import InstagramSearchTable from './Instagram/Tables/InstagramSearchTable';




import TwitterAuthorTable from './Twitter/Tables/TwitterAuthorTable';
import TwitterSearchTable from './Twitter/Tables/TwitterSearchTable';













export default () => (
<Tabs className="bg-dark " style={{padding:"5px!important",margin:"5px!important"
}}>
<TabList className="d-flex flex-row justify-content-center align-items-around" style={{padding:"5px!important",margin:"5px!important",backgroundColor:"white",}}>
<Tab style={{backgroundColor:"",border:"1px solid white",margin:"10px"}}><span className="text-success font-weight-bold btn border border-secondary " style={{fontSize:"15px"}}>Instagram Targets</span> </Tab>
<Tab style={{backgroundColor:"",border:"1px solid white",margin:"10px"}}><span className="text-success font-weight-bold btn border border-secondary " style={{fontSize:"15px"}}>Facebook Targets</span></Tab>
<Tab style={{backgroundColor:"",border:"1px solid white",margin:"10px"}}><span className="text-success font-weight-bold btn border border-secondary " style={{fontSize:"15px"}}>Twitter Targets</span> </Tab>
<Tab style={{backgroundColor:"",border:"1px solid white",margin:"10px"}}><span className="text-success font-weight-bold btn border border-secondary " style={{fontSize:"15px"}}>News Targets</span> </Tab>
</TabList>






<TabPanel  className=" m-0 p-0 ">
<div >


<MDBCard className="text-center" className="mb-5">
<MDBCardHeader  className="bg-dark">
</MDBCardHeader>
<MDBCardBody>
<InstagramAuthorTable/>
<div className="bg-danger" style={{height:"20px"}}></div>
<InstagramSearchTable/>
</MDBCardBody>
<MDBCardFooter className="bg-dark">
</MDBCardFooter>
</MDBCard>
</div>
</TabPanel>







<TabPanel  className=" m-0 p-0 ">
<div >


<MDBCard className="text-center" className="mb-5">
<MDBCardHeader  className="bg-dark">
</MDBCardHeader>
<MDBCardBody>
<FacebookAuthorTable/>
<div className="bg-danger" style={{height:"20px"}}></div>
<FacebookSearchTable/>
<div className="bg-danger" style={{height:"20px"}}></div>
<FacebookHashTable/>
<div className="bg-danger" style={{height:"20px"}}></div>
<FacebookPagetable/>


</MDBCardBody>
<MDBCardFooter className="bg-dark">
</MDBCardFooter>
</MDBCard>
</div>
</TabPanel>







<TabPanel  className=" m-0 p-0 ">
<div >


<MDBCard className="text-center" className="mb-5">
<MDBCardHeader  className="bg-dark">
</MDBCardHeader>
<MDBCardBody>


<TwitterAuthorTable/>
<div className="bg-danger" style={{height:"20px"}}></div>
<TwitterSearchTable/>
<div className="bg-danger" style={{height:"20px"}}></div>

</MDBCardBody>
<MDBCardFooter className="bg-dark">
</MDBCardFooter>
</MDBCard>
</div>
</TabPanel>










<TabPanel>
<MDBContainer>
<MDBCard className="text-center" className="mb-5">
<MDBCardHeader >
<div className="float-left"><span className="btn btn-primary "><i className="fa fa-search fa-2x mr-2"></i>All News targets</span></div>
<div className="float-right"><AddNewsModal/></div>
</MDBCardHeader>
<MDBCardBody>
<InstagramAuthorTable/>
</MDBCardBody>
<MDBCardFooter >
</MDBCardFooter>
</MDBCard>
</MDBContainer>
</TabPanel>












</Tabs>
);