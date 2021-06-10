import React from "react";
import './style.css';
import "./bootstrap.min.css";
import "./responsive.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';



const Featuredgame = () => {
    return(
        <>

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
												<a style={{textDecoration:"none"}} href="#" className="link">
								     			read more <ArrowForwardIcon/>
												 </a>
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
												<a style={{textDecoration:"none"}} href="#" className="link">
												read more <ArrowForwardIcon/>
												</a>
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
												<a style={{textDecoration:"none"}} href="#" className="link">
												read more <ArrowForwardIcon/>
												</a>
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
               
				
					    <div className="item" style={{width:"300px"}}>
							<div className="single-game">
								<img src="./images/game/icon1.png" alt=""/>
								<a style={{textDecoration:"none"}} href="#" className="mybtn2">
								PLay NoW !
								</a>
							</div>
						</div>
						<div className="item" style={{width:"300px"}}>
							<div className="single-game">
									<img src="./images/game/icon2.png" alt=""/>
									<a style={{textDecoration:"none"}} href="#" className="mybtn2">
									PLay NoW !
									</a>
							</div>
						</div>
						<div className="item" style={{width:"300px"}}>
							<div className="single-game">
									<img src="./images/game/icon3.png" alt=""/>
									<a style={{textDecoration:"none"}} href="#" className="mybtn2">
									PLay NoW !
									</a>
							</div>
						</div>
						<div className="item" style={{width:"300px"}}>
							<div className="single-game">
									<img src="./images/game/icon2.png" alt=""/>
									<a style={{textDecoration:"none"}} href="#" className="mybtn2">
									PLay NoW !
									</a>
							</div>
						</div> 
					</div>
				</div> 
			</div>
		</div>
	</section>

        </>
    );
};

export default Featuredgame;