import React, { Component } from "react";
import ICardData from "../../../interfaces/ICardData";
import Def from "../../popovers/DefinitionPopover";
import RoboVac from "../../../assets/img/cards/eufy/robovac.jpg";
import Video1 from "../../../assets/img/cards/eufy/video-1.gif";
import App from "../../../assets/img/cards/eufy/app.png";
import SideBySide1 from "../../../assets/img/cards/eufy/side-by-side-1.jpg";
import SideBySide2 from "../../../assets/img/cards/eufy/side-by-side-2.jpg";
import SideBySide3 from "../../../assets/img/cards/eufy/side-by-side-3.jpg";

type Props = {
	toggleFlippedState: () => void;
	style?: any;
}

const DEFS = [
	"Appealing to sensory experiences such as touch & taste.",
	"Positive effects of environmental figures in design. Humans need a connection to the environment.",
	"Maintaining the same design across a single axis.",
	"The area between a user's goal and the means to execute that goal.",
	"Functional design is practically beautiful.",
	"Similar style and appearance across a family of products."
];

class EufyBackCard extends Component<ICardData & Props> {

	render() {
		return (
			<div className={"content"}>
				<img src={RoboVac} alt={"Eufy RoboVac"}/>
				<p>
					In order to compete with robotic vacuum giant Roomba, Anker stepped up to the scene and began releasing lower-cost, highly efficient smart home devices under their brand new subsidiary Eufy.
				</p>
				<p>
					I first bought their RoboVac 30C after extensive research and found that this model provides the same suction power and battery life as a Roomba that was nearly triple the price. Since then, I’ve not only fallen in love with the design, but my carpets are always beautifully cleaned- a perfect appeal for my <Def str={DEFS[0]}>physio-pleasure model</Def>.
				</p>
				<div className={"screenshot"}>
					<img src={Video1} alt={"Eufy RoboVac gif"}/>
				</div>
				<p>
					The RoboVac’s glossy black exterior with a hint of brown portrays a welcomed <Def str={DEFS[1]}>biophilia effect</Def>, giving a natural sense of modernity throughout its sleek edges. However, don’t let it’s minimalistic and <Def str={DEFS[2]}>symmetrical</Def> design fool you. This little guy is a force to reckon with if you’re a crumb on my floor.
				</p>
				<p>
					With up to 1500Pa of suction power, it can clean for up to 100 minutes. One great energy-saving feature is its BoostIQ mode, which intelligently responds to the conditions of the floor that it's cleaning and adjusts the suction accordingly. This greatly reduces the size of the <Def str={DEFS[3]}>gulf of execution</Def>, allowing anyone to run the RoboVac on its own for well over the advertised battery life.
				</p>
				<div className={"side-by-side"}>
					<div className={"screenshot"}>
						<img src={SideBySide1} alt={"Eufy RoboVac path"}/>
					</div>
					<div className={"screenshot"}>
						<img src={SideBySide2} alt={"Eufy RoboVac suction power"}/>
					</div>
					<div className={"screenshot"}>
						<img src={SideBySide3} alt={"Eufy RoboVac path"}/>
					</div>
				</div>
				<p>
					I have it scheduled to turn on every morning at 4:00 AM, and it usually runs until just before 6:00 AM- perfect timing for me to experience my freshly cleaned carpets. Once the battery is running low, the vacuum automatically returns to its docking station and awaits orders. When the RoboVac is running, it’s easy to tell that its <Def str={DEFS[4]}>form follows function</Def>, as the designers most likely based the design around the well-fitting internals of the unit.
				</p>
				<hr/>
				<p>
					The designers of the RoboVac worked closely with their mobile design team, who came up with the app as pictured below. By maintaining <Def str={DEFS[5]}>aesthetic consistency</Def> between their product lineup and mobile app, users like myself have very little difficulty when using the RoboVac. Even my dad, who often has trouble using newer technology, bought a RoboVac for my parents house. I expected him to reach out at least once with an issue, but he's had nothing of the sort.
				</p>
				<div className={"screenshot"}>
					<img src={App} alt={"Eufy app"}/>
				</div>
			</div>
		);
	}

}

export default EufyBackCard;