import React, { Component } from 'react';
import Heading from "./components/heading/Heading";
import CardContainer from "./components/card/CardContainer";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import BottomButtons from "./components/buttons/BottomButtons";

import "./App.css";

type State = {
	width: number;
	height: number;
	ready: boolean;
}

class App extends Component<any, State> {

	constructor(props: any) {
		super(props);
		this.state = {
			width: window.innerWidth,
			height: window.innerHeight,
			ready: false
		}
	}

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

	render() {
		return (
			<div className={"app"}>
				<div className={"top-row"}>
					<Heading
						collapsed={false}
						onReady={() => this.setState({ ...this.state, ready: true })}
					/>
				</div>
				<div style={{
					width: window.innerWidth-50,
					height: window.innerWidth-50,
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
					<BottomButtons
						icon={faCheck}
						style={{ color: "green" }}
						onPress={() => this.onPress("right")}
						ready={this.state.ready}
					/>
				</div>
			</div>
		);
	}

}

export default App;
