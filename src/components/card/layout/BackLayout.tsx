import React, { Component } from "react";
import ICardData from "../../../interfaces/ICardData";
import {faUndoAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { animated as a } from "react-spring";
import "./BackLayout.css";

type Props = {
	toggleFlippedState: () => void;
	style?: any;
}

class BackLayout extends Component<ICardData & Props> {

	render() {
		return (
			<a.div
				className={"stacked-card back"}
				style={this.props.style}
			>
				<div className={"icon"}  onClick={this.props.toggleFlippedState}>
					<FontAwesomeIcon icon={faUndoAlt}/>
				</div>
			</a.div>
		);
	}

}

export default BackLayout;