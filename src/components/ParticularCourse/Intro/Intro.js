import React, { Component } from 'react';

import './Intro.css';
import Scrollchor from 'react-scrollchor';

import axios from 'axios';

class Intro extends Component {
    
    state = {
        price: "4,999",
        discounted: "14,999",
        submit: true,
        request: {
            name: {
                value: '',
                isValid: true,
                isTouched: false
            },
            email: {
                value: '',
                isValid: false,
                isTouched: false
            },
            mobile: {
                value: '',
                isValid: false,
                isTouched: false
            },
            product_id: '216'
        }
    }

    componentDidMount() {
        axios.get('https://www.careeranna.com/websiteapi/getCourseDetails')
        .then(response => {
            console.log(response);
            this.setState({price: response.data.price, discounted: response.data.discount});
        })
    }

    formatDate(date) {
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];
      
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        var postfix = '';

        if (day > 3 && day < 21) return 'th'; 
        switch (day % 10) {
            case 1:  postfix = "st";
                    break;
            case 2:  postfix = "nd";
                    break;
            case 3:  postfix = "rd";
                    break;
            default: postfix = "th";
                    break;
        }
        return day + postfix + ' ' + monthNames[monthIndex] + ' ' + year;
    }

    capitalize(s) { 
        return s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
    };
    

    changeNameSubmit = (event) => {
        let request = this.state.request;
        request.name.value = this.capitalize(event.target.value);
        if(request.name.value.length>=2) {
            request.name.isTouched = true;
        }
        let value = event.target.value;
        value = value.split(' ').join('');
        if((value.match('[0-9\\W_]+')==null)) {
            request.name.isValid = true;   
        } else {
            request.name.isValid = false;
        }
        this.setState({submit: false , request: request});
    }

    changeEmailSubmit = (event) => {
        let request = this.state.request;
        request.email.value = event.target.value;
        if(request.email.value.length>=5) {
            request.email.isTouched = true;
        } else {
            request.email.isTouched = false;    
        }
        let pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
        if(!(request.email.value.match(pattern)==null)){
            request.email.isValid = true;   
        } else {
            request.email.isValid = false;    
        }
        this.setState({submit: false , request: request});
    }

    changePhoneSubmit = (event) => {
        let request = this.state.request;
        request.mobile.value = event.target.value;
        if(request.mobile.value.length>=9) {
            request.mobile.isTouched = true;
        }
        if(!(request.mobile.value.match('[7-9][0-9]{9}')==null)){
            request.mobile.isValid = true;  
        } else {
            request.mobile.isValid = false;    
        }
        this.setState({submit: false , request: request});
    }

    submitRequest = (event) => {
        event.preventDefault();
        const request = this.state.request;
        if(request.name.isValid&&request.email.isValid&&request.mobile.isValid) {
            let bodyFormData = {
                name: request.name.value,
                mobile: request.mobile.value,
                email: request.email.value,
                product_id: request.product_id
            }
            console.log(bodyFormData);
            axios({
                method: 'post',
                url: 'https://www.careeranna.com/cmarket/requestCall',
                data: bodyFormData,
                config: { headers: {'Content-Type': 'multipart/form-data' }}
                })
                .then(function (response) {
                    //handle success
                    console.log(response);
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                });            
            
        }
    }
    
    render() {

        const date = new Date();
        date.setDate(date.getDate()+1);
        const updateddate = this.formatDate(date);
        const submit = this.state.submit;
        const request = this.state.request;
        const price = this.state.price;
        const discounted = this.state.discounted;

        return(<div className="Intro" >
            <div className="row">
                <div className="col-md-6 col-12 intro_left_wrapper px-0">
                    <h1 className="course_intro_heading m-0">cat<span className="course_intro_sub">2019</span>
                    <span className="course_intro_subtitle m-0">coaching</span></h1>
                    <ul className="course_intro_list">
					<li>300+ Hours of Videos covering entire CAT Online Coaching 2019 syllabus.</li>
                    <li>48 Students with 99+ Percentile in CAT 2018.</li>
					<li>CAT Mock Test Series of 15 All India Mocks.</li>
					<li>Concepts covered from Basics to Advanced to Past Year Questions.</li>		
				</ul>
                </div>
                <div className="col-md-6 col-12 intro_right_wrapper px-0">
                <div className="video_wrapper"> 
					<iframe title="cat2019demo" src="https://www.youtube.com/embed/fK0Hqhq86Bg?wmode=transparent&amp;rel=0" frameBorder="0" allowFullScreen="" id="fitvid0"></iframe>
				</div>
                </div>
                <div className="col-md-12 col-12 row px-0">
                    <div className="col-md-9 col-12 row px-0">
                        <div className="col-md-7 px-0 course_intro_price">
                            <span className="intro_max_price"><del>{`For ₹${price}/`}</del></span>
                            <span className="intro_offer_price"><b>{`Now For ₹${discounted}/-`}</b></span>
                        </div>
                        <div className="col-md-12 col-12 intro_offer_expire">{'Discount ends on '+updateddate}</div>
                        <div className="col-md-12 col-12 px-0">
                 	        <a href="https://www.careeranna.com/iimcat/" className="intro_button_area blue_button">Enroll Now</a>
				        
              <Scrollchor to="#video" animate={ { offset: 0, duration: 300}}>
                  <div href="#demoVideo" className="demo_button d-inline-block">Demo Video</div>
                  
              </Scrollchor>
              <Scrollchor to="#pastScore" animate={ { offset: 0, duration: 300}}>
                  <div href="#pastScroe" className="pastScore d-inline-block">Past Results <i className="fas fa-angle-down"></i></div>
              </Scrollchor>
              </div>
           
                    </div>
                    <div className="col-md-5 col-12 px-0">
                    <div className="requestForm">
                    <div className="request">
                        Request a free Call Back
                    </div>
                    <form className="request_form row px-0" onSubmit={this.submitRequest}>
                    <div className="col-md-7 col-12 px-0">
                    <div className="col-12 col-md-12 px-0 input-group">
                    <div className="input-group-addon"><i className="far fa-user"></i></div>
                    <input type="text" name="name" autoComplete="off" className={request.name.isTouched&&!request.name.isValid?'error':''} id="name" placeholder="Full Name" onChange={this.changeNameSubmit} required />
                    {
                        request.name.isTouched&&!request.name.isValid?
                        <small>Name cannot have special character/number, Please re-enter</small>:null
                    }
                    </div>
                    <div className="col-12 col-md-12 px-0 input-group">
                    <div className="input-group-addon">+91</div>
                    <input type="text" pattern="[7-9][0-9]{9}" maxLength="10" autoComplete="off" name="mobile" className={request.mobile.isTouched&&!request.mobile.isValid?'error':''} id="mobile" placeholder="Contact Number" onChange={this.changePhoneSubmit} required />
                    {
                        request.mobile.isTouched&&!request.mobile.isValid?
                        <small>Please Enter Valid Number</small>:null
                    }
                    </div>
                    <div className="col-12 col-md-12 px-0 input-group">
                    <div className="input-group-addon">@</div>
                    <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" autoComplete="off" name="email" className={request.email.isTouched&&!request.email.isValid?'error':''}  id="email" placeholder="Enter your email" onKeyPress={this.changeEmailSubmit} required />
                    {
                        request.email.isTouched&&!request.email.isValid?
                        <small>Please Enter Valid Email</small>:null
                    }
                    </div>
                    </div>
                    <input type="text" name="product_id" value="216" hidden/>
                    <div className="col-md-5 col-12 px-0">
                    <button className={!(request.name.isValid&&request.mobile.isValid&&request.email.isValid)?'submit_request disabled':'submit_request'} hidden={submit} >Send Request</button>
                    </div>
                    </form>
                </div>
                </div>    
                </div>               
            </div>
        </div>);
    }
}

export default Intro;