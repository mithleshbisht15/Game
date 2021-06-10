import React from "react";
import './style.css';
import "./bootstrap.min.css";
import "./responsive.css";
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ClearIcon from '@material-ui/icons/Clear';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';



const Header = () => {
    return(
        <>
         <header className="header">
		<section className="top-header">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="content">


							<div className="left-content">
								<ul className="left-list">
									<li>
										<p>
											<HeadsetMicIcon/>	Support
										</p>
									</li>
									<li>
										<p>
											<MailIcon/>
											 <a style={{color:"#a1aed4", textDecoration:"none"}} href="mailto:info@Dooplo.com">info@Dooplo.com</a>
										</p>
									</li>
									<li>
										<div className="language-selector">
											<select name="language" className="language">
												<option value="1">English</option>
												<option value="2">France</option>
												<option value="3">Japan</option>
											</select>
										</div>
									</li>
								</ul>
							</div>
							<div className="right-content">
								<ul className="right-list">
									<li>
										<div className="cart-icon tm-dropdown">
											<ShoppingCartIcon style={{color:"#a1aed4"}}/>
											<span className="cart-count">10</span>
											<div className="tm-dropdown-menu">
												<ul className="list">
													<li className="list-item">
															<div className="close">
															<ClearIcon style={{color:"white"}}/>
															</div>
														<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
													</li>
													<li className="list-item">
															<div className="close">
															<ClearIcon style={{color:"white"}}/>
															</div>
														<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
													</li>
													<li className="list-item">
															<div className="close">
															<ClearIcon style={{color:"white"}}/>
															</div>
														<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
													</li>
													<li className="list-item">
														<div className="close">
														<ClearIcon style={{color:"white"}}/>
														</div>
														<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
													</li>
												</ul>
												<a style={{color:"#a1aed4", textDecoration:"none"}} href="#" className="link-btn">
												Cart Page
												</a>
											</div>
										</div>
                                        
									</li>
									<li>
										<div className="notofication tm-dropdown">
											<NotificationsIcon style={{color:"#a1aed4"}}/>
											<span className="count">11</span>
											<div className="tm-dropdown-menu">
													<ul className="list">
														<li>
															<a  href="#">
															<NotificationsIcon/>
																Invest Exchange
															</a>
														</li>
														<li>
															<a href="#">
															<NotificationsIcon/>
																Invest Exchange
															</a>
														</li>
														<li>
															<a href="#">
															<NotificationsIcon/>
																Invest Exchange
															</a>
														</li>
														<li>
															<a href="#">
															<NotificationsIcon/>
																Invest Exchange
															</a>
														</li>
														<li>
															<a href="#">
															<NotificationsIcon/>
																Invest Exchange
															</a>
														</li>
													</ul>
												</div>
										</div>
									</li>
									<li>
										<a style={{textDecoration:"none"}} href="#" className="sign-in" data-toggle="modal" data-target="#login">
											<PersonIcon/> Sign In
										</a>
									</li>
								</ul>


							</div>
						</div>
					</div>
				</div>
			</div>
		</section>




        <div className="mainmenu-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">                 
						<nav className="navbar navbar-expand-lg navbar-light">
							<a className="navbar-brand" href="index.html">
								<img src="./images/logo.png" alt=""/>
							</a>
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_menu" aria-controls="main_menu"
								aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse fixed-height" id="main_menu">
								<ul className="navbar-nav ml-auto">
									<li className="nav-item dropdown">
										<a className="nav-link active dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true"
											aria-expanded="false">
											Home
										<div className="mr-hover-effect"></div>
										</a>
										<ul className="dropdown-menu" >
											<li><a className="dropdown-item" href="index.html"> <i className="fa fa-angle-double-right"></i>Home 1</a></li>
											<li><a className="dropdown-item" href="index2.html"> <i className="fa fa-angle-double-right"></i> Home 2</a></li>
										</ul>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">Play
												<div className="mr-hover-effect"></div></a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="lottery.html">lottery
												<div className="mr-hover-effect"></div></a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="tournaments.html">tournaments
												<div className="mr-hover-effect"></div></a>
									</li>
									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true"
											aria-expanded="false">
											Pages
											<div className="mr-hover-effect"></div>
										</a>
										<ul className="dropdown-menu" >
											<li><a className="dropdown-item" href="about.html"> <i className="fa fa-angle-double-right"></i>About</a></li>
											<li><a className="dropdown-item" href="affiliate.html"> <i className="fa fa-angle-double-right"></i>Affiliate</a></li>
											<li><a className="dropdown-item" href="awards.html"> <i className="fa fa-angle-double-right"></i>Awards</a></li>
											<li><a className="dropdown-item" href="bonus.html"> <i className="fa fa-angle-double-right"></i>Bonus</a></li>
											<li><a className="dropdown-item" href="cart.html"> <i className="fa fa-angle-double-right"></i>Cart</a></li>
											<li><a className="dropdown-item" href="faq.html"> <i className="fa fa-angle-double-right"></i>Faq</a></li>
											<li><a className="dropdown-item" href="how-it-work.html"> <i className="fa fa-angle-double-right"></i>How It Work</a></li>
											<li><a className="dropdown-item" href="terms-conditions.html"> <i className="fa fa-angle-double-right"></i>Terms & Condition</a></li>
											<li><a className="dropdown-item" href="terms-conditions-details.html"> <i className="fa fa-angle-double-right"></i>Condition Details</a></li>
											<li><a className="dropdown-item" href="404.html"> <i className="fa fa-angle-double-right"></i>404</a></li>
										</ul>
									</li>
									<li className="nav-item">
											<a className="nav-link" href="contact.html">Contact
													<div className="mr-hover-effect"></div></a>
										</li>
								</ul>
								<a style={{textDecoration:"none"}} href="#" className="mybtn1"  data-toggle="modal" data-target="#signin">
								 Join us
								</a>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>

</header>

        </>
    );
};

export default Header