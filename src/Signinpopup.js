import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import './style.css';
import "./bootstrap.min.css";
import "./responsive.css";



const Singinpopup = () => {

const[email, setEmail] = useState("");
const[password, setPassword] = useState("");

const histroy = useHistory();
useEffect(() => {
	if(localStorage.getItem("user-info")){
		histroy.push("")
	}
}, [])

const login= async() => {
	let item= {email, password}

	let result = await fetch("",{
		method:"POST",
		body:JSON.stringify(item),
		header:{
			"Content-Type" : 'application/json',
			"Accept" : "application/json"
		},

		body: JSON.stringify(item)
	})
	result = await result.json();
	localStorage.setItem("user-info", JSON.stringify(result))
	histroy.push("")
}


    return(
        <>

<div className="modal fade login-modal" id="login" tabindex="-1" role="dialog" aria-labelledby="login" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered" role="document">
			<div className="modal-content">
				<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<div className="modal-body">
					<div className="logo-area">
							<img className="logo" src="./images/logo.png" alt=""/>
					</div>
					<div className="header-area">
						<h4 className="title">Great to have you back!</h4>
						<p className="sub-title">Enter your details below.</p>
					</div>
					<div className="form-area">
						<form action="#"  method="POST">
							<div className="form-group">
									<label for="login-input-email">Email*</label>
									<input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="input-field" id="login-input-email"  placeholder="Enter your Email"/>
							</div>
							<div className="form-group">
									<label for="login-input-password">Password*</label>
									<input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="input-field" id="login-input-password"  placeholder="Password"/>
							</div>
							<div className="form-group">
								<div className="box">
									<div className="left">
											<input type="checkbox" className="check-box-field" id="input-save-password" checked/>
										<label for="input-save-password">Remember Password</label>
									</div>
									<div className="right">
										<a href="#">
											Forgot Password?
										</a>
									</div>
								</div>
							</div>
							<div className="form-group">
								   <button onClick={login} type="submit" className="mybtn1">Log In</button>
							</div>
						</form>
					</div>
					<div className="form-footer">
						<p>Not a member? 
								<a href="#">Create account <i className="fas fa-angle-double-right"></i></a>
						</p>
					</div>
				</div>
			</div>
			</div>
		</div>
		

        </>
    );
};

export default Singinpopup;