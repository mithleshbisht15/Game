import React from "react";
import './style.css';
import "./bootstrap.min.css";
import "./responsive.css";
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TelegramIcon from '@material-ui/icons/Telegram';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


const Head = () => {
    return (
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
											<MailIcon/>	info@Dooplo.com
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
															<ShoppingCartIcon style={{color:"white"}}/>
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
															<ShoppingCartIcon style={{color:"white"}}/>
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
															<ShoppingCartIcon style={{color:"white"}}/>
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
														<ShoppingCartIcon style={{color:"white"}}/>
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
												<a href="#" className="link-btn">Cart Page</a>
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
										<a href="#" className="sign-in" data-toggle="modal" data-target="#login">
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
										<a className="nav-link" href="play.html">Play
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
								<a href="#" className="mybtn1"  data-toggle="modal" data-target="#signin"> Join us</a>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>

</header>





<div className="hero-area">
		<div className="container">
			<div className="row">
				<div className="col-lg-5 d-flex align-self-center">
					<div className="left-content">
						<div className="content">
							<h5 className="subtitle">
								New Crypto Game
							</h5>
							<h1 className="title">
									PLay To WIN
							</h1>
							<p className="text">
									Play, Invest,Exchange and Join the
									Contest with high rewards at Dooplo!	
							</p>
							<div className="links">
								<a href="#" className="mybtn1 link1">Get Started Now!</a>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-7">
					<div className="hero-img2 d-block d-md-none">
						<img src=".\images\heroarea.png" alt=""/>
					</div>
					<div className="hero-img d-none d-md-block">
						<img className="img-fluid full-image" src="./images/heroarea.png" alt=""/>
						<img className="shape phone" src="./images/h-shapes/phone.png" alt=""/>
						<img className="shape man" src="./images/h-shapes/man222.png" alt=""/>
						<img className="shape ripple" src="./images/h-shapes/ripple.png" alt=""/>
						<img className="shape ripple2" src="./images/h-shapes/ripple1.png" alt=""/>
						<img className="shape bitcoin1" src="./images/h-shapes/bitcoin1.png" alt=""/>
						<img className="shape bitcoin2" src="./images/h-shapes/bitcoin2.png" alt=""/>
						<img className="shape shape-icon" src="./images/h-shapes/shape.png" alt=""/>
						<img className="shape award-bg" src="./images/h-shapes/award/bg.png" alt=""/>
						<img className="shape award" src="./images/h-shapes/award/award.png" alt=""/>
						<img className="shape gift-bg" src="./images/h-shapes/giftbox/bg.png" alt=""/>
						<img className="shape gift" src="./images/h-shapes/giftbox/gift.png" alt=""/>
						<img className="shape shield-bg" src="./images/h-shapes/shield/bg.png" alt=""/>
						<img className="shape shield" src="./images/h-shapes/shield/shield.png" alt=""/>
					</div>
				</div>
			</div>
		</div>
	</div>






    <section className="featured-game">
		<div className="features">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="feature-box">
							<div className="feature-box-inner">
								<div className="row">
									<div className="col-lg-4 col-md-6">
										<div className="single-feature">
											<div className="icon one">
												<img src="./images/feature/icon1.png" alt=""/>
											</div>
											<div className="content">
												<h4 className="title">
													Exclusive Offer
												</h4>
												<a href="#" className="link">read more <ArrowForwardIcon/></a>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div className="single-feature">
											<div className="icon two">
												<img src="./images/feature/icon2.png" alt=""/>
											</div>
											<div className="content">
												<h4 className="title">
													Provably Fair
												</h4>
												<a href="#" className="link">read more <ArrowForwardIcon/></a>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div className="single-feature">
											<div className="icon three">
												<img src="./images/feature/icon3.png" alt=""/>
											</div>
											<div className="content">
												<h4 className="title">
														24/7 Support
												</h4>
												<a href="#" className="link">read more <ArrowForwardIcon/></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8 col-md-10">
					<div className="section-heading">
						<h5 className="subtitle">
								Try to check out our
						</h5> 
						<h2 className="title">
								featured games
						</h2>
						<p className="text">
								Check out our latest featured game! To meet today's challenges & earn cryptocurrency. Top 10 players receive prizes every hour!
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<div className="game-slider">
						<div className="item">
							<div className="single-game">
								<img src="./images/game/icon1.png" alt=""/>
								<a href="#" className="mybtn2">PLay NoW !</a>
							</div>
						</div>
						<div className="item">
							<div className="single-game">
									<img src="./images/game/icon2.png" alt=""/>
									<a href="#" className="mybtn2">PLay NoW !</a>
							</div>
						</div>
						<div className="item">
							<div className="single-game">
									<img src="./images/game/icon3.png" alt=""/>
									<a href="#" className="mybtn2">PLay NoW !</a>
							</div>
						</div>
						<div className="item">
							<div className="single-game">
									<img src="./images/game/icon2.png" alt=""/>
									<a href="#" className="mybtn2">PLay NoW !</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>




    <section className="activities">
		 <img className="shape shape1" src="./images/people/shape1.png" alt=""/>
		 <img className="shape shape2" src="./images/people/shape2.png" alt=""/>
		 <img className="shape shape3" src="./images/people/shape3.png" alt=""/>
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8 col-md-10">
					<div className="section-heading">
						<h5 className="subtitle">
							The Smarter Way 
						</h5>
						<h2 className="title">
							Lend and Borrow
						</h2>
						<p className="text">
							The World's First Crypto Lending Marketplace and 
							Affordable and competitive interest rates
						</p>
					</div>
				</div>
			</div>


            <div className="row">
				<div className="col-lg-12">
					<div className="tab-menu-area">
						<ul className="nav nav-lend mb-3" id="pills-tab" role="tablist">
							<li className="nav-item">
								<a className="nav-link active" id="pills-all-bets-tab" data-toggle="pill" href="#pills-all-bets" role="tab" aria-controls="pills-all-bets" aria-selected="true">All bets</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="pills-my-bets-tab" data-toggle="pill" href="#pills-my-bets" role="tab" aria-controls="pills-my-bets" aria-selected="false">my bets</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="pills-my-jackpots-tab" data-toggle="pill" href="#pills-my-jackpots" role="tab" aria-controls="pills-my-jackpots" aria-selected="false">jackpots</a>
							</li>
						</ul>
					</div>
					<div className="tab-content" id="pills-tabContent">
						<div className="tab-pane fade show active" id="pills-all-bets" role="tabpanel" aria-labelledby="pills-all-bets-tab">
							<div className="responsive-table">
								<table className="table">
								<thead>
									<tr>
									<th scope="col">USER</th>
									<th scope="col">BET ID</th>
									<th scope="col">BET AMOUNT</th>
									<th scope="col">CHANCE</th>
									<th scope="col">GAME</th>
									<th scope="col">PROFIT</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<img src="./images/people/p1.png" alt=""/>
											Tom Bass
										</td>
										<td>
											b799b8724b
										</td>
										<td>
											<img src="./images/icon1.png" alt=""/>
											0.00000051
										</td>
										<td>70%</td>
										<td>Dice</td>
										<td>
											<img src="./images/icon1.png" alt=""/>
											0.00000051
										</td>
									</tr>
									<tr>
										<td>
											<img src="./images/people/p2.png" alt=""/>
											Tom Bass
										</td>
										<td>
											b799b8724b
										</td>
										<td>
											<img src="./images/icon2.png" alt=""/>
											0.00000051
										</td>
										<td>70%</td>
										<td>Dice</td>
										<td>
											<img src="./images/icon2.png" alt=""/>
											0.00000051
										</td>
									</tr>
									<tr>
										<td>
											<img src="./images/people/p3.png" alt=""/>
											Tom Bass
										</td>
										<td>
											b799b8724b
										</td>
										<td>
											<img src="./images/icon3.png" alt=""/>
											0.00000051
										</td>
										<td>70%</td>
										<td>Dice</td>
										<td>
											<img src="./images/icon3.png" alt=""/>
											0.00000051
										</td>
									</tr>
									<tr>
										<td>
											<img src="./images/people/p4.png" alt=""/>
											Tom Bass
										</td>
										<td>
											b799b8724b
										</td>
										<td>
											<img src="./images/icon4.png" alt=""/>
											0.00000051
										</td>
										<td>70%</td>
										<td>Dice</td>
										<td>
											<img src="./images/icon4.png" alt=""/>
											0.00000051
										</td>
									</tr>
									<tr>
										<td>
											<img src="./images/people/p5.png" alt=""/>
											Tom Bass
										</td>
										<td>
											b799b8724b
										</td>
										<td>
											<img src="./images/icon5.png" alt=""/>
											0.00000051
										</td>
										<td>70%</td>
										<td>Dice</td>
										<td>
											<img src="./images/icon5.png" alt=""/>
											0.00000051
										</td>
									</tr>
									<tr>
										<td>
											<img src="./images/people/p6.png" alt=""/>
											Tom Bass
										</td>
										<td>
											b799b8724b
										</td>
										<td>
											<img src="./images/icon1.png" alt=""/>
											0.00000051
										</td>
										<td>70%</td>
										<td>Dice</td>
										<td>
											<img src="./images/icon1.png" alt=""/>
											0.00000051
										</td>
									</tr>
									<tr>
										<td>
											<img src="./images/people/p1.png" alt=""/>
											Tom Bass
										</td>
										<td>
											b799b8724b
										</td>
										<td>
											<img src="./images/icon2.png" alt=""/>
											0.00000051
										</td>
										<td>70%</td>
										<td>Dice</td>
										<td>
											<img src="./images/icon2.png" alt=""/>
											0.00000051
										</td>
									</tr>
									<tr>
										<td>
											<img src="./images/people/p2.png" alt=""/>
											Tom Bass
										</td>
										<td>
											b799b8724b
										</td>
										<td>
											<img src="./images/icon3.png" alt=""/>
											0.00000051
										</td>
										<td>70%</td>
										<td>Dice</td>
										<td>
											<img src="./images/icon3.png" alt=""/>
											0.00000051
										</td>
									</tr>
									<tr>
										<td>
											<img src="./images/people/p3.png" alt=""/>
											Tom Bass
										</td>
										<td>
											b799b8724b
										</td>
										<td>
											<img src="./images/icon4.png" alt=""/>
											0.00000051
										</td>
										<td>70%</td>
										<td>Dice</td>
										<td>
											<img src="./images/icon4.png" alt=""/>
											0.00000051
										</td>
									</tr>
									<tr>
										<td>
											<img src="./images/people/p4.png" alt=""/>
											Tom Bass
										</td>
										<td>
											b799b8724b
										</td>
										<td>
											<img src="./images/icon5.png" alt=""/>
											0.00000051
										</td>
										<td>70%</td>
										<td>Dice</td>
										<td>
											<img src="./images/icon5.png" alt=""/>
											0.00000051
										</td>
									</tr>
								</tbody>
								</table>
							</div>
						</div>



                        <div className="tab-pane fade" id="pills-my-bets" role="tabpanel" aria-labelledby="pills-my-bets-tab">
							<div className="responsive-table">
									<table className="table">
											<thead>
												<tr>
												<th scope="col">USER</th>
												<th scope="col">BET ID</th>
												<th scope="col">BET AMOUNT</th>
												<th scope="col">CHANCE</th>
												<th scope="col">GAME</th>
												<th scope="col">PROFIT</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<img src="./images/people/p1.png" alt=""/>
														Tom Bass
													</td>
													<td>
														b799b8724b
													</td>
													<td>
														<img src="./images/icon1.png" alt=""/>
														0.00000051
													</td>
													<td>70%</td>
													<td>Dice</td>
													<td>
														<img src="./images/icon1.png" alt=""/>
														0.00000051
													</td>
												</tr>
												<tr>
													<td>
														<img src="./images/people/p2.png" alt=""/>
														Tom Bass
													</td>
													<td>
														b799b8724b
													</td>
													<td>
														<img src="./images/icon2.png" alt=""/>
														0.00000051
													</td>
													<td>70%</td>
													<td>Dice</td>
													<td>
														<img src="./images/icon2.png" alt=""/>
														0.00000051
													</td>
												</tr>
												<tr>
													<td>
														<img src="./images/people/p3.png" alt=""/>
														Tom Bass
													</td>
													<td>
														b799b8724b
													</td>
													<td>
														<img src="./images/icon3.png" alt=""/>
														0.00000051
													</td>
													<td>70%</td>
													<td>Dice</td>
													<td>
														<img src="./images/icon3.png" alt=""/>
														0.00000051
													</td>
												</tr>
												<tr>
													<td>
														<img src="./images/people/p4.png" alt=""/>
														Tom Bass
													</td>
													<td>
														b799b8724b
													</td>
													<td>
														<img src="./images/icon4.png" alt=""/>
														0.00000051
													</td>
													<td>70%</td>
													<td>Dice</td>
													<td>
														<img src="./images/icon4.png" alt=""/>
														0.00000051
													</td>
												</tr>
												<tr>
													<td>
														<img src="./images/people/p5.png" alt=""/>
														Tom Bass
													</td>
													<td>
														b799b8724b
													</td>
													<td>
														<img src="./images/icon5.png" alt=""/>
														0.00000051
													</td>
													<td>70%</td>
													<td>Dice</td>
													<td>
														<img src="./images/icon5.png" alt=""/>
														0.00000051
													</td>
												</tr>
												<tr>
													<td>
														<img src="./images/people/p6.png" alt=""/>
														Tom Bass
													</td>
													<td>
														b799b8724b
													</td>
													<td>
														<img src="./images/icon1.png" alt=""/>
														0.00000051
													</td>
													<td>70%</td>
													<td>Dice</td>
													<td>
														<img src="./images/icon1.png" alt=""/>
														0.00000051
													</td>
												</tr>
												<tr>
													<td>
														<img src="./images/people/p1.png" alt=""/>
														Tom Bass
													</td>
													<td>
														b799b8724b
													</td>
													<td>
														<img src="./images/icon2.png" alt=""/>
														0.00000051
													</td>
													<td>70%</td>
													<td>Dice</td>
													<td>
														<img src="./images/icon2.png" alt=""/>
														0.00000051
													</td>
												</tr>
												<tr>
													<td>
														<img src="./images/people/p2.png" alt=""/>
														Tom Bass
													</td>
													<td>
														b799b8724b
													</td>
													<td>
														<img src="./images/icon3.png" alt=""/>
														0.00000051
													</td>
													<td>70%</td>
													<td>Dice</td>
													<td>
														<img src="./images/icon3.png" alt=""/>
														0.00000051
													</td>
												</tr>
												<tr>
													<td>
														<img src="./images/people/p3.png" alt=""/>
														Tom Bass
													</td>
													<td>
														b799b8724b
													</td>
													<td>
														<img src="./images/icon4.png" alt=""/>
														0.00000051
													</td>
													<td>70%</td>
													<td>Dice</td>
													<td>
														<img src="./images/icon4.png" alt=""/>
														0.00000051
													</td>
												</tr>
												<tr>
													<td>
														<img src="./images/people/p4.png" alt=""/>
														Tom Bass
													</td>
													<td>
														b799b8724b
													</td>
													<td>
														<img src="./images/icon5.png" alt=""/>
														0.00000051
													</td>
													<td>70%</td>
													<td>Dice</td>
													<td>
														<img src="./images/icon5.png" alt=""/>
														0.00000051
													</td>
												</tr>
											</tbody>
											</table>
							</div>
						</div> 

                        <div className="tab-pane fade" id="pills-my-jackpots" role="tabpanel" aria-labelledby="pills-my-jackpots-tab">
							<div className="responsive-table">
									<table className="table">
											<thead>
												<tr>
												<th scope="col">USER</th>
												<th scope="col">BET ID</th>
												<th scope="col">BET AMOUNT</th>
												<th scope="col">CHANCE</th>
												<th scope="col">GAME</th>
												<th scope="col">PROFIT</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<img src="./images/people/p1.png" alt=""/>
														Tom Bass
													</td>
													<td>
														b799b8724b
													</td>
													<td>
														<img src="./images/icon1.png" alt=""/>
														0.00000051
													</td>
													<td>70%</td>
													<td>Dice</td>
													<td>
														<img src="./images/icon1.png" alt=""/>
														0.00000051
													</td>
												</tr>
												<tr>
													<td>
														<img src="./images/people/p2.png" alt=""/>
														Tom Bass
													</td>
													<td>
														b799b8724b
													</td>
													<td>
														<img src="./images/icon2.png" alt=""/>
														0.00000051
													</td>
													<td>70%</td>
													<td>Dice</td>
													<td>
														<img src="./images/icon2.png" alt=""/>
														0.00000051
													</td>
												</tr>
												<tr>
													<td>
														<img src="./images/people/p3.png" alt=""/>
														Tom Bass
													</td>
													<td>
														b799b8724b
													</td>
													<td>
														<img src="./images/icon3.png" alt=""/>
														0.00000051
													</td>
													<td>70%</td>
													<td>Dice</td>
													<td>
														<img src="./images/icon3.png" alt=""/>
														0.00000051
													</td>
												</tr>
												<tr>
													<td>
														<img src="./images/people/p4.png" alt=""/>
														Tom Bass
													</td>
													<td>
														b799b8724b
													</td>
													<td>
														<img src="./images/icon4.png" alt=""/>
														0.00000051
													</td>
													<td>70%</td>
													<td>Dice</td>
													<td>
														<img src="./images/icon4.png" alt=""/>
														0.00000051
													</td>
												</tr>
												<tr>
													<td>
														<img src="./images/people/p5.png" alt=""/>
														Tom Bass
													</td>
													<td>
														b799b8724b
													</td>
													<td>
														<img src="./images/icon5.png" alt=""/>
														0.00000051
													</td>
													<td>70%</td>
													<td>Dice</td>
													<td>
														<img src="./images/icon5.png" alt=""/>
														0.00000051
													</td>
												</tr>
												<tr>
													<td>
														<img src="./images/people/p6.png" alt=""/>
														Tom Bass
													</td>
													<td>
														b799b8724b
													</td>
													<td>
														<img src="./images/icon1.png" alt=""/>
														0.00000051
													</td>
													<td>70%</td>
													<td>Dice</td>
													<td>
														<img src="./images/icon1.png" alt=""/>
														0.00000051
													</td>
												</tr>
												<tr>
													<td>
														<img src="./images/people/p1.png" alt=""/>
														Tom Bass
													</td>
													<td>
														b799b8724b
													</td>
													<td>
														<img src="./images/icon2.png" alt=""/>
														0.00000051
													</td>
													<td>70%</td>
													<td>Dice</td>
													<td>
														<img src="./images/icon2.png" alt=""/>
														0.00000051
													</td>
												</tr>
												<tr>
													<td>
														<img src="./images/people/p2.png" alt=""/>
														Tom Bass
													</td>
													<td>
														b799b8724b
													</td>
													<td>
														<img src="./images/icon3.png" alt=""/>
														0.00000051
													</td>
													<td>70%</td>
													<td>Dice</td>
													<td>
														<img src="./images/icon3.png" alt=""/>
														0.00000051
													</td>
												</tr>
												<tr>
													<td>
														<img src="./images/people/p3.png" alt=""/>
														Tom Bass
													</td>
													<td>
														b799b8724b
													</td>
													<td>
														<img src="./images/icon4.png" alt=""/>
														0.00000051
													</td>
													<td>70%</td>
													<td>Dice</td>
													<td>
														<img src="./images/icon4.png" alt=""/>
														0.00000051
													</td>
												</tr>
												<tr>
													<td>
														<img src="./images/people/p4.png" alt=""/>
														Tom Bass
													</td>
													<td>
														b799b8724b
													</td>
													<td>
														<img src="./images/icon5.png" alt=""/>
														0.00000051
													</td>
													<td>70%</td>
													<td>Dice</td>
													<td>
														<img src="./images/icon5.png" alt=""/>
														0.00000051
													</td>
												</tr>
											</tbody>
											</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>



        <div className="funfact">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="single-fun">
							<img src="./images/funfact/icon1.png" alt=""/>
							<div className="count-area">
								<div className="count">93K</div>
							</div>
							<p>
									Players
							</p>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="single-fun">
							<img src="./images/funfact/icon2.png" alt=""/>
							<div className="count-area">
								<div className="count">99+</div>
							</div>
							<p>
									Games
							</p>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="single-fun">
							<img src="./images/funfact/icon3.png" alt=""/>
							<div className="count-area">
								<div className="count">70+</div>
							</div>
							<p>
									Winners
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>    
        </section>



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
							<a href="#" className="mybtn1">Play  Now!</a>
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



    <section className="recent-winners">
			<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8 col-md-10">
							<div className="section-heading">
								<h5 className="subtitle">
									Try to Check out our
								</h5>
								<h2 className="title">
										Recent Winners
								</h2>
								<p className="text">
									We update our site regularly; more and more winners are added every day! To locate the most recent winner's information
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="single-winer">
								<div className="top-area">
									<div className="left">
										<h4 className="name">
												Leroy Roy 
										</h4>
										<p className="date">
												01.08.2019
										</p>
									</div>
									<div className="right">
										<p className="id">#5747e75482</p>
									</div>
								</div>
								<div className="bottom-area">
									<div className="left">
											0.099 ETH
									</div>
									<div className="right">
											<img src="./images/icon2.png" alt=""/>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="single-winer">
								<div className="top-area">
									<div className="left">
										<h4 className="name">
												Jeff Mack
										</h4>
										<p className="date">
												01.08.2019
										</p>
									</div>
									<div className="right">
										<p className="id">#5747e75482</p>
									</div>
								</div>
								<div className="bottom-area">
									<div className="left">
											0.099 ETH
									</div>
									<div className="right">
											<img src="./images/icon2.png" alt=""/>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="single-winer">
								<div class="top-area">
									<div class="left">
										<h4 class="name">
												Neal Morris
										</h4>
										<p class="date">
												01.08.2019
										</p>
									</div>
									<div class="right">
										<p class="id">#5747e75482</p>
									</div>
								</div>
								<div class="bottom-area">
									<div class="left">
											0.099 ETH
									</div>
									<div class="right">
											<img src="./images/icon2.png" alt=""/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12 text-xl-center">
							<a class="mybtn2" href="#">View All </a>
						</div>
					</div>
			</div>
		</section> 




        <footer className="footer" id="footer">
		<div className="subscribe-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="subscribe-box">
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
					<div className="footer-widget info-link-widget">
						<h4 className="title">
							About 
						</h4>
						<ul className="link-list">
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
							<p>Copyright © 2019.All Rights Reserved By <a href="#">Dooplo</a>
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
									<input type="email" className="input-field" id="login-input-email"  placeholder="Enter your Email"/>
							</div>
							<div className="form-group">
									<label for="login-input-password">Password*</label>
									<input type="password" className="input-field" id="login-input-password"  placeholder="Password"/>
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
								   <button type="submit" className="mybtn1">Log In</button>
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
							<form action="#" method="POST">
								<div className="form-group">
										<label for="input-name">Name*</label>
										<input type="text" className="input-field" id="input-name"  placeholder="Enter your Name"/>
								</div>
								<div className="form-group">
										<label for="input-email">Email*</label>
										<input type="email" className="input-field" id="input-email"  placeholder="Enter your Email"/>
								</div>
								<div className="form-group">
										<label for="input-password">Password*</label>
										<input type="password" className="input-field" id="input-password"  placeholder="Enter your password"/>
								</div>
								<div className="form-group">
										<label for="input-con-password">confirm password**</label>
										<input type="password" className="input-field" id="input-con-password"  placeholder="Enter your Confirm Password"/>
								</div>
								<div className="form-group">
										<select>
											<option value="0">BTC</option>
											<option value="1">USD</option>
											<option value="2">EUR</option>
										</select>
								</div>
								<div className="form-group">
									<div className="check-group">
											<input type="checkbox" className="check-box-field" id="input-terms" checked/>
											<label for="input-terms">
													I agree with <a href="#">terms and Conditions</a> and  <a href="#">privacy policy</a>
											</label>
									</div>
								</div>
								<div className="form-group">
									<button type="submit" className="mybtn1">Take Bonus</button>
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

export default Head;