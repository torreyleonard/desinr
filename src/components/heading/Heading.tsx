import React, {Component, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFireAlt} from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated as a, interpolate } from "react-spring";
import "./Heading.css";

type Props = {
	collapsed?: boolean;
	onReady: () => void;
	ready: boolean;
}

const SPAN_WIDTH = 150;

function Heading(props: Props) {
	const [ firstAnimationComplete, setFirstAnimationComplete ] = useState(false);
	const { width, backgroundColor } = useSpring({
		width: props.ready ? (props.collapsed ? 0 : SPAN_WIDTH) : 0,
		backgroundColor: props.ready ? "rgba(0,0,0,0)" : "rgba(0,0,0,1)",
		from: {
			width: 0,
			backgroundColor: "rgba(0,0,0,1)"
		},
		onRest: () => {
			if (props.ready) {
				setFirstAnimationComplete(true);
			}
		}
	});
	const spring = useSpring({
		transform: `scale(${firstAnimationComplete ? 0.8 : 1.5 })`,
		height: firstAnimationComplete ? "20%" : "100%",
		from: {
			transform: `scale(1.5)`,
			height: "100%"
		},
		onRest: () => {
			if (firstAnimationComplete) {
				props.onReady();
			}
		}

	});
	return (
		<a.div className={"heading"} style={{ transform: spring.transform, height: spring.height, backgroundColor }}>
			<a.span style={{ width }}>desinr&nbsp;</a.span>
			<FontAwesomeIcon icon={faFireAlt} className={"logo"}/>
		</a.div>
	);
}

export default Heading;