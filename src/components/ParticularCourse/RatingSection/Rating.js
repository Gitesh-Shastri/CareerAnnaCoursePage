import React, { Component } from "react";

import "./Rating.css";

class Rating extends Component {

  state = {
    ratings: [
      {
        title: "Satisfaction Index",
        percent: "95",
        style: {width: '95%'}
      },
      {
        title: " Quality of Mocks",
        percent: "92",
        style: {width: '92%'}
      },
      {
        title: "In-Depth Analysis",
        percent: "92",
        style: {width: '92%'}
      },
      {
        title: "Doubt Solving",
        percent: "96",
        style: {width: '96%'}
      },
      {
        title: "Mentorship",
        percent: "93",
        style: {width: '93%'}
      },
      {
        title: "Quality of Content",
        percent: "97",
        style: {width: '97%'}
      }, 
    ],
    render: false
  }

  hideBar = () => {
    if(window.scrollY > 860) {
      this.setState({render: false})
    } else if(window.scrollY > 180){
      this.setState({render: true})   
    } else {
      this.setState({render: false})
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.hideBar);
  }

    render() {

    const ratings = this.state.ratings;
    const render = this.state.render;  

    return (
      <div className="RatingSection">
        <div className="row px-0">
          <div className="col-md-3 col-12 px-0 course_rating_left_wrapper">
            <h3>
              4.8<span className="rating_off_5"> / 5</span>
            </h3>
            <h4>ratings</h4>
            <h5>based on 1,020 students</h5>
          </div>
          { render ? 
          <div className="col-md-9 col-12 row px-0course_rating_right_wrapper">
          {ratings.map((particular_rating, i) => 
             <div className="col-md-6 col-12 px-0 row" key={i}>
                <div className="col-md-6 col-xs-12  rating_name">
                 {particular_rating.title}
                </div>
                <div className="col-md-5 col-10 px-0">
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      style={particular_rating.style}
                    />
                  </div>
                </div>
                <div className="col-md-1 col-2 pr-0">
                  {particular_rating.percent}%
                </div>
              </div>)}
          </div> :   <div className="col-md-9 col-12 row px-0course_rating_right_wrapper">
          {ratings.map((particular_rating, i) => 
             <div className="col-md-6 col-12 px-0 row" key={i}>
                <div className="col-md-6 col-xs-12  rating_name">
                  {particular_rating.title}
                </div>
                <div className="col-md-5 col-10 px-0">
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      style={{width: '0%'}}
                    />
                  </div>
                </div>
                <div className="col-md-1 col-2 pr-0">
                  {particular_rating.percent}%
                </div>
              </div>)} 
              </div>}
        </div>
      </div>
    );
  }
}

export default Rating;
