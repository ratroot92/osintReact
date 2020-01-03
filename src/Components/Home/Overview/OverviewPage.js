import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import ArticleTrendChart from './../ArticleTrendChart';
import CardtTable from './../CardTable';
import Stat_Over_View_Chart from './Stat_Over_View_Chart';
import My_Article_Stat_Chart from './My_Article_Stat_Chart';
import ArticleStatOverview from './ArticleStatOverview';
import Ticket from './Ticket';
class OverviewPage extends Component{

render(){

return <div className="container-fluid m-0 p-0 " style={{backgroundColor:'#E8E9EE!important'}} >
<div className="row ">


<div className="col-lg-8 m-0 p-1"><ArticleTrendChart/></div>
<div className="col-lg-4 m-0 p-1"><Stat_Over_View_Chart/></div>

</div>

<div className="row mt-5 mb-5 pb-5">
<div className="col-lg-4"><ArticleStatOverview/></div>
<div className="col-lg-4"><My_Article_Stat_Chart/></div>
<div className="col-lg-4"><Ticket/></div>

</div>

</div>




}

}

export default OverviewPage;