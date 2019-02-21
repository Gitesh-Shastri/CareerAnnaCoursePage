import React, { Component } from 'react';

import './ParticularCourse.css';

import Intro from './Intro/Intro';
import Rating from './RatingSection/Rating';
import ReviewSection from './Review_Section/Review_Section';
import CourseContent from './Course_content/Course_content';
import FAQ from './FAQ/FAQ';
import MainVideoSlider from './MainVideoSlider/MainVideoSlider';
import TrendingCourse from './TrendingCourse/TrendingCourse';

class ParticularCourse extends Component {
    
    render() {
        return(<div name="ParticularCourse">
            <Intro />
            <Rating />
            <ReviewSection />
            <CourseContent /> 
            <MainVideoSlider title="Demo"/>
            <TrendingCourse />
            <FAQ />
            </div>
        );
    }
}

export default ParticularCourse;