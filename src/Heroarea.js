import React from "react";
import './style.css';
import "./bootstrap.min.css";
import "./responsive.css";



const Heroarea = () => {
    return(
        <>

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
								<a style={{textDecoration:"none"}} href="#" className="mybtn1 link1">Get Started Now!</a>
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


        </>
    );
};

export default Heroarea;