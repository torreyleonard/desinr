import React, { Component } from "react";
import ICardData from "../../../interfaces/ICardData";
import Def from "../../popovers/DefinitionPopover";
import LaMetric from "../../../assets/img/cards/lametric/lametric.png";
import Video1 from "../../../assets/img/cards/lametric/video-1.gif";
import Video2 from "../../../assets/img/cards/lametric/video-2.gif";

type Props = {
	toggleFlippedState: () => void;
	style?: any;
}

const DEFS = [
	"Properties that indicate how a product should be used.",
	"Tactile information that lets you know if you are using the product correctly.",
	"The design is easy to understand.",
	"A simple way to visualize and understand complex information using trees, nests, and stairs.",
	"A design that looks like it should do something, but doesn't.",
	"A design that the user fails to perceive.",
	"Use a positive, courteous tone; precise, constructive messages; try to reinforce with audio, and maintain aesthetic consistency throughout. Avoid using 'scary' or unhelpful uppercase terms such as FATAL, ILLEGAL, and BAD."
];

class LaMetricBackCard extends Component<ICardData & Props> {

	render() {
		return (
			<div className={"content"}>
				<img src={LaMetric} alt={"LaMetric Time"}/>
				<p>
					The LaMetric Time is the perfect blend of modern and class that acts as a clock for the information age. While its initial <Def str={DEFS[0]}>perceived affordance</Def> is as a simple digital clock, it can also show weather information, your live YouTube / Instagram follower count, stock prices, and anything else that can fit on the LED ticker display.
				</p>
				<p>
					After being founded in Ukraine, it's <a href="https://www.kickstarter.com/projects/smartatoms/lametric-customizable-smart-ticker-for-life-and-bu" target="_blank">Kickstarter</a> raised $370,001 in 2014. The retro styling looks great in any setting and allows you to personalize a space with minimal effort. Using the free mobile app, you can install "apps" on your Time that provide all of its unique display functions.
				</p>
				<p>
					The buttons on the Time provide <Def str={DEFS[1]}>haptic feedback</Def> with every press, and it honestly feels very satisfying. The right and left buttons on the top of the device allow you to navigate through each “app,” almost as if swiping through pages on your phone home screen. The <Def str={DEFS[2]}>simplicity</Def> of this aspect of the design is one of its best features. However, things start to get a little more difficult when you need to perform certain actions on each “app.”
				</p>
				<div className={"screenshot"}>
					<img src={Video1} alt={"LaMetric gif"}/>
				</div>
				<p>
					To open an “app” and enter its submenu, you press the only other button on the top of the device: the center button. This is where the Time’s navigation <Def str={DEFS[3]}>hierarchy</Def> begins to break down and become a bit more fulf using. Pressing this button on the clock app opens a timer… or a stopwatch… or an alarm, I’m not really sure. Either way, it displays “8:00 A,” with underlines beneath each digit- my <Def str={DEFS[4]}>natural mapping</Def> would suggest that this allows me to change these numbers, most likely with the right or left buttons. However, this <Def str={DEFS[4]}>false affordance</Def> instead brings me to the next app, just like before. So, I press the center button instead- nothing. Back to the main screen. How do I set an alarm?
				</p>
				<p>
					One great <Def str={DEFS[5]}>hidden affordance</Def> of the Time is its built-in speaker. It doesn’t sound amazing, but it can be used as a Bluetooth speaker or an internet radio. However, the radio suffers from the same <Def str={DEFS[3]}>hierarchy</Def> issue as the other menus. Pressing the center action button on the radio displays “106 JACK FM,” then nothing. The screen goes blank. It should display an audio equalizer like in the image below. Maybe it’s having issues trying to play the station? Either way, I can’t change the station using the right and left buttons, so I’m stuck listening to whatever JACK FM is, which is apparently nothing.
				</p>
				<div className={"screenshot shadow-none"}>
					<img src={Video2} alt={"LaMetric radio gif"}/>
				</div>
				<p>
					A few months ago, I experienced a pretty frustrating issue with my Time. After a botched firmware update broke negotiation with Wi-Fi networks, my Time was unable to connect to the internet. It became a “dumb” clock, only capable of displaying the time. I tried briefly to fix the issue, but the <Def str={DEFS[6]}>error message</Def> was unhelpful and vague. I eventually gave up and was fine with just knowing what time it was… until daylight savings time. Due to the lack of updates from the internet, the device was now displaying the time incorrectly. I spent hours trying to flash new firmware on it according to LaMetric’s support, and finally got it working again.
				</p>
				<hr/>
				<p>
					All in all, the LaMetric Time is a great product for showing you helpful information at a glance. These days, I only use mine as a clock, but it sure looks great on my desk next to other well designed tech products.
				</p>
			</div>
		);
	}

}

export default LaMetricBackCard;