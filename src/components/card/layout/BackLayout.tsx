import React, { Component } from "react";
import ICardData from "../../../interfaces/ICardData";
import {faUndoAlt, faExpandArrowsAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { animated as a } from "react-spring";
import {Modal} from "react-bootstrap";
import "./BackLayout.css";

type Props = {
	toggleFlippedState: () => void;
	style?: any;
}

type State = {
	showModal: boolean;
}

class BackLayout extends Component<ICardData & Props, State> {

	constructor(props: ICardData & Props) {
		super(props);
		this.state = {
			showModal: false
		}
	}

	render() {
		return (
			<a.div
				className={"stacked-card back"}
				style={this.props.style}
			>
				<div className={"icon"}  onClick={this.props.toggleFlippedState}>
					<FontAwesomeIcon icon={faUndoAlt}/>
				</div>
				<div className={"icon fullscreen"}  onClick={() => this.setState({ ...this.state, showModal: true })}>
					<FontAwesomeIcon icon={faExpandArrowsAlt}/>
				</div>
				{this.props.backCard && (<this.props.backCard/>)}
				<Modal show={this.state.showModal} onHide={() => this.setState({ ...this.state, showModal: false })}>
					<Modal.Header closeButton>
						<Modal.Title>{this.props.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{this.props.backCard && (<this.props.backCard/>)}
					</Modal.Body>
				</Modal>
			</a.div>
		);
	}

}

export default BackLayout;