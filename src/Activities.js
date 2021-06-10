import React from "react";
import './style.css';
import "./bootstrap.min.css";
import "./responsive.css";



const Activities = () => {
    return(
        <>

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

        </>
    );
};

export default Activities;