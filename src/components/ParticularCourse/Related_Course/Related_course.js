import React, { Component } from "react";

import "./Related_course.css";

import OwlCarousel from 'react-owl-carousel';

class Related_Course extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: [
                {
                    image_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2019/01/1548055203tissnet.jpg",
                    name: "TISSNET Coaching Class 2020",
                    publish: "21st Jan, 2019",
                    leaners: "8350+ Leaners",
                    ratings: "4.95",
                    index: 0,
                    content: "All good also Interface and mocks are good.",
                    url: "https://www.careeranna.com/TISSNET-Coaching-Class-2020"
                },
                {
                    image_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/06/1528015564ipm.jpg",
                    name: "IPM 2020 Online Coaching Classes",
                    index: 1,
                    publish: "3rd June, 2019",
                    leaners: "464+ Leaners",
                    ratings: "4.89",
                    content: "All good also Interface and mocks are good.",
                    url: "https://www.careeranna.com/IPM-2020-Online-Coaching-Classes"
                },
                {
                    image_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/01/1517390328business-book-and-glasses-1-1241387.jpg",
                    name: "NMAT Coaching Classes",
                    index: 3,
                    publish: "10th Sep, 2017",
                    leaners: "867+ Leaners",
                    ratings: "4.8",    
                    content: "All good also Interface and mocks are good.",
                    url: "https://www.careeranna.com/NMAT-Coaching-Classes"
                },
                {
                    image_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/01/1517390939studying-3-1480680.jpg",
                    name: "SNAP Coaching Class",
                    index: 4,
                    publish: "7th Sep, 2017",
                    leaners: "466+ Leaners",
                    ratings: "4.73",
                    content: "All good also Interface and mocks are good.",
                    url: "https://www.careeranna.com/SNAP-Coaching-Class"
                },
                {
                    image_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/01/1517391759lupa-sobre-revista-1522543.jpg",
                    name: "MICA GE PI Preparation",
                    index: 5,
                    publish: "7th Sep, 2017",
                    leaners: "102+ Leaners",
                    ratings: "4.7",
                    content: "All good also Interface and mocks are good.",
                    url: "https://www.careeranna.com/MICA-GE-PI-Preparation"
                },
                {
                    image_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/01/1517391759lupa-sobre-revista-1522543.jpg",
                    name: "TISS PIT PI Preparation",
                    index: 6,
                    publish: "17th Feb, 2017",
                    leaners: "103+ Leaners",
                    ratings: "4.9",
                    content: "All good also Interface and mocks are good.",
                    url: "https://www.careeranna.com/TISS-PIT-PI-Preparation"
                }
            ],
            course: {
                image_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2019/01/1548055203tissnet.jpg",
                name: "TISSNET Coaching Class 2020",
                index: 0,
                content: "All good also Interface and mocks are good.",
                url: "https://www.careeranna.com/TISSNET-Coaching-Class-2020"
            },
        }
    }

    nextProperty = () => {
		if(this.state.course.index != undefined && this.state.course.index < this.state.courses.length-1){
			const newIndex = this.state.course.index+1;
			this.setState({
				course: this.state.courses[newIndex]
			})
		}
  }

  prevProperty = () => {
    if(this.state.course.index != 0) {
    const newIndex = this.state.course.index-1;
    this.setState({
			course: this.state.courses[newIndex]
    });
}
  }

  render() {

    const coursespilce = this.state.courses.map((course, i ) => {
        return <div class="item">
        <a href={course.url}>
            <img src={course.image_url} alt={course.name}/>
            <div class="inner_wrap">
                <h3>{course.name}</h3>
                <div class="row">
                    <div class="col-md-7 view_row">
                        <div class="course_views">
                            {course.leaners}
                        </div>
                    <div class="rating">
                        <div class="rating_star">{course.ratings} &nbsp;
                            <span class="fa fa-star colorBlue"></span>
                            <span class="fa fa-star colorBlue"></span>
                            <span class="fa fa-star colorBlue"></span>
                            <span class="fa fa-star colorBlue"></span> 
                            <span class="fa fa-star"></span>       
                            <span></span>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-5 padding-none">
                        <button class="view_course_button">Course Info</button>
                    </div>
                </div>
            </div>
        </a>
    </div>
    });

    const course = <div class="item">
    <a href={this.state.course.url}>
        <img src={this.state.course.image_url} alt={this.state.course.name}/>
        <div class="inner_wrap">
            <h3>{this.state.course.name}</h3>
            <p>All good also Interface and mocks are good.</p>
        </div>
    </a>
</div>


const course1 = this.state.course;
    return (

        <section class="related_courses">
                <div class="row">
            <div class="col-md-4 trendingCard">
                <div className="trendingheading">
                    Related
                </div>
                <div className="trendingcourse">
                    Courses
                </div>
            </div>
                    <div class="col-md-9 col-xs-12 owl_carousel right_wrapper">
                        <OwlCarousel ref="gallery">
                            {coursespilce}
                        </OwlCarousel>
                    </div>
                    <div class="col-xs-12 owl_carousel_small right_wrapper">
                            {course}
                            <div className="col-xs-12 related_course_arrow">
                                <div className="arrow_nav_prev"
                                onClick={() => this.prevProperty()} 
                                hidden={course1.index==0}
                                disabled={course1.index===0}
                                >&#x3c;</div>
                                <div className="arrow_nav_next"
                                onClick={() => this.nextProperty()} 
                                disabled={course1.index===this.state.courses.length-1}
                                hidden={course1.index===this.state.courses.length-1}
                                >&#x3e;</div>
                            </div>
                    </div>
                </div>
        
        </section>
    );
  }
}

export default Related_Course;
