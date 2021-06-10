import React from "react"
import './style.css';
import "./bootstrap.min.css";
import "./responsive.css";
import TelegramIcon from '@material-ui/icons/Telegram';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


const Footer = () => {
    return(
        <>

<footer className="footer" id="footer" >
		<div className="subscribe-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="subscribe-box" >
								<form action="#">
							<div className="row">
								<div className="col-lg-12">
									<div className="heading-area">
											<h5 className="sub-title">
													subscribe to Dooplo
											</h5>
											<h4 className="title">
													To Get Exclusive Benefits
											</h4>
									</div>
								</div>
								<div className="col-lg-3 col-4 d-flex align-self-center">
									<div className="icon">
										<img src="./images/mail-box.png" alt=""/>
									</div>
								</div>
								<div className="col-lg-6 col-8 d-flex align-self-center">
									<div className="form-area">
											<input type="text" placeholder="Your Email Address"/>
									</div>
								</div>
								<div className="col-lg-3 d-flex align-self-center">
									<div className="button-area">
										<button className="mybtn1" type="submit">Subscribe
											<span><TelegramIcon/></span>
										</button>
									</div>
								</div>
							</div>
						</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="container">
			<div className="row">
				<div className="col-sm-6 col-lg-3">
					<div className="footer-widget info-link-widget" >
						<h4 className="title">
							About 
						</h4>
						<ul className="link-list" >
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/>	About Us
								</a>
							</li>
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/>	Contact Us
								</a>
							</li>
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/>	Latest Blog
								</a>
							</li>
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/>	Authenticity Guarantee
								</a>
							</li>
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/>	Customer Reviews
								</a>
							</li>
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/>	Privacy Policy

								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-sm-6 col-lg-3">
					<div className="footer-widget info-link-widget">
						<h4 className="title">
							My Account
						</h4>
						<ul className="link-list">
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/> Manage Your Account
								</a>
							</li>
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/> How to Deposit
								</a>
							</li>
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/> How to Withdraw
								</a>
							</li>
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/> Account Varification
								</a>
							</li>
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/> Safety & Security
								</a>
							</li>
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/> Membership Level

								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-sm-6 col-lg-3">
					<div className="footer-widget info-link-widget">
						<h4 className="title">
							help center 
						</h4>
						<ul className="link-list">
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/>Help centre
								</a>
							</li>
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/>FAQ
								</a>
							</li>
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/>Quick Start Guide
								</a>
							</li>
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/>Tutorials
								</a>
							</li>
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/>Borrow
								</a>
							</li>
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/>Lend

								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-sm-6 col-lg-3">
					<div className="footer-widget info-link-widget">
						<h4 className="title">
							Legal Info
						</h4>
						<ul className="link-list">
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/>Risk Warnings
								</a>
							</li>
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/>Privacy Notice
								</a>
							</li>
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/>Security
								</a>
							</li>
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/>Terms of Service
								</a>
							</li>
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/>Become Affiliate
								</a>
							</li>
							<li>
								<a href="#">
									<DoubleArrowIcon style={{height:"15"}}/>Complaints Policy

								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="copy-bg">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="left-area">
							<p>Copyright © 2019.All Rights Reserved By <a style={{textDecoration:"none", color:"#a1aed4"}} href="#">
							 Dooplo
							</a>
							</p>
						</div>
					</div>
					<div className="col-lg-7">
						<ul className="copright-area-links">
							<li>
								<a href="#">Terms Of Use</a>
							</li>
							<li>
								<a href="#">Privacy Policy</a>
							</li>
							<li>
								<a href="#">Gamble</a>
							</li>
							<li>
								<a href="#">Aware</a>
							</li>
							<li>
								<a href="#">Help Cente</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer> 
  
     
    
	<div className="bottomtotop">
		<KeyboardArrowRightIcon className="i"/>
	</div>
	


        </>
    );
};

export default Footer;