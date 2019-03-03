import React, { Component } from 'react';

class Course_Content extends Component {
	render() {
		import('./Course_content.css');

		return (
			<section className="course_content">
				<div className="container_main">
					<div className="row fst_wrapper">
						<h2>
							<span className="course_grey">COURSE CONTENT</span>
						</h2>
						<div className="col-md-6 col-12 content_part left_wrapper">
							<div className="col-md-12 col-12 content-tab px-0">
								<h2>Online CAT Coaching Overview</h2>
								<ul>
									<li>300+ Hours of Videos covering entire CAT Online Coaching 2019 syllabus.</li>
									<li>Concepts covered from Basics to Advanced to Past Year Questions.</li>
									<li>Personalised CAT Study Plan as per your daily schedule.</li>
								</ul>
							</div>
							<div className="col-md-12 col-12 content-tab px-0">
								<h2>CAT Results 2018 and 2017</h2>
								<ul>
									<li>48 Students with 99+ Percentile in CAT 2018.</li>
									<li>123 Students with 96+ Percentile in CAT 2018.</li>
									<li>23 Converts in IIM A, B and C through CAT 2017.</li>
									<li>97 Converts from top 6 IIMs through CAT 2017.</li>
									<li>243 Converts for FMS, NITIE, SPJain, MDI & other top 20 B Schools.</li>
								</ul>
							</div>
						</div>

						<div className="col-md-6 col-12 right_content content_part right_wrapper">
							<div className="col-md-12 col-12 content-tab px-0">
								<h2>CAT Mock Test and Questions</h2>
								<ul>
									<li>CAT Mock Test Series of 15 All India Mocks.</li>
									<li>30 CAT Sectional Tests.</li>
									<li>4000+ Topic wise CAT Questions including Past Year Questions.</li>
								</ul>
							</div>
							<div className="col-md-12 col-12 content-tab px-0">
								<h2>Special Features</h2>
								<ul>
									<li>A mathematical approach to solve RCs of any difficulty level.</li>
									<li>Special Focus on Logical DI and the latest pattern of DILR Questions.</li>
									<li>Unmatched shortcuts and tricks for Quant, especially Geometry.</li>
									<li>Real-Time Live Discussions for Question-Solving and Doubt Clearing.</li>
									<li>Personalized Mentorship by Alumni of Top B Schools.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default Course_Content;
