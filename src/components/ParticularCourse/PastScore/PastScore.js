import React, { Component } from 'react';

import axios from 'axios';
import './PastScore.css';

class PastScore extends Component {
    
    state = {
        scores: [
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 99.75,
              DILRPercentile: 99.83,
              QuantPercentile: 98.99,
              OverallPercentile: 99.93
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 100,
              DILRPercentile: 99.6,
              QuantPercentile: 98.93,
              OverallPercentile: 99.89
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 99.44,
              DILRPercentile: 99.83,
              QuantPercentile: 98.66,
              OverallPercentile: 99.87
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 99.7,
              DILRPercentile: 98.79,
              QuantPercentile: 98.36,
              OverallPercentile: 99.83
            },
            {
              CourseEnrolled: "CAT LRDI Course",
              VARCPercentile: 92.71,
              DILRPercentile: 99.76,
              QuantPercentile: 99.89,
              OverallPercentile: 99.83
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 98.84,
              DILRPercentile: 99.75,
              QuantPercentile: 97.49,
              OverallPercentile: 99.81
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 98.4,
              DILRPercentile: 99.5,
              QuantPercentile: 97.87,
              OverallPercentile: 99.77
            },
            {
               CourseEnrolled: "CAT Verbal Ability Coaching",
               VARCPercentile: 99.44,
               DILRPercentile: 98.22,
               QuantPercentile: 96.62,
               OverallPercentile: 99.74
            },
            {
               CourseEnrolled: "Online CAT Coaching",
               VARCPercentile: 98.88,
               DILRPercentile: 97.48,
               QuantPercentile: 97.59,
               OverallPercentile: 99.69
            },
            {
               CourseEnrolled: "Online CAT Coaching",
               VARCPercentile: 99.23,
               DILRPercentile: 98.94,
               QuantPercentile: 96.28,
               OverallPercentile: 98.68
            },
            {
               CourseEnrolled: "Online CAT Coaching",
               VARCPercentile: 98.77,
               DILRPercentile: 98.85,
               QuantPercentile: 98.69,
               OverallPercentile: 99.61
            },
            {
               CourseEnrolled: "Online CAT Coaching",
               VARCPercentile: 95.91,
               DILRPercentile: 90.17,
               QuantPercentile: 99.75,
               OverallPercentile: 99.56
            },
            {
               CourseEnrolled: "Online CAT Coaching",
               VARCPercentile: 99.43,
               DILRPercentile: 96.36,
               QuantPercentile: 92.71,
               OverallPercentile: 99.55
            },
            {
               CourseEnrolled: "Online CAT Coaching",
               VARCPercentile: 99.13,
               DILRPercentile: 98.96,
               QuantPercentile: 90.71,
               OverallPercentile: 99.55
            },
            {
               CourseEnrolled: "CAT Verbal Ability Coaching",
               VARCPercentile: 99.75,
               DILRPercentile: 95.7,
               QuantPercentile: 94.71,
               OverallPercentile: 99.54
            },
            {
               CourseEnrolled: "CAT Quant Course",
               VARCPercentile: 95.54,
               DILRPercentile: 96.7,
               QuantPercentile: 98.6,
               OverallPercentile: 99.54
            },
            {
               CourseEnrolled: "CAT Verbal Ability Coaching",
               VARCPercentile: 99.54,
               DILRPercentile: 97.76,
               QuantPercentile: 97.57,
               OverallPercentile: 99.53
            },
            {
               CourseEnrolled: "Online CAT Coaching",
               VARCPercentile: 89.68,
               DILRPercentile: 99.55,
               QuantPercentile: 99.33,
               OverallPercentile: 99.53
            },
            {
               CourseEnrolled: "Online CAT Coaching",
               VARCPercentile: 99.35,
               DILRPercentile: 98.9,
               QuantPercentile: 86.01,
               OverallPercentile: 99.53
            },
            {
               CourseEnrolled: "Online CAT Coaching",
               VARCPercentile: 97.75,
               DILRPercentile: 93.05,
               QuantPercentile: 95.59,
               OverallPercentile: 99.51
            },
            {
               CourseEnrolled: "Online CAT Coaching",
               VARCPercentile: 96.2,
               DILRPercentile: 93.22,
               QuantPercentile: 97.87,
               OverallPercentile: 99.42
            },
            {
               CourseEnrolled: "Online CAT Coaching",
               VARCPercentile: 96.93,
               DILRPercentile: 97.69,
               QuantPercentile: 90.71,
               OverallPercentile: 99.41
            },
            {
               CourseEnrolled: "CAT LRDI Course",
               VARCPercentile: 96.73,
               DILRPercentile: 99.16,
               QuantPercentile: 99.33,
               OverallPercentile: 99.33
            },
            {
              CourseEnrolled:  "Online CAT Coaching",
              VARCPercentile: 97.54,
              DILRPercentile: 94.7,
              QuantPercentile: 96.91,
              OverallPercentile: 99.31
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 99.69,
              DILRPercentile: 95.6,
              QuantPercentile: 95.92,
              OverallPercentile: 99.31
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 90.67,
              DILRPercentile: 97.73,
              QuantPercentile: 98.92,
              OverallPercentile: 99.31
            },
            {
              CourseEnrolled: "CAT LRDI Course",
              VARCPercentile: 89.18,
              DILRPercentile: 98.92,
              QuantPercentile: 97.17,
              OverallPercentile: 99.29
            },
            {
              CourseEnrolled: "CAT Verbal Ability Coaching",
              VARCPercentile: 99.13,
              DILRPercentile: 91.63,
              QuantPercentile: 96.54,
              OverallPercentile: 99.26
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 99.64,
              DILRPercentile: 95.05,
              QuantPercentile: 98.45,
              OverallPercentile: 99.24
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 97.94,
              DILRPercentile: 97.5,
              QuantPercentile: 98.6,
              OverallPercentile: 99.21
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 95.57,
              DILRPercentile: 97.05,
              QuantPercentile: 93.74,
              OverallPercentile: 99.21
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 97.1,
              DILRPercentile: 96.22,
              QuantPercentile: 97.79,
              OverallPercentile: 99.21
            },
            {
              CourseEnrolled: "CAT Quant Course",
              VARCPercentile: 94.27,
              DILRPercentile: 94.7,
              QuantPercentile: 99.3,
              OverallPercentile: 99.21
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 94.27,
              DILRPercentile: 98.76,
              QuantPercentile: 92.04,
              OverallPercentile: 99.19
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 99.29,
              DILRPercentile: 96.86,
              QuantPercentile: 97.45,
              OverallPercentile: 99.15
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 99.29,
              DILRPercentile: 96.86,
              QuantPercentile: 91.45,
              OverallPercentile: 99.15
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 95.99,
              DILRPercentile: 93.94,
              QuantPercentile: 99.66,
              OverallPercentile: 99.15
            },
            {
              CourseEnrolled: "CAT LRDI Course",
              VARCPercentile: 97.12,
              DILRPercentile: 99.05,
              QuantPercentile: 93.28,
              OverallPercentile: 99.14
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 98.57,
              DILRPercentile: 94.05,
              QuantPercentile: 96.27,
              OverallPercentile: 99.13
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 93.12,
              DILRPercentile: 84.1,
              QuantPercentile: 96.91,
              OverallPercentile: 99.13
            },
            {
              CourseEnrolled: "CAT Verbal Ability Coaching",
              VARCPercentile: 99.5,
              DILRPercentile: 89.32,
              QuantPercentile: 96.62,
              OverallPercentile: 99.12
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 97.61,
              DILRPercentile: 95.55,
              QuantPercentile: 93.4,
              OverallPercentile: 99.12
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 91.91,
              DILRPercentile: 97.65,
              QuantPercentile: 95.97,
              OverallPercentile: 99.1
            },
            {
              CourseEnrolled: "CAT LRDI Course",
              VARCPercentile: 98.91,
              DILRPercentile: 98.5,
              QuantPercentile: 91.93,
              OverallPercentile: 99.1
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 97.21,
              DILRPercentile: 98.21,
              QuantPercentile: 97.89,
              OverallPercentile: 99.08
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 95.09,
              DILRPercentile: 99.5,
              QuantPercentile: 94.74,
              OverallPercentile: 99.06
            },
            {
              CourseEnrolled: "CAT LRDI Course",
              VARCPercentile: 97.79,
              DILRPercentile: 98.05,
              QuantPercentile: 94.26,
              OverallPercentile: 99.03
            },
            {
              CourseEnrolled: "CAT LRDI Course",
              VARCPercentile: 95.99,
              DILRPercentile: 97.48,
              QuantPercentile: 90.04,
              OverallPercentile: 99.01
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 97.75,
              DILRPercentile: 86.18,
              QuantPercentile: 96.01,
              OverallPercentile: 98.99
            },
            {
              CourseEnrolled: "Online CAT Coaching",
              VARCPercentile: 99.13,
              DILRPercentile: 82.71,
              QuantPercentile: 96.54,
              OverallPercentile: 98.48
            }
          ],
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

        const scores = this.state.scores;
        const submit = this.state.submit;
        const request = this.state.request;

        return(
            <div className="past_score" id="pastScore">
                <div className="past_score_heading">
                    Top 50 Scores by our CAT 2018 Students - Online CAT Coaching is the Full CAT Preparation Course
                </div>
                <table>
                    <thead>
                        <tr>
                        <th>Course Enrolled</th>
                        <th>VA RC Percentile</th>
                        <th>DI LR Percentile</th>
                        <th>Quant Percentile</th>
                        <th>Overall Percentile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            scores.map((score, i) =>
                                <tr key={i}>
                                <td style={{textAlign: "left"}}>{score.CourseEnrolled}</td>
                                <td>{score.VARCPercentile}</td>	
                                <td>{score.DILRPercentile}</td>	
                                <td>{score.QuantPercentile}</td>	
                                <td>{score.OverallPercentile}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
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
        ) 
    }
}

export default PastScore;