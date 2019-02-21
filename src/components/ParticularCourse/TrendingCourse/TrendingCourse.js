import React, { Component } from 'react';
import './TrendingCourse.css';

import Card from './Card/Card';

class TrendingCourse extends Component {

    state = {
        courses: [
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/02/1519196316studying-ahead-1421056.jpg",
                title: "Online CAT Quant Course",
                publish: "24th Feb, 2016",
                leaners: "7850+ Learners",
                index: 0,
                ratings: "4.7",
                url: "https://www.careeranna.com/Online-CAT-Quant-Course"
                },
                {
                    pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/02/1519196290studying-ahead-1421056.jpg",
                    title:"Online CAT Verbal Course",
                    publish: "24th Feb, 2016",
                    leaners: "6292+ Learners",
                    ratings: "4.7",
                    index: 1,
                    url: "https://www.careeranna.com/Online-CAT-Verbal-Course"
                    },
                {
                    pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/02/1519196269studying-ahead-1421056.jpg",
                    title:"Online CAT LR DI Course",
                    publish: "24th Feb, 2016",
                    index: 2,
                    leaners: "4850+ Learners",
                    ratings: "4.8",
                    url: "https://www.careeranna.com/Online-CAT-LR-DI-Course"
                },
                {
                    pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/01/1517390939studying-3-1480680.jpg",
                    title:"Complete MBA Prep with GDPI",
                    publish: "14th Feb, 2019    ",
                    index: 3,
                    leaners: "8453+ Learners",
                    ratings: "5",
                    url: "https://www.careeranna.com/Complete-MBA-Prep-with-GDPI"
                },
        ],
        course:  {
            pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/02/1519196316studying-ahead-1421056.jpg",
            title: "Online CAT Quant Course",
            publish: "24th Feb, 2016",
            leaners: "7850+ Learners",
            index: 0,
            ratings: "4.7",
            url: "https://www.careeranna.com/Online-CAT-Quant-Course"
            },
    }



    nextProperty = () => {
		if(this.state.course.index !== this.state.courses.length-2){
			const newIndex = this.state.course.index+1;
			this.setState({
				course: this.state.courses[newIndex]
			})
		}
    }

  prevProperty = () => {  
    const newIndex = this.state.course.index-1;
    this.setState({
		course: this.state.courses[newIndex]
    })
  } 

  render() {
    
    const course = this.state.course;

    const courses = this.state.courses;  
    
    return (
      <div className="TrendingCourse">
        <div className="row">
            <div className="trendingCourseCard">
                <div className="trendingCourseCardInside row">
                    <div className="upperheading">
                        <div className="trendingheading">Related</div>
                        <div className="trendingsubheading">Courses</div>
                        <hr className="trending_line"/>
                    </div>
                    <div className="off_column">
                        <div className="trending_off">Upto <span>15% off</span></div>
                        <div className="trending_special">Specialised Courses.</div>
                        <div className="trending_expire">*Offer expires in 3 Days.</div>
                    </div> 
                </div>
            </div>
                <button 
					className="next_video_prev"
                    onClick={() => this.prevProperty()}
                    disabled={course.index === 0}
                    ><i className='fa fa-angle-left'></i></button>
            <div className="course_course_list">
                <div className="trending_playlist" style={{
                    'transform': `translateX(-${course.index*(100/courses.length)}%)`}}>
                    {courses.map((particular_course, i) => 
                        <Card key={i} course = {particular_course} current_index = {course.index}/>)}
                </div>
            </div>  
            <div className="arrow_right">
                <button 
                    className="next_video_right"
                    onClick={() => this.nextProperty()} 
                    disabled={course.index===courses.length-2}
                    hidden={course.index===courses.length-2}><i className='fa fa-angle-right'></i></button>
            </div>
        </div>
        <div className="col-12 arrow_small">
            <button 
				className="next_video_prev_small"
                onClick={() => this.prevProperty()} 
                disabled={course.index===0}
                hidden={course.index===0}><i className='fa fa-caret-left'></i></button>
            <button 
			 	className="next_video_right_small float-right"
				onClick={() => this.nextProperty()} 
				disabled={course.index===courses.length-2}
				hidden={course.index===courses.length-2}><i className='fa fa-caret-right'></i></button>     
        </div>
    </div>);
  }
}

export default TrendingCourse;
