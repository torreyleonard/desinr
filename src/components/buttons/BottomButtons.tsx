import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./BottomButtons.css";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import { interpolate, useSpring, animated as a } from "react-spring";

type Props = {
	icon: IconProp;
	style?: any;
	onPress?: () => void;
	ready: boolean;
}

function BottomButtons(props: Props) {
	const [state, toggle] = useState(false);
	const spring = useSpring({
		from: {
			boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
			opacity: props.ready ? 1 : 0
		},
		boxShadow: `0px 0px 10px 0px rgba(0,0,0,${state ? 0 : 0.2})`,
		opacity: props.ready ? (state ? 0.5 : 1) : 0
	});

	return (
		<a.div
			className={"bottom-button"}
			onClick={() => {
				if (props.onPress) props.onPress();
				toggle(true);
				setTimeout(() => toggle(false), 1000);
			}}
			style={{
				...props.style,
				...spring
			}}
		>
			<FontAwesomeIcon icon={props.icon}/>
		</a.div>
	);
}

export default BottomButtons;