import React, {Component, useState, useEffect, useRef} from "react";
import "./Card.css";
import Card from "./Card";
import {useSpring, animated as a} from 'react-spring';
import ICardData from "../../interfaces/ICardData";
import CardData from "../../constants/CardData";

type Direction = "right"|"left";

type State = {
	data: ICardData[];
	frontCardIndex: number;
	direction: Direction;
}

class CardContainer extends Component<{ ready: boolean, onReady: () => void }, State> {

	constructor(props: any) {
		super(props);
		this.state = {
			data: [],
			frontCardIndex: 0,
			direction: "right",
		}
	}

	componentDidMount() {
		this.setState({
			...this.state,
			data: CardData.sort(() => Math.random() - 0.5)
		});
	}

	public nextCard = (direction: Direction) => {
		let nextIndex = this.state.frontCardIndex + 1;
		if (nextIndex > this.state.data.length) {
			nextIndex = 1;
		}
		this.setState({
			...this.state,
			frontCardIndex: nextIndex,
			direction
		});
	};

	getPos = (i: number): number => {
		let pos = (i + 1) - this.state.frontCardIndex;
		if (pos <= 0) {
			pos += this.state.data.length;
		}
		return pos;
	};

	private cardsReady = 0;

	onCardReady = () => {
		this.cardsReady += 1;
		if (this.cardsReady === this.state.data.length) {
			this.props.onReady();
		}
	};

	render() {
		return (
			<React.Fragment>
				{this.state.data.map((item, i) =>
					<AnimatedCard
						state={this.state}
						item={item}
						key={i}
						pos={this.getPos(i)}
						ready={this.props.ready}
						onReady={this.onCardReady}
					/>
				)}
			</React.Fragment>
		);
	}

}

function AnimatedCard({ item, pos, state, ready, onReady }: { item: ICardData, pos: number, state: State, ready: boolean, onReady: () => void }) {

	// Check if fading out
	const prev = usePrevious(pos);
	const [isFadingOut, setIsFadingOut] = useState(false);

	useEffect(() => {
		onReady();
		if (prev === 1 && pos !== 1) {
			setIsFadingOut(true);
		}
	});

	const spring = useSpring({
		hiddenOpacity: pos === 1 || isFadingOut || pos > 4 ? 0 : 1,
		opacity: !ready ? 0 : (pos === 1 ? 1 : (pos > 3 ? 0 : 1/pos+0.5)),
		transform: `translate(${isFadingOut ? (window.innerWidth * (state.direction === "left" ? -1 : 1)) : 0}px,
			-${isFadingOut ? 1 : (pos === 1 ? 1 : (pos*50)-60)}px)
			scale(${isFadingOut ? 1 : (pos === 1 ? 1 : 1/pos+0.4)})`,
		from: {
			hiddenOpacity: pos === 1 ? 0 : 1,
			transform: `translate(0px, -0px) scale(1)`,
			opacity: 0
		},
		onRest: () => setIsFadingOut(false)
	});


	return (
		<a.div style={{
			height: "100%",
			width: "100%",
			position: "absolute",
			zIndex: isFadingOut ? 100 : (state.data.length - pos),
			transform: spring.transform,
			opacity: spring.opacity,
		}}>
			<Card
				data={item}
				childrenHiddenOpacity={spring.hiddenOpacity}
				isFadingOut={isFadingOut}
			/>
		</a.div>
	);
}

function usePrevious(value: any) {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
}

export default CardContainer;