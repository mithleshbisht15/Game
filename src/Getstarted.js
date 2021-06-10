import React from "react";
import './style.css';
import "./bootstrap.min.css";
import "./responsive.css";




const Getstarted = () => {
    return(
        <>

<section className="get-start">
		<div className="container">
			<div className="row">
				<div className="col-lg-7 d-flex align-self-center">
					<div className="left-area">
						<div className="section-heading">
							<h5 className="subtitle">
								every day lots of  wins
							</h5>
							<h2 className="title ">
									be one of them
							</h2>
							<p className="text">
									Get started in less than 5 min - no credit card 
									required.Gain early access to Dooplo and  experience crypto like never before. 
							</p>
							<a style={{textDecoration:"none"}} href="#" className="mybtn1">
							Play  Now!
							</a>
						</div>
					</div>
				</div>
				<div className="col-lg-5">
					<div className="right-image">
						<img src="./images/get-start.png" alt=""/>
					</div>
				</div>
			</div>
		</div>
	</section> 

        </>
    );
};

export default Getstarted;