import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import ExtractedArticles from './ExtractedArticles';
import ProcessedArticles from './ProcessedArticles';
import SendToPcoOnly from './SendToPcoOnly';
import ExtractedSelectedofAllWebsites from './ExtractedSelectedofAllWebsites';
import ExtractedSelectedofSocialMedia from './ExtractedSelectedofSocialMedia';
import SentToRpo from './SentToRpo';

class OverviewPage extends Component{
render(){
return <div class="container-fluid mt-5">
	<div class="row">
		<div class="col-lg-6 col-sm-12">
			<ExtractedArticles/>
		</div>
		<div class="col-lg-6 col-sm-12">
			<ProcessedArticles/>
		</div>
		
	</div>

	<div class="row mt-5">
		<div class="col-lg-6 col-sm-12">
			<SendToPcoOnly/>
		</div>
		<div class="col-lg-6 col-sm-12">
			<SentToRpo/>
		</div>
		
	</div>

	<div class="row mt-5 mb-5">
		<div class="col-lg-6 col-sm-12">
			<ExtractedSelectedofAllWebsites/>
		</div>
		<div class="col-lg-6 col-sm-12">
			<ExtractedSelectedofSocialMedia/>
		</div>
		
		
	</div>


</div>
}
}
export default OverviewPage;