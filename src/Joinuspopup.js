import React, {useState} from "react";
import './style.css';
import "./bootstrap.min.css";
import "./responsive.css";



const Joinuspopup = () => {

	const[name, setName] = useState("");
	const[email, setEmail] = useState("");
	const[password, setPassword] = useState("");
	const[confirmPass, setConfirmPass] = useState("");
	const[select, setSelect] = useState("");
	

	const signup = async() => {
		let item= {name, email, password, confirmPass}

	    let result = await fetch("https://easylifeyes.com/lottery/signup",{
			method:"POST",
			body:JSON.stringify(item),
			header:{
				"Content-Type" : "application/jsona",
				"Accept" : "application/json"
			}
		})
		result = await result.json()
		console.log(result);
	}


    return(
        <>

<div className="modal fade login-modal sign-in" id="signin" tabindex="-1" role="dialog" aria-labelledby="signin" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered " role="document">
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
							<form action="#" method="POST" onSubmit="signup">
								<div className="form-group">
										<label for="input-name">Name*</label>
										<input name="name" type="text" value={name} onChange={(e)=>setName(e.target.value)} className="input-field" id="input-name"  placeholder="Enter your Name"/>
								</div>
								<div className="form-group">
										<label for="input-email">Email*</label>
										<input name="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="input-field" id="input-email"  placeholder="Enter your Email"/>
								</div>
								<div className="form-group">
										<label for="input-password">Password*</label>
										<input name="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input-field" id="input-password"  placeholder="Enter your password"/>
								</div>
								<div className="form-group">
										<label for="input-con-password">confirm password**</label>
										<input name="cpassword" type="password" value={confirmPass} onChange={(e)=>setConfirmPass(e.target.value)} className="input-field" id="input-con-password"  placeholder="Enter your Confirm Password"/>
								</div>
								{/* <div className="form-group">
										<select value={select} onChange={(e)=>setSelect(e.target.value)}>
											<option value="0">BTC</option>
											<option value="1">USD</option>
											<option value="2">EUR</option>
										</select>
								</div> */}
								<div className="form-group">
									<div className="check-group">
											<input type="checkbox" className="check-box-field" id="input-terms" checked/>
											<label for="input-terms">
													I agree with <a href="#">terms and Conditions</a> and  <a href="#">privacy policy</a>
											</label>
									</div>
								</div>
								<div className="form-group">
									<button onClick={signup} type="submit" className="mybtn1">Take Bonus</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				</div>
			</div>


        </>
    );
};

export default Joinuspopup;