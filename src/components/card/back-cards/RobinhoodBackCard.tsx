import React, { Component } from "react";
import ICardData from "../../../interfaces/ICardData";
import Def from "../../popovers/DefinitionPopover";
import App1 from "../../../assets/img/cards/robinhood/app-1.png";
import Logo from "../../../assets/img/cards/robinhood/logo.png";
import Ad from "../../../assets/img/cards/robinhood/ad.png";
import Order from "../../../assets/img/cards/robinhood/order.png";
import Compare from "../../../assets/img/cards/robinhood/compare.png";

type Props = {
	toggleFlippedState: () => void;
	style?: any;
}

const DEFS = [
	"Anyone can understand the design, regardless of mental ability.",
	"The design should be usable by as many people as possible without needing modification.",
	"Shapes with smooth edges convey positive emotions while shapes with pointy edges are interpreted as more threatening.",
	"Colors convey emotion. Green conveys safety, security, nature, and lack of stress.",
	"Everyone can use the product regardless of mental ability.",
	"Focus resources on 20% of the most used product features.",
	"The amount of relevant information vs. irrelevant information. The goal of design is to have a high signal to noise ratio.",
	"Requiring verification before actions are performed.",
	"The area between a user's goal and the means to execute that goal."
];

class RobinhoodBackCard extends Component<ICardData & Props> {

	render() {
		return (
			<div className={"content"}>
				<img src={Logo} alt={"Robinhood logo"}/>
				<p>
					As the first stock brokerage to offer zero commission fees in 2013, Robinhood has paved the way for this past October's tidal wave of commission cuts, with huge brokerages like Charles Schwab, Interactive Brokers, TD Ameritrate, and E*Trade following suit- only six years later. In response, Robinhood published this full-page ad in newspapers across the nation:
				</p>
				<div className={"screenshot"}>
					<img src={Ad} alt={"Robinhood full page newspaper ad change doesn't happen overnight"}/>
				</div>
				<p>
					If I could give out an award for best design of all time, I would give it to Robinhood in a heartbeat. For years, I've loved their design and have used it for my own inspiration, and this newspaper ad is just another beautiful example. The <Def str={DEFS[0]}>simplicity</Def> of their interfaces and <Def str={DEFS[1]}>accessibility</Def> of their platform as a whole not only looks good, but has lead to their growth of over three million users. That's nearly the same as E*Trade, and they've been around since 1982.
				</p>
				<p>
					Take a look at the images below. By making use of a smooth <Def str={DEFS[2]}>contour bias</Def> and the UI's green <Def str={DEFS[3]}>color effects</Def>, they've not only removed commissions, but removed any stress and confusion during the stock purchasing process. Plus, after the various <Def str={DEFS[6]}>confirmation</Def> steps, there's no way you can accidentally place an order.
				</p>
				<div className={"screenshot shadow-none"}>
					<img src={Order} alt={"Robinhood order process"}/>
				</div>
				<p>
					The process that Robinhood began is similar to the Catholic church during the Middle Ages. During that time, only priests were able to read the Bible, which was written solely in Latin for hundreds of years. Eventually, Gutenberg invented the printing press, and all of a sudden anyone could read the Bible. Before Robinhood, online brokerages had confusing and intimidating interfaces. This reduced their <Def str={DEFS[3]}>operability</Def> to only those who had prior knowledge of stock trading. Before that, orders were placed over the phone, but this was typically done by your financial advisor.
				</p>
				<p>
					Go ahead and see for yourself, how easily can you use both of these interfaces?
				</p>
				<div className={"screenshot"}>
					<img src={Compare} alt={"Robinhood vs. Etrade"}/>
				</div>
				<p>
					By designing around the <Def str={DEFS[4]}>80/20 rule</Def> and moving the least used features to elsewhere in the interface, Robinhood has greatly increased the <Def str={DEFS[5]}>signal-to-noise ratio</Def> when compared to other platforms.
				</p>
				<div className={"screenshot shadow-none"}>
					<img src={App1} alt={"Robinhood app 3D"}/>
				</div>
				<p>
					It's easy to see why Robinhood is a powerful contender in the financial industry. With their sleek, modern design, anyone can bridge the <Def str={DEFS[6]}>gulf of execution</Def> and begin trading stocks themselves. Go ahead, take a look for yourself at the app. And if you decide to create an account, Robinhood offers free stocks to anyone that signs up using a referral link. If you know someone using Robinhood, ask them- if not, <a href="https://freestock.robinhood.com/torreyl" target="_blank">here's mine.</a>
				</p>
			</div>
		);
	}

}

export default RobinhoodBackCard;