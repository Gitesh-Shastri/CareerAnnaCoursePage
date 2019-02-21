import React from 'react';
import './Card.css';

const Card = ({course, current_index}) => {  

    return (
        <div className="Coursecard" id={`card-${course.index}`} >
            <div className="row">
            <div className="items trending_course">
        <a href={course.url}>
        <img src={course.pic_url} className="pic" alt={course.title} />
        <div className="course_heading">
            {course.title}
        </div>
        <div className="rating">
            <div className="rating_star colorBlue">{course.ratings} &nbsp;
                <span className="fa fa-star colorBlue"></span>
                <span className="fa fa-star colorBlue"></span>
                <span className="fa fa-star colorBlue"></span>
                <span className="fa fa-star colorBlue"></span> 
                <span className="fas fa-star-half-alt colorBlue" aria-hidden="true"></span>       
                <span></span>
            </div>
        </div>
        <div className="course_views">
        <i className="fa fa-users" aria-hidden="true"></i>  {course.leaners}
        </div>
        </a>
    </div>
            </div>
        </div>
    );
}

export default Card;
