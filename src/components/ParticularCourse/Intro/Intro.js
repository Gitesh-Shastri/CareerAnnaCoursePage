import React, { Component } from 'react';

import './Intro.css';
import Scrollchor from 'react-scrollchor';

class Intro extends Component {
    
    render() {
        return(<div className="Intro" style={{padding: '2rem 4rem 0rem 4rem'}}>
            <div className="row">
                <div className="col-md-6 col-12 intro_left_wrapper px-0">
                    <h1 className="course_intro_heading m-0">cat<span className="course_intro_sub">2019</span></h1>
                    <h2 className="course_intro_subtitle m-0">coaching</h2>
                    <ul className="course_intro_list" style={{paddingTop:'1rem'}}>
					<li><b>34 Students</b> with 99+ Percentile and <b>116 students</b> with 96+ Percentile in CAT 2017.</li>
					<li><b>300+ Hours</b> of Videos covering  entire CAT Syllabus in details.</li>
					<li><b>100+ Cat Topic Tests </b>to boost your topic wise confidence</li>
					<li><b>12</b> Full length CAT 2019 <b>Mock Test</b></li>
				</ul>
                <div className="course_intro_price" style={{paddingTop:"1rem"}}>
					<span className="intro_max_price"><del>For ₹14,999/</del></span>
					<span className="intro_offer_price"><b>Now For ₹4,999/-</b></span>
				</div>
				<div className="intro_offer_expire">Offer expires in 3 Days</div>
                <div className="intro_button_area">
					<a href="/" className="blue_button">Enroll Now</a>
				</div>
                
                <Scrollchor to="#video" animate={ { offset: 0, duration: 300}}>
					<div href="#demoVideo" className="demo_button d-inline-block">Demo Video</div>
                </Scrollchor>
                </div>
                <div className="col-md-6 col-12 intro_right_wrapper px-0">
                <div className="video_wrapper"> 
					<iframe title="cat2019demo" src="https://www.youtube.com/embed/fK0Hqhq86Bg?wmode=transparent&amp;rel=0" frameBorder="0" allowFullScreen="" id="fitvid0"></iframe>
				</div>
                </div>
            </div>
        </div>);
    }
}

export default Intro;