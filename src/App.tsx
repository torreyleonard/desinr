import React, { Component } from 'react';
import Heading from "./components/heading/Heading";
import CardContainer from "./components/card/CardContainer";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import BottomButtons from "./components/buttons/BottomButtons";
import { withOrientationChange, isMobile, isBrowser } from 'react-device-detect'

import "./App.css";
import "./assets/lib/devices.min.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import InfoButton from "./components/buttons/InfoButton";

type State = {
	width: number;
	height: number;
	ready: boolean;
}

class App extends Component<any, State> {

	constructor(props: any) {
		super(props);
		this.state = {
			width: 0,
			height: 0,
			ready: false
		}
	}

	private appContainer: HTMLDivElement|null = null;
	private cardContainer: CardContainer|null = null;
	private isAnimating = false;

	onPress = (direction: any) => {
		if (!this.isAnimating) {
			this.isAnimating = true;
			this.cardContainer!.nextCard(direction);
			setTimeout(() => {
				this.isAnimating = false;
			}, 500);
		}
	};

	componentDidMount() {
		this.setState({
			...this.state,
			width: this.appContainer!.offsetWidth,
			height: this.appContainer!.offsetHeight
		});
	}

	getContent = () => {
		return (
			<div className={"app"} ref={ref => this.appContainer = ref} id={"app"}>
				<div className={"top-row"}>
					<Heading
						collapsed={false}
						onReady={() => this.setState({ ...this.state, ready: true })}
					/>
				</div>
				<div id={""} style={{
					width: this.state.width-50,
					height: this.state.width-50,
					position: "relative"
				}}>
					<CardContainer
						ref={ref => this.cardContainer = ref}
						ready={this.state.ready}
					/>
				</div>
				<div className={"bottom-row"}>
					<BottomButtons
						icon={faTimes}
						style={{ color: "red" }}
						onPress={() => this.onPress("left")}
						ready={this.state.ready}
					/>
					<InfoButton ready={this.state.ready}/>
					<BottomButtons
						icon={faCheck}
						style={{ color: "green" }}
						onPress={() => this.onPress("right")}
						ready={this.state.ready}
					/>
				</div>
			</div>
		);
	};

	render() {
		const { isLandscape, isPortrait } = this.props;
		if (isMobile && isPortrait) {
			return this.getContent();
		} else if (isMobile && isLandscape) {
			return (
				<div className={"app"}>
					<span>
						This webapp works only while in portrait mode. Please rotate your device.
					</span>
				</div>
			);
		} else {
			return (
				<div className={"device-wrapper"}>
					<div className="marvel-device iphone-x">
						<div className="notch">
							<div className="camera"/>
							<div className="speaker"/>
						</div>
						<div className="top-bar"/>
						<div className="sleep"/>
						<div className="bottom-bar"/>
						<div className="volume"/>
						<div className="overflow">
							<div className="shadow shadow--tr"/>
							<div className="shadow shadow--tl"/>
							<div className="shadow shadow--br"/>
							<div className="shadow shadow--bl"/>
						</div>
						<div className="inner-shadow"/>
						<div className="screen">
							{this.getContent()}
						</div>
					</div>
				</div>
			);
		}
	}

}

export default withOrientationChange(App);
