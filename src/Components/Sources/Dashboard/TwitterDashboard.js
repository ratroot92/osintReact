import React,{Component} from 'react';


class TwitterDashboard extends Component{

constructor(props){
	super(props);
	this.state=({
		tags_list:[],
		tag_word:'',

	})
this.handleClick=this.handleClick.bind(this);
this.handleChange=this.handleChange.bind(this);
this.showListOnClick=this.showListOnClick.bind(this);
}


handleChange(e){

	e.preventDefault();

	console.log(e.target.name+"="+e.target.value);

	this.setState({

		[e.target.name]:e.target.value,

	})

}


showListOnClick(){

	console.log("displaying list in console ");
	console.log(this.state.tags_list);
}


updateLists(value){
	let toRemove=value;
	console.log(value);
	console.log("list before udation ");
	console.log(this.state.tags_list);

//var people = ["Bob", "Sally", "Jack"]
//var toRemove = 'Bob';

 var index = this.state.tags_list.indexOf(toRemove);
 if (index > -1) { //Make sure item is present in the array, without if condition, -n indexes will be considered from the end of the array.
   this.state.tags_list.splice(index, 1);
// }
this.setState({
        tags_list: this.state.tags_list
    });
console.log(this.state.tags_list);
}
}


handleClick(e){

e.preventDefault();

console.log("input tag eneter is"+this.state.tag_word);

var new_tag_word=this.state.tag_word;

if(new_tag_word===''){

	

console.log("enter tag has zero lenght");





}



else{

e.preventDefault();

console.log("adding new word to list ");
console.log("tag_word = "+new_tag_word);
this.setState({

tags_list:this.state.tags_list.concat([new_tag_word]),

});

console.log("new item in list is added ....");

console.log(this.state.tags_list);


//clear the input value again 

this.setState({
	tag_word:'',
})
console.log("input value cleared ");



}



}


render(){

return(<div className="">
	<ul className="list-inline">{this.state.tags_list.map((item ,i)=><li className="btn btn-success btn-sm"key={i} data-value={item} value={item} onClick={this.updateLists.bind(this,item)} >{item}<i className="fa fa-user font-weight-bold" ></i></li>)}</ul>
	<div className="form-group form-inline">
	<label className="col-3">Enter Hastags</label>
	<input 
	 className="form-control col-5"
	 type="text"
	 name="tag_word"
	 value={this.state.tag_word}
	 onChange={this.handleChange}
	 />
	 <button 
	 className="btn btn-sm col-4"
	 onClick={this.handleClick}
	 >Add hashtag</button>



<button className="btn btn-primary " onClick={this.showListOnClick}>display list in console </button>
	</div>
	</div>);


}


}
	export default TwitterDashboard
