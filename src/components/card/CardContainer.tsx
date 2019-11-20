import React, {Component, useState, useEffect, useRef} from "react";
import "./Card.css";
import Card from "./Card";
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import {useSpring, animated as a} from 'react-spring';
import ICardData from "../../interfaces/ICardData";
import CardData from "../../enums/CardData";

type Direction = "right"|"left";

type State = {
	data: ICardData[];
	frontCardIndex: number;
	direction: Direction;
}

class CardContainer extends Component<{ ready: boolean }, State> {

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
			data: CardData
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

	render() {
		if (this.props.ready) {
			return (
				<React.Fragment>
					{ this.state.data.map((item, i) => <AnimatedCard state={this.state} item={item} key={i} pos={this.getPos(i)}/>) }
				</React.Fragment>
			);
		} else {
			return (
				<div/>
			);
		}
	}

}

function AnimatedCard({ item, pos, state }: { item: ICardData, pos: number, state: State }) {

	// Check if fading out
	const prev = usePrevious(pos);
	const [isFadingOut, setIsFadingOut] = useState(false);

	useEffect(() => {
		if (prev === 1 && pos !== 1) {
			setIsFadingOut(true);
		}
	});

	const spring = useSpring({
		hiddenOpacity: pos === 1 || isFadingOut || pos > 4 ? 0 : 1,
		opacity: pos === 1 ? 1 : (pos > 3 ? 0 : 1/pos+0.5),
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
			opacity: spring.opacity
		}}>
			<Card
				data={item}
				childrenHiddenOpacity={spring.hiddenOpacity}
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