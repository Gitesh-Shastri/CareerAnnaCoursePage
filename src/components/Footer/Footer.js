import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return(
		<footer className="footer">
			<div className="row">
				<div className="col col-md-6">
					<div className="row">
						<div className="col-md-12 footer_left_heading">
							careeranna
						</div>

						<div className="footer_copyright col-12 col-md-12 padding-none">
									<p>© CAREERANNA Pvt. Ltd. 2019</p>
								</div>
								<div className="col-md-12 social_icons">
														<ul className="list-inline">
															<li><a href="https://m.facebook.com/careerannacorp/"><i className="fab fa-facebook-f"></i></a></li>
															<li><a href="https://www.linkedin.com/company/careeranna"><i className="fab fa-linkedin"></i></a></li>
															<li><a href="https://www.instagram.com/careeranna"><i className="fab fa-instagram"></i></a></li>
															<li><a href="https://twitter.com/CareerAnna"><i className="fab fa-twitter"></i></a></li>
															<li><a href="https://www.youtube.com/channel/UCZmLZ68KNZotm3BxkGsuU4g"><i className="fab fa-youtube"></i></a></li>
														</ul>	
													</div>	

													<div className="col-md-12 subs_form row">
								
								<h4 className="col-md-12 padding-none">Subscribe to our newsletter</h4>									
								<form action="#" method="post" className="row col-md-12 padding-none">
									<div className="form-group col col-md-6 col-sm-6 padding-none">
										<input type="email" className="form-control" name="email" required=""  placeholder="Enter your Email" id="" />
									</div>
									<div className="col-md-5 col col-sm-6 padding-none">
										<button className="btn btn-primary" type="submit">Subscribe</button>
									</div>
								</form>
							</div> 
										
					</div>
				</div>
				<div className="col-md-6 row footer_left_links">
							{/* pl belongs to bootstrap 4 className for padding check documentation*/}
								<div className="col-md-3 col-6 pl-0 pr-0">
										<h6>FREE VIDEO RESOURCE</h6>
										<ul>
											  <li><a href="https://www.careeranna.com/english/free/videos" title="Finance"  >English Free Videos</a></li>
											  <li><a href="https://www.careeranna.com/hindi/free/videos" title="Marketing"  >Hindi Free Videos</a></li>
											  <li><a href="https://www.careeranna.com/tamil/free/videos" title="Marketing"  >Tamil Free Videos</a></li>
											  <li><a href="https://www.careeranna.com/telugu/free/videos" title="Human Resource"  >Telugu Free Videos</a></li>
											  
										</ul>
									</div>
									
									<div className="col-md-2 col-6 pl-0 pr-0">
											<h6>MBA</h6>
											<ul>
												<li><a href="https://www.careeranna.com/CAT" title="CAT" >CAT</a></li>
												<li><a href="https://www.careeranna.com/XAT" title="XAT"  >XAT</a></li>
												<li><a href="https://www.careeranna.com/NMAT" title="NMAT"  >NMAT</a></li>
												<li><a href="https://www.careeranna.com/SNAP" title="SNAP"  >SNAP</a></li>
												<li><a href="https://www.careeranna.com/TISSNET" title="TISSNET"  >TISSNET</a></li>
												<li><a href="https://www.careeranna.com/MICAT" title="MICAT"  >MICAT</a></li>
												<li><a href="https://www.careeranna.com/IIFT" title="IIFT"  >IIFT</a></li>
											</ul>
										</div>

										<div className="col-md-2 col-6 pl-0 pr-0">
										<h6>Certificate Courses</h6>
										<ul>
										<li><a href="https://www.careeranna.com/certification/machine-learning-course" title="Machine Learning"  >Machine Learning</a></li>
										<li><a href="https://www.careeranna.com/certification/artificial-intelligence-course" title="Artificial Intelligence"  >Artificial Intelligence</a></li>
										<li><a href="https://www.careeranna.com/certification/Certified-Associate-in-Material-Management" title="Material Management"  >Material Management</a></li>
										<li><a href="https://www.careeranna.com/certification/product-management" title="Product Management"  >Product Management</a></li>
										</ul>
										</div>
										<div className="col-md-2 col-6 pl-0 pr-0">
												<h6>RESOURCE</h6>
												<ul>
												  <li><a id="ga-14df32" href="https://www.careeranna.com/courses">Test Prep</a></li>
												  <li><a id="ga-41441e" href="https://www.careeranna.com/articles">Articles</a></li>
												</ul>
											</div>
											<div className="col-md-2 col-6 pl-0 pr-0">
													<h6>SUPPORT</h6>
													<ul>
													  <li><a id="ga-14df32" href="https://www.careeranna.com/careers">Jobs</a></li>
													  <li><a id="ga-2dc1d0" href="https://www.careeranna.com/about">About Us</a></li>
													  <li><a id="ga-2dc1d0" href="https://www.careeranna.com/contact">Contact Us</a></li>
													  <li><a id="ga-2dc1d0" href="https://www.careeranna.com/terms-of-service">Terms of Service</a></li>
													</ul>
												</div>
						</div>
			</div>
		</footer>
    );
  }
}

export default Footer;
