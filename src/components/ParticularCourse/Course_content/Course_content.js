import React, { Component } from "react";


class Course_Content extends Component {

  render() {
		import("./Course_content.css");

    return (
    <section className="course_content">
	<div className="container_main">
		<div className="row fst_wrapper">
			<h2><span className="course_grey">COURSE</span>CONTENT</h2>
			<div className="col-md-6 col-12 content_part left_wrapper">
				<ul>
					<li>40+ Students with 99+ Percentile and 126 with 96+ Percentile in CAT 2018.</li>
					<li>15 Full Mocks in CAT 2019 Online Coaching</li>
					<li>23 Converts in IIM A, B, C and 97 from top 6 IIMs in CAT 2018</li>
					<li>300+ Hours of Videos covering entire CAT Online Coaching 2019 syllabus in detail</li>
					<li>100+ CAT 2019 Topic Tests to boost your topic wise confidence</li>
					<li>30 GK E-Books and 150 GK Tests for NON-CAT 2019 Exams</li>
					<li>WAT GD PI Training included in the CAT 2019 Online Coaching</li>
					<li>30 CAT 2019 Sectional Tests to ensure sectional proficiency</li>

				</ul>
			</div>

			<div className="col-md-6 col-12 right_content content_part right_wrapper">
				<ul>
					<li>Real Time Live Discussions for Question-Solving and Doubt Clearing</li>
					<li>Personalized 24 x 7 Mentorship by Alumni of Top B School</li>
					<li>Assistance with customized CAT Study Plan as per your schedule</li>
					<li>Regular motivational sessions to ensure you stay confident</li>
					<li>A mathematical approach to ace RCs of any difficulty level</li>
					<li>Special Focus on Logical DI and the latest pattern of LR DI Questions</li>
					<li>Unmatched shortcuts and tricks for Quant, especially Geometry and Algebra</li>
					<li>Online sessions to clarify doubts to students in a virtual classroom environment.</li>

				</ul>
			</div>

		</div>
		<div className="row sec_wrapper">
			<div className="col-md-6">
				<p>DOUBT SOLVING</p>
			</div>
			<div className="col-md-6 content_part">
				<ul>
					<li>Bi-Weekly One to One Doubt solving sessions for CAT 2019 Online Coaching Students</li>
				</ul>
			</div>
		</div>
	</div>
</section>
    );
  }
}
export default Course_Content;
