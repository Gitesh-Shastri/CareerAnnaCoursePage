import React, { Component } from 'react';
import './Review_Section.scss';
import axios from 'axios';
import Card from './Card/Card';

class Review_Section extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews: [],
			review: {
				reviewID: '',
				productID: '',
				rating: '',
				fullname: '',
				emailaddress: '',
				comments: '',
				date: '',
				publish: '',
				user_id: '',
				index: 0
			},
			disabled: true,
			pageno: 0,
			showVideo: true,
			isLoading: true,
			product_id: this.props.product_id
		};
	}

	componentDidMount = () => {
		let product_id = this.state.product_id;
		axios.get('https://www.careeranna.com/webiste-api/fetchCourseReview.php?id=' + product_id).then((response) => {
			let reviews_temp = [];
			if (window.innerWidth < 650) {
				for (let i = 0; i < response.data.length; ) {
					let review_array_temp = [];
					if (response.data[i] === undefined) {
						review_array_temp.push(this.state.review);
						review_array_temp.push(this.state.review);
					} else if (response.data[i + 1] === undefined) {
						review_array_temp.push(response.data[i]);
						review_array_temp.push(this.state.review);
					} else {
						review_array_temp.push(response.data[i]);
						review_array_temp.push(response.data[i + 1]);
					}
					reviews_temp.push(review_array_temp);
					i += 2;
				}
			} else {
				for (let i = 0; i < response.data.length; ) {
					let review_array_temp = [];
					if (response.data[i] === undefined) {
						review_array_temp.push(this.state.review);
						review_array_temp.push(this.state.review);
						review_array_temp.push(this.state.review);
						review_array_temp.push(this.state.review);
					} else if (response.data[i + 1] === undefined) {
						review_array_temp.push(response.data[i]);
						review_array_temp.push(this.state.review);
						review_array_temp.push(this.state.review);
						review_array_temp.push(this.state.review);
					} else if (response.data[i + 2] === undefined) {
						review_array_temp.push(response.data[i]);
						review_array_temp.push(response.data[i + 1]);
						review_array_temp.push(this.state.review);
						review_array_temp.push(this.state.review);
					} else if (response.data[i + 3] === undefined) {
						review_array_temp.push(response.data[i]);
						review_array_temp.push(response.data[i + 1]);
						review_array_temp.push(response.data[i + 2]);
						review_array_temp.push(this.state.review);
					} else {
						review_array_temp.push(response.data[i]);
						review_array_temp.push(response.data[i + 1]);
						review_array_temp.push(response.data[i + 2]);
						review_array_temp.push(response.data[i + 3]);
					}
					reviews_temp.push(review_array_temp);
					i += 4;
				}
			}
			this.setState({ reviews: reviews_temp, isLoading: false });
			this.intervalId = setInterval(this.timer.bind(this), 4000);
		});
	};

	timer() {
		const newpageno = this.state.pageno + 1;
		if (newpageno === this.state.reviews.length) {
			this.setState({
				pageno: 0
			});
		} else {
			this.setState({
				pageno: newpageno
			});
		}
	}

	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	nextReview = () => {
		const newpageno = this.state.pageno + 1;
		if (newpageno === this.state.reviews.length - 2) {
			this.setState({
				pageno: 0
			});
		} else {
			this.setState({
				pageno: newpageno
			});
		}
	};

	prevReview = () => {
		const pageno = this.state.pageno;
		if (pageno - 1 >= 0) {
			this.setState({
				pageno: pageno - 1
			});
		}
	};

	render() {
		const { reviews } = this.state;
		const pageno = this.state.pageno;
		const isLoading = this.state.isLoading;

		return (
			<section className="review_sec">
				<div className="row">
					<div className="col-md-3 col-12 px-0">
						<div className="review_line" />
						<div className="upperheading_review">
							<div className="student">What Students Say</div>
							<div className="about">About Us.</div>
						</div>
					</div>
					<div className="col-md-9 col-12 px-0">
						{isLoading ? (
							<div id="preloader">
								<div id="loader" />
							</div>
						) : null}
						<div className="user_review_wrapper">
							<div
								className="user_review_playlist"
								style={{
									transform: `translateX(-${pageno / reviews.length * 100}%)`
								}}
							>
								{window.innerWidth > 650 ? (
									reviews.map((particular_review, i) => (
										<div className="review_big_card" key={i}>
											<div className="review_small_card" key={i}>
												<Card
													key={i * 4}
													review={particular_review[0]}
													current_page={pageno * 4}
												/>
												<Card
													key={(i + 1) * 4}
													review={particular_review[1]}
													current_page={pageno * 4}
												/>
											</div>
											<div className="review_small_card">
												<Card
													key={(i + 2) * 4}
													review={particular_review[2]}
													current_page={pageno * 4}
												/>
												<Card
													key={(i + 3) * 4}
													review={particular_review[3]}
													current_page={pageno * 4}
												/>
											</div>
										</div>
									))
								) : (
									reviews.map((particular_review, i) => (
										<div className="review_big_card" key={i}>
											<div className="review_small_card" key={i}>
												<Card
													key={i * 4}
													review={particular_review[0]}
													current_page={pageno * 4}
												/>
											</div>
											<div className="review_small_card">
												<Card
													key={(i + 1) * 4}
													review={particular_review[1]}
													current_page={pageno * 4}
												/>
											</div>
										</div>
									))
								)}
							</div>
						</div>
					</div>
					<div className="col-md-3 col-12 px-0" />
					<div className="col-md-9 col-12 px-0 review_arrow">
						<button className="view_more_review left_arrow" onClick={() => this.prevReview()}>
							<i className="fas fa-caret-left" />
						</button>
						<button
							className="view_more_review right_arrow_review float-right"
							hidden={pageno === reviews.length - 1}
							onClick={() => this.nextReview()}
						>
							<i className="fas fa-caret-right" />
						</button>
					</div>
					{/* <div className="col-md-9 col-12 px-0 ">
					</div> */}
				</div>
			</section>
		);
	}
}

export default Review_Section;
