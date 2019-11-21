import React, { Component } from "react";
import ICardData from "../../../interfaces/ICardData";
import Def from "../../popovers/DefinitionPopover";
import LaMetric from "../../../assets/img/cards/lametric/lametric.png";

type Props = {
	toggleFlippedState: () => void;
	style?: any;
}

const DEFS = [
	"Properties that indicate how a product should be used."
];

class LaMetricBackCard extends Component<ICardData & Props> {

	render() {
		return (
			<div className={"content"}>
				<img src={LaMetric} alt={"LaMetric Time"}/>
				<p>
					The LaMetric Time is the perfect blend of modern and class that acts as a clock for the information age. While it's initial <Def str={DEFS[0]}>perceived affordance</Def> is as a simple digital clock, it can also shows weather information, your live YouTube / Instagram follower count, stock prices, and anything else that can fit on the LED ticker display.
				</p>
				<p>
					After being founded in Ukraine, it's <a href="https://www.kickstarter.com/projects/smartatoms/lametric-customizable-smart-ticker-for-life-and-bu" target="_blank">Kickstarter</a> raised $370,001 in 2014. The retro styling looks great in any setting, and allows you to personalize a space with minimal effort. Using the free mobile app, you can install "apps" on your Time that provide all of it's unique display functions.
				</p>
			</div>
		);
	}

}

export default LaMetricBackCard;