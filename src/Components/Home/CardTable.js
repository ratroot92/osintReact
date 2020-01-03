import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


import './Home.css'

const CardTable = (props) => {
  return (
    <div>
      <Card>
      
        <CardBody className="m-0 p-0 pt-4 ">
          <CardTitle className="header_text ml-2">Article Stat Overview For SLO Supervisor
          <i className="fa fa-cog   text-info pull-right"></i></CardTitle>
 
          <CardText>
          <div className="container-fluid mt-5 pb-5">
<div className="row ">

<div className="col-md-10 ">
<p className="text-dark font-weight-bold para_values">Article Selected Count:</p>
<p className="text-dark font-weight-bold para_values">Article Reviewed Count:</p>
<p className="text-dark font-weight-bold para_values">Rejected By PCO Count:</p>
<p className="text-dark font-weight-bold para_values">Rejected By RPO Count:</p>
</div>



<div className="col-md-2 ">
<p clasName="numeric_values text-warning font-weight-bold ">1</p>
<p clasName="numeric_values text-warning font-weight-bold ">0</p>
<p clasName="numeric_values text-warning font-weight-bold ">0</p>
<p clasName="numeric_values text-warning font-weight-bold ">0</p>
</div>

</div>
</div>

          </CardText>
         
        </CardBody>
      </Card>
    </div>
  );
};

export default CardTable;