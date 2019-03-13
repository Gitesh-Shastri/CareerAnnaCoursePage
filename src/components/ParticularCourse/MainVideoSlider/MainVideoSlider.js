import React, { Component } from 'react';
import './MainVideoSlider.scss';

import Card from './Card/Card';
import Modal from '../../UI/Modal/Modal';

class MainVideoSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos_playlist: [
				{
					video_url: 'Intro_Cube-min.png',
					index: 0,
					title: 'Cubes Introduction - Logical Reasoning for CAT',
					url_link: 'https://www.youtube.com/embed/fK0Hqhq86Bg?autoplay=1'
				},
				{
					video_url: 'LR Seating Arrangement-min.png',
					index: 1,
					title: 'LR Seating Arrangement',
					url_link: 'https://www.youtube.com/embed/Odw8S0WExac?autoplay=1'
				},
				{
					video_url: 'Speed Maths-min.png',
					index: 2,
					title: 'Speed Maths',
					url_link: 'https://www.youtube.com/embed/6ussc-htZtc?autoplay=1'
				},
				{
					video_url: 'Averages, Mixtures and Allegations-min.png',
					index: 3,
					title: 'Averages, Mixtures and Allegations',
					url_link: 'https://www.youtube.com/embed/B9-2GqctIyE?autoplay=1'
				}
			],
			video_item: {
				video_url: 'Intro_Cube-min.png',
				index: 0,
				title: 'Cubes Introduction - Logical Reasoning for CAT',
				url_link: 'https://www.youtube.com/embed/fK0Hqhq86Bg?autoplay=1'
			},
			title: props.title,
			disabled: true,
			showModal: false
		};
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
				if (this.state.video_item.index === this.state.videos_playlist.length - 1) {
					this.setState({
						video_item: this.state.videos_playlist[0]
					});
				} else {
					this.setState({
						video_item: this.state.videos_playlist[this.state.video_item.index + 1]
					});
				}
			}
		}
	}

	componentDidMount() {
		if (this.state.title === 'Trending') {
			this.intervalId = setInterval(this.timer.bind(this), 3000);
		} else {
			this.intervalId = setInterval(this.timer.bind(this), 4000);
		}
	}
	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	nextProperty = () => {
		if (this.state.video_item.index !== undefined) {
			const newIndex = this.state.video_item.index + 1;
			this.setState({
				video_item: this.state.videos_playlist[newIndex]
			});
		}
	};

	prevProperty = () => {
		if (this.state.video_item.index === 0) {
			return;
		}
		const newIndex = this.state.video_item.index - 1;
		this.setState({
			video_item: this.state.videos_playlist[newIndex]
		});
	};

	clearIntervalMouse = () => {
		clearInterval(this.intervalId);
	};

	startIntervalMouse = () => {
		this.intervalId = setInterval(this.timer.bind(this), 2000);
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
						autoPlay="true"
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
								transform: `translateX(-${video_item.index * (100 / videos_playlist.length)}%)`
							}}
						>
							{videos_playlist.map((particular_video, i) => (
								<div
									key={i}
									onMouseEnter={() => this.clearIntervalMouse()}
									onMouseLeave={() => this.startIntervalMouse()}
									onClick={() => this.showModal(i)}
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
							disabled={video_item.index > videos_playlist.length - 3}
							hidden={video_item.index > videos_playlist.length - 3}
						>
							<i className="fa fa-angle-right" />
						</button>
					</div>
					<div className="col-12 d-lg-none arrow_small">
						<button
							className="next_video_prev_small"
							onClick={() => this.prevProperty()}
							disabled={video_item.index === 0}
							hidden={video_item.index === 0}
						>
							<i className="fa fa-caret-left" />
						</button>
						<button
							className="next_video_right_small float-right"
							onClick={() => this.nextProperty()}
							disabled={video_item.index === videos_playlist.length - 1}
							hidden={video_item.index === videos_playlist.length - 1}
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
