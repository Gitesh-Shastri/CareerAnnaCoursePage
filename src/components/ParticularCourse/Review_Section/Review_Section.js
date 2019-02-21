import React, { Component } from 'react';
import './Review_Section.css';
import axios from 'axios';
import Card from './Card/Card';

class Review_Section extends Component {

	constructor(props){
		super(props);
		this.state = {
			reviews: [],
			review: { "reviewID": "1236", "productID": "216", "rating": "5", "fullname": "Vindhya", "emailaddress": "vindhyakaushal@gmail.com", "comments": "Will surely recommend to friends. High quality material and mocks were strictly in line with the exam.", "date": "2018-02-02", "publish": "1", "user_id": "393704", "index": 0 },
			disabled: true,
			pageno: 0
		}
	}

	componentDidMount = () => {
			 axios.get('https://www.careeranna.com/webiste-api/fetchCourseReview.php?id=216')
			.then(response => {
				 let reviews_temp = [];
				 for(let i=0;i<response.data.length;) {
						let review_array_temp = [];	
						if(response.data[i]===undefined) {
							review_array_temp.push(this.state.review);
							review_array_temp.push(this.state.review);
							review_array_temp.push(this.state.review);
							review_array_temp.push(this.state.review);
						} else if(response.data[i+1]===undefined) {
							review_array_temp.push(response.data[i]);
							review_array_temp.push(this.state.review);
							review_array_temp.push(this.state.review);
							review_array_temp.push(this.state.review);
						} else if(response.data[i+2]===undefined) {
							review_array_temp.push(response.data[i]);
							review_array_temp.push(response.data[i+1]);
							review_array_temp.push(this.state.review);
							review_array_temp.push(this.state.review);
						} else if(response.data[i+3]===undefined) {
							review_array_temp.push(response.data[i]);
							review_array_temp.push(response.data[i+1]);
							review_array_temp.push(response.data[i+2]);
							review_array_temp.push(this.state.review);
						} else {
							review_array_temp.push(response.data[i]);
							review_array_temp.push(response.data[i+1]);
							review_array_temp.push(response.data[i+2]);
							review_array_temp.push(response.data[i+3]);
						}
						reviews_temp.push(review_array_temp);
						i+=4;
				 }
				 console.log(reviews_temp);
				 this.setState({reviews: reviews_temp});
			}); 
	}

	nextReview = () => {
		const pageno = this.state.pageno;
		const length = this.state.reviews.length-1;
		if((pageno)<length) {
		this.setState(
			{
				pageno: pageno+1
			}
		)
		}
	}
	

	prevReview = () => {
		const pageno = this.state.pageno;
		if((pageno-1)>=0) {
			this.setState(
			{
				pageno: pageno-1
			}
		)
		}
	}

  render() {
		const {reviews, review} = this.state;
		const single_review = this.state.review;
		const pageno = this.state.pageno;
		
		return (
		<section className="review_sec">
			<div className="row">
				<div className="col-md-3 col-12 px-0">
					<div className="review_line" />
						<div className="upperheading_review">
							<div className="student">What Student Say</div>
							<div className="about">About Us.</div>
						</div>
					</div>
					<div className="col-md-9 col-12 px-0">
						<div className="user_review_wrapper">
							<div className="user_review_playlist" style={{
				'transform': `translateX(-${900*pageno}px)`
			}}>
									{reviews.map((particular_review, i) => 
										<div className="review_big_card">
										<div className="review_small_card">
										<Card key={i} review={particular_review[0]} current_page={pageno*4}/>
										<Card key={i} review={particular_review[1]} current_page={pageno*4}/>
										</div>
										<div className="review_small_card">
										<Card key={i} review={particular_review[2]} current_page={pageno*4}/>
										<Card key={i} review={particular_review[3]} current_page={pageno*4}/>
										</div>
										</div>)}
								</div>
							</div>
						</div>
					<div className="col-md-3 px-0"></div>
					<div className="col-md-9 col-12 px-0 review_arrow">
					<button className="view_more_review float-left" hidden={pageno===0} onClick={() => this.prevReview()}><i className="fas fa-caret-left"></i></button>
						<button className="view_more_review float-right" hidden={pageno===reviews.length-1}onClick={() => this.nextReview()}><i className="fas fa-caret-right"></i></button>
					</div>
					</div>
</section>
    );
  }
}

export default Review_Section;
