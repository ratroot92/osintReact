import react,{Component} from 'react';

class Login extends Component{


	render(){
		return <div className="container-fluid bg-dark" style={{height:"100%"}}>
		<div className="row">



		<div className="col-md-4 bg-primary"></div>
		<div className="col-md-8 p-5 bg-dark">
		<div className="text-warning font-weight-bold text-center mb-5" style={{fontSize:"60px"}}>Welcome</div>
			<div className="card  ml-auto mr-auto" style={{width:"50%"}}>
			<div className="card-body bg-dark">


			<div className="form-group mt-5">
			<label className="text-white font-weight-bold" for="email" style={{fontSize:"20px"}}>Username</label>
			<input className="form-control form-control-lg bg-white" name="email" id="email" placeholder="Enter your user name or email" style={{height:"60px",borderRadius:"0px"}} />
			</div>

			<div className="form-group mt-5">
			<label className="text-white font-weight-bold" for="email" style={{fontSize:"20px"}}>password</label>
			<input className="form-control form-control-lg  bg-white" name="email" id="email" placeholder="Enter your password"style={{height:"60px",borderRadius:"0px"}} />
			</div>


			<div className="form-group mt-5 ">
			<div className="text-white font-weight-bold" align="right">Forgot your password?</div>

			</div>

			<div className="form-group mt-5" >


			<div className="col-md-8 ">
			<input  type="checkbox" id="checkbox1" style={{color:"white"}}/>
			<span className="text-white font-weight-bold ml-2">Rememebr me </span>
			</div>

			
			<div className="col-md-4 "></div>

			</div>




			<div className="form-group mt-5">
			
			<input type="button" className="btn btn-lg btn-danger" value="Login" name="login"/>
			</div>






			</div>

			</div>

		</div>



		</div>


		



		</div>

}
}




export default Login;