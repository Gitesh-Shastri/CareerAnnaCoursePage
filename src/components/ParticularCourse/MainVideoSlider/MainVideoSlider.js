import React, { Component } from 'react';
import './MainVideoSlider.scss';

import axios from 'axios';

import Card from './Card/Card';
import Modal from '../../UI/Modal/Modal';

class MainVideoSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos_playlist: [],
			video_item: {},
			title: props.title,
			disabled: true,
			showModal: false
		};
	}

	componentDidMount() {
		let product_id = this.props.product_id;
		const formData = new FormData();
		formData.append('product_id', product_id);

		axios
			.post('https://www.careeranna.com/websiteapi/getCourseDemoVideos', formData)
			.then((response) => {
				this.setState({ videos_playlist: response.data, video_item: response.data[0] });
				this.intervalId = setInterval(this.timer.bind(this), 4000);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	showModal(i) {
		this.setState({
			showModal: true,
			video_item: this.state.videos_playlist[i]
		});
	}

	hideModal() {
		this.setState({ showModal: false });
	}

	timer() {
		if (window.innerWidth > 650) {
			if (!this.state.showModal) {
				if (Number(this.state.video_item.video_index) === this.state.videos_playlist.length - 1) {
					this.setState({
						video_item: this.state.videos_playlist[0]
					});
				} else {
					this.setState({
						video_item: this.state.videos_playlist[Number(this.state.video_item.video_index) + 1]
					});
				}
			}
		}
	}

	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	nextProperty = () => {
		if (Number(this.state.video_item.video_index) !== undefined) {
			const newIndex = Number(this.state.video_item.video_index) + 1;
			this.setState({
				video_item: this.state.videos_playlist[newIndex]
			});
		}
	};

	prevProperty = () => {
		if (Number(this.state.video_item.video_index) === 0) {
			return;
		}
		const newIndex = Number(this.state.video_item.video_index) - 1;
		this.setState({
			video_item: this.state.videos_playlist[newIndex]
		});
	};

	clearIntervalMouse = () => {
		clearInterval(this.intervalId);
	};

	startIntervalMouse = () => {
		this.intervalId = setInterval(this.timer.bind(this), 4000);
	};

	render() {
		const { videos_playlist, video_item } = this.state;
		const showModal = this.state.showModal;
		return (
			<div className="MainVideoSlider" id="video">
				<Modal show={this.state.showModal} modalClosed={() => this.hideModal()}>
					<iframe
						className="videoFrame"
						title={showModal ? video_item.title : null}
						width="650"
						height="366"
						src={showModal ? video_item.url_link : ''}
						frameBorder="0"
						autoPlay={true}
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</Modal>
				<div className="row large_slider">
					<div className="pr-0 video_box_cat ">
						<div className="video_box_demo_cat">
							<div className="heading">
								{this.state.title}
								<span className="subheading">Videos</span>
							</div>
							<hr className="trending_line" />
						</div>
					</div>
					<div className="arrow_left_cat px-0">
						<button className="next_video_prev_video" onClick={() => this.prevProperty()}>
							<i className="fa fa-angle-left" />
						</button>
					</div>
					<div className="px-0 col-12 video_player_list">
						<div
							className="video_playlist"
							style={{
								transform: `translateX(-${Number(video_item.video_index) *
									(100 / videos_playlist.length)}%)`
							}}
						>
							{videos_playlist.map((particular_video, i) => (
								<div
									key={i}
									onMouseEnter={() => this.clearIntervalMouse()}
									onMouseLeave={() => this.startIntervalMouse()}
									onClick={() => this.showModal(Number(particular_video.video_index))}
								>
									<Card key={i} Video={particular_video} />
								</div>
							))}
						</div>
					</div>
					<div className="px-0 arrow_right_cat">
						<button
							className="next_video_right_video"
							onClick={() => this.nextProperty()}
							disabled={Number(video_item.video_index) > videos_playlist.length - 3}
							hidden={Number(video_item.video_index) > videos_playlist.length - 3}
						>
							<i className="fa fa-angle-right" />
						</button>
					</div>
					<div className="col-12 d-lg-none arrow_small">
						<button
							className="next_video_prev_small"
							onClick={() => this.prevProperty()}
							disabled={Number(video_item.video_index) === 0}
							hidden={Number(video_item.video_index) === 0}
						>
							<i className="fa fa-caret-left" />
						</button>
						<button
							className="next_video_right_small float-right"
							onClick={() => this.nextProperty()}
							disabled={Number(video_item.video_index) === videos_playlist.length - 1}
							hidden={Number(video_item.video_index) === videos_playlist.length - 1}
						>
							<i className="fa fa-caret-right" />
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default MainVideoSlider;
