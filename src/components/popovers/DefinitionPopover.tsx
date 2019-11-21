import React, { Component } from "react";
import FoxIcon from "../../assets/img/fox-icon.png";
import "./DefinitionPopover.css";
import {OverlayTrigger, Popover} from "react-bootstrap";

type Props = {
	str: string;
}

class DefinitionPopover extends Component<Props> {

	render() {
		return (
			<OverlayTrigger
				overlay={
					<Popover id={"definition"}>
						<Popover.Title as={"h3"}>
							<img src={FoxIcon} className={"fox-icon"} alt={"Fox icon transparent"}/>
							Fox's Den Definitions&#8482;
						</Popover.Title>
						<Popover.Content>
							{this.props.str}
						</Popover.Content>
					</Popover>
				}
			>
				<b className={"definition"}>
					<img src={FoxIcon} className={"fox-icon"} alt={"Fox icon transparent"}/>
					{this.props.children}
				</b>
			</OverlayTrigger>
		);
	}

}

export default DefinitionPopover;