import React, { Component } from "react";

import './Navigation.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Navigation extends Component {

  state = {
    isLogin: false
  }

componentDidMount() {
  axios.get('https://www.careeranna.com/websiteapi/isLoggedIn')
  .then(response => {
    if(response.data==='notLoggedin') {
      this.setState({isLogin: false});
    } else {
      this.setState({isLogin: true});
    }
  });
}

  render() {
    const isLoggedIn = this.state.isLogin;
    return (
      <div className="Nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
        <Link className="navbar-brand" to="/">
          <img
            className="logo_image"
                    src="https://www.careeranna.com/upload/main_page_testing/LOGO-01.png"
                    id="wordmark"
                    alt="brand_logo"/>
                </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item nav_link active">
                <a title="Courses" href="https://www.careeranna.com/courses">Courses</a>
              </li>
              <li className="nav-item nav_link">
                <a title="Certifications" href="https://www.careeranna.com/certification" >Certifications</a>
              </li>
              <li className="nav-item nav_link">
                <a title="Free Videos" href="https://www.careeranna.com/english/free/videos" >Free Videos</a>
              </li>
              <li className="nav-item nav_link">
                  <a
                    title="Free Tests"
                    href="https://www.careeranna.com/free-tests">
                    Free Tests
                  </a>
                </li>
                <li className="nav-item nav_link">
                  <a title="Articles" href="https://www.careeranna.com/articles">
                    News
                  </a>
                </li>
                {!isLoggedIn?
                <li className="nav-item">
                <a
                    title="Get Started"
                    className="btn btn-info primary_btn login"
                    href="https://www.careeranna.com/signup">
                    Log In
                  </a>
                </li>:null }
                {!isLoggedIn?
                <li className="nav-item">
                <a
                    title="Get Started"
                    className="btn btn-info primary_btn signup"
                    href="https://www.careeranna.com/signup#signup">
                    Sign Up
                  </a>
                </li>:
              <li className="nav-item">
              <a
                  title="Get Started"
                  className="btn btn-info primary_btn"
                  href="https://www.careeranna.com/profile/enrolled_courses">
                    My Account
                </a> 
                </li>}
            </ul>
          </div>  
        </nav>
      </div>
    );
  }
}

export default Navigation;
