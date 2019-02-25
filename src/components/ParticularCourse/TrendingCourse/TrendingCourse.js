import React, { Component } from 'react';
import './TrendingCourse.css';

import Card from './Card/Card';
import axios from 'axios';

class TrendingCourse extends Component {

    state = {
        courses: [ ],
        course:  {}
    }

    componentDidMount() {
        axios.get('https://www.careeranna.com/websiteapi/getCatRelatedCourse')
        .then(response => {
            console.log(response);
            this.setState({courses: response.data, course: response.data[0]});
        })
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
        </div>
    </div>);
  }
}

export default TrendingCourse;
