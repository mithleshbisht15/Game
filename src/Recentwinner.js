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


const Recentwinner = () => {
    return(
        <>

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
							<a style={{textDecoration:"none"}} class="mybtn2" href="#">
							View All
							</a>
						</div>
					</div>
			</div>
		</section> 


        </>

    );
};

export default Recentwinner;