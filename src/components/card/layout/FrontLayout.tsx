import React, { Component } from "react";
import ICardData from "../../../interfaces/ICardData";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animated as a } from "react-spring";
import "./FrontLayout.css";

type Props = {
	toggleFlippedState: () => void;
	style?: any;
	hiddenOpacity?: number;
}

class FrontLayout extends Component<ICardData & Props> {

	render() {
		return (
			<a.div
				className={"stacked-card front"}
				style={{
					...this.props.style,
					background: `url(${this.props.backgroundImage})`,
					backgroundSize: "cover",
					pointerEvents: "auto"
				}}
			>
				<div className={"upper-container-underlay"} />
				<div className={"upper-container"}>
					<FontAwesomeIcon icon={this.props.categoryIcon} style={{ paddingRight: 8, marginTop: -1 }}/>
					{this.props.category}
				</div>
				<div className={"lower-container"}>
					<div>
						<div className={"title"}>
							{this.props.title}
						</div>
						<div className={"subtitle"}>
							{this.props.subtitle}
						</div>
					</div>
					<div className={"icon"} onClick={this.props.toggleFlippedState}>
						<FontAwesomeIcon icon={faInfoCircle}/>
					</div>
				</div>
				<a.div className={"hidden-card-overlay"} style={{
					opacity: this.props.hiddenOpacity
				}}/>
			</a.div>
		);
	}

}

export default FrontLayout;