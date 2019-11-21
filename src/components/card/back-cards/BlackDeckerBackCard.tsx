import React, { Component } from "react";
import ICardData from "../../../interfaces/ICardData";
import Def from "../../popovers/DefinitionPopover";
import Image1 from "../../../assets/img/cards/blackdecker/image-1.jpg";
import Top from "../../../assets/img/cards/blackdecker/top.jpg";
import Ducts from "../../../assets/img/cards/blackdecker/ducts.jpg";

type Props = {
	toggleFlippedState: () => void;
	style?: any;
}

const DEFS = [
	"Visibility, mapping, affordances, constraints, feedback, consistency.",
	"The degree to which functions are made apparent to users.",
	"Using pictures to improve recognition. For example, at this point you've figured out that the fox icon shows a definition popover. The fox may seem arbitrary, but it's actually a play on professor Fox's name, the whole reason you're reading this in the first place.",
	"The relationship between controls and the actual results.",
	"An existing idea about how something works that is developed over time and accessed when we encounter a clue.",
	"When we build something ourselves, we have more of a psychological bond with it.",
	"Elements of a design that prevent the user from misusing it; promote user safety.",
	"A design that looks like it should do something, but doesn't."
];

class BlackDeckerBackCard extends Component<ICardData & Props> {

	render() {
		return (
			<div className={"content"}>
				<div className={"screenshot shadow-none"}>
					<img src={Image1} alt={"Black and Decker Air Conditioner"} style={{ height: 150 }}/>
				</div>
				<p>
					Call me crazy, but this air conditioner from Black and Decker is one of my favorite products displayed on this web app. Not only have I bought two of them, but it’s the only one that I’ve gone out of my way to write a review for on Amazon. Black and Decker did an outstanding job following all six <Def str={DEFS[0]}>key design principles</Def>.
				</p>
				<p>
					The functional <Def str={DEFS[1]}>visibility</Def> of every control is perfectly mapped using <Def str={DEFS[2]}>iconic representations</Def> on top panel of the device and on the included remote control. At the center of the top panel is an LED display that shows the temperature you’ve chosen to cool or heat to. To the left is the “mode” that the device is currently operating in: air-condition (represented by a snowflake), dehumidify (represented by a water drop), fan (represented by… a fan), and heat (represented by the sun). On the other side, four fans are shown, three of which increase in blade count as you look the right. The far-left fan has a circle around it, denoting “auto” mode.
				</p>
				<p>
					Below this you’ll find the power on button, two arrows to control the temperature, and a “mode” / “fan speed” selector button. Check out the image below, they really did a great job <Def str={DEFS[3]}>mapping</Def> each button to existing <Def str={DEFS[4]}>mental models</Def>.
				</p>
				<div className={"screenshot"}>
					<img src={Top} alt={"Top of the Black and Decker air conditioner"}/>
				</div>
				<p>
					The only issue I have with this product is its so called "night mode." When in night mode, which is represented by a moon icon on the remote, the product is meant to dim its LED panel and slowly increase the temperature throughout the following six hours to save energy. This seemed great to me, since the LED panel is unbearably bright in my room at night. Unfortunately, this is a <Def str={DEFS[7]}>false affordance</Def>, and the panel only dims ever so slightly. The blue LEDs still make my room feel like I'm in some sort of submarine at night. To this day, I have to place a piece of cardboard over the panels to get rid of the light.
				</p>
				<p>
					Possibly the main reason I love this product is thanks to the <Def str={DEFS[5]}>IKEA effect</Def>. No, I didn’t build the air conditioner, but I spent a ton of time and energy working out a way to run the exhaust heat somewhere other than my window.
				</p>
				<p>
					Normally, the air conditioner sits adjacent to a window where the exhaust duct allows waste heat to escape. I had two issues with this: first, the busy street outside my window is loud, and leaving it cracked open all night- despite the included plastic frame- keeps me from getting a good night sleep. Second, the space in front of my window is small, and putting the air conditioner here would take away valuable real estate.
				</p>
				<p>
					So naturally, I did what anyone would do. Since I live next to my laundry room, I drilled a 6” hole in my wall and the laundry room wall, ran an air duct into a temperature regulated duct fan, connected that to a wye-adapter, then connected the dryer duct to it. All of the exhaust heat from both my air conditioner and dryer is now blown outside the building.
				</p>
				<div className={"screenshot"}>
					<img src={Ducts} alt={"Air ducts with temperature fan"}/>
				</div>
				<p>
					Luckily, this air conditioner is hardy and can take abuse like this. If I run the dryer and air conditioner at the same time, the power goes out. But hey, at least my air conditioner still works. This is an intentional feature of the product- if it gets too hot, it surges the power to prevent any mechanical failures. This is called a <Def str={DEFS[6]}>constraint</Def>, and it keeps people like me from breaking it.
				</p>
				<p>
					Another example of a <Def str={DEFS[6]}>constraint</Def> is the wastewater valve. As many people know, the process that HVAC units undertake to condition air creates moisture. Many HVAC systems have a permanent hose attachment where water slowly escapes whenever the device is operating. However, Black and Decker knows that the buyers of this product aren’t going to hire a professional plumber to install a drainpipe in their wall- that’s why this air conditioner is “portable.” So instead, the device has a sealed water tank that only needs to be emptied once per season. I’ve had it for over a year and have still not had to drain it.
				</p>
				<hr/>
				<p>
					All in all, this air conditioner is one of my favorite products if you suffer from summertime heat like I do. If you're interested, <a href="https://www.amazon.com/gp/product/B01DLPUWJ4/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1" target="_blank">here it is on Amazon.</a> It even heats too!
				</p>
			</div>
		);
	}

}

export default BlackDeckerBackCard;