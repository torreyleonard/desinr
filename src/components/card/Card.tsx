import React, { Component, useState } from "react";
import { useSpring, animated as a, interpolate } from "react-spring";
import ICardData from "../../interfaces/ICardData";
import FrontLayout from "./layout/FrontLayout";
import BackLayout from "./layout/BackLayout";
import "./Card.css";

type Props = {
	data: ICardData;
	style?: any;
	childrenHiddenOpacity?: number;
}

function Card(props: Props) {

	// Card flip

	const [flipped, set] = useState(false);
	const { transform, opacity } = useSpring({
		opacity: flipped ? 1 : 0,
		transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
		config: { mass: 5, tension: 500, friction: 80 }
	});

	// Render

	return (
		<a.div
			style={{
				...props.style,
				height: "100%",
				width: "100%",
				position: "relative"
			}}
		>
			<FrontLayout
				{...props.data}
				toggleFlippedState={() => set(state => !state)}
				// style={{
				// 	opacity: opacity.interpolate((o: any) => 1 - o),
				// 	transform,
				// 	pointerEvents: "none"
				// }}
				style={{
					opacity,
					transform: transform.interpolate((t: any) => `${t} rotateX(180deg)`),
					pointerEvents: flipped ? "none" : "auto"
				}}
				hiddenOpacity={props.childrenHiddenOpacity}
			/>
			<BackLayout
				{...props.data}
				toggleFlippedState={() => set(state => !state)}
				// style={{
				// 	opacity,
				// 	transform: transform.interpolate((t: any) => `${t} rotateX(180deg)`)
				// }}
				style={{
					opacity: opacity.interpolate((o: any) => 1 - o),
					transform,
					pointerEvents: flipped ? "none" : "auto"
				}}
			/>
		</a.div>
	);
}

export default Card;