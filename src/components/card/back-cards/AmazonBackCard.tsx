import React, { Component } from "react";
import ICardData from "../../../interfaces/ICardData";
import Def from "../../overlays/DefinitionPopover";
import AmazonLogo from "../../../assets/img/cards/amazon/amazon-logo.png";
import Video1 from "../../../assets/img/cards/amazon/video-1.gif";
import Video2 from "../../../assets/img/cards/amazon/video-2.gif";
import Screenshot1 from "../../../assets/img/cards/amazon/screenshot-1.png";
import Screenshot2 from "../../../assets/img/cards/amazon/screenshot-2.png";
import Redesign from "../../../assets/img/cards/amazon/amazon-redesign.png";
import VideoStatusBar from "../../../assets/img/cards/amazon/video-statusbar.gif";
import WhereGif from "../../../assets/img/cards/amazon/where-gif.gif";
import VideoMapping from "../../../assets/img/cards/amazon/video-mapping.gif";
import Screenshot3 from "../../../assets/img/cards/amazon/screenshot-3.png";
import GreatPumpkinGif from "../../../assets/img/cards/amazon/great-pumpkin.gif";
import Alexa from "../../../assets/img/cards/amazon/alexa.png";
import AlexaGif from "../../../assets/img/cards/amazon/alexa-gif.gif";

type Props = {
	toggleFlippedState: () => void;
	style?: any;
}

const DEFS = [
	"The amount of relevant information vs. irrelevant information. The goal of design is to have a high signal to noise ratio.",
	"When there are a ton of options, it takes a long time to pick one. Avoid overwhelming the user by keeping options organized and modular.",
	"Using pictures to improve recognition. For example, at this point you've figured out that the fox icon shows a definition popover. The fox may seem arbitrary, but it's actually a play on professor Fox's name, the whole reason you're reading this in the first place.",
	"Dividing large systems into smaller, self contained systems.",
	"A simple way to visualize and understand complex information using trees, nests, and stairs.",
	"Shapes with smooth edges convey positive emotions while shapes with pointy edges are interpreted as more threatening.",
	"Having light text on a dark background improves legibility, and vice-versa.",
	"An existing idea about how something works that is developed over time and accessed when we encounter a clue.",
	"Similar style and appearance across a product."
];

class AmazonBackCard extends Component<ICardData & Props> {

	render() {
		return (
			<div className={"content"}>
				<img src={AmazonLogo} alt={"Amazon Logo"} style={{ paddingBottom: 15, paddingTop: 10 }}/>
				<p>
					As America’s largest e-commerce platform, Amazon has become the leading household name in online shopping and innovative technology products. Unlike other technology companies however, their product and interface designs continue to lag behind.
				</p>
				<p>
					One of my biggest problems with the Amazon app is the low <Def str={DEFS[0]}>signal-to-noise ratio</Def>. When shopping for a product, you’re presented with hundreds of options in a seemingly random format. Occasionally Amazon will provide suggestions based on the activities and reviews of other shoppers, but these can easily get lost in the almost endless list of product offerings. It’s important to note that the issue is not the quantity of products, but rather the way in which these products are displayed. As a perfect example of <Def str={DEFS[1]}>Hick’s Law</Def>, I can think of multiple occasions where I’ve been personally dragged down the “Amazon rabbit-hole” for hours on end, reading reviews, researching companies, and looking at other recommendations.
				</p>
				<p>
					Take the example below of me trying to buy a new TV. I’m glad there are a lot of competitive options, but I’ve already measured my living room wall and want a mind-boggling 75” TV. On other websites (and their associated apps) like Newggg and BestBuy, one of the first options I see is to filter by TV size. However, once I scroll back up and press “filter” on the Amazon app, I’m yet again presented with more options, all of which lack a much-needed <Def str={DEFS[2]}>iconic representation</Def>.
				</p>
				<div className={"screenshot"}>
					<img src={Video2} alt={"Shopping on Amazon"}/>
				</div>
				<p>
					Now one more example. Imagine yourself wanting to take a look at your browsing history to find that product you saw the other day. Or, maybe you want to add a new shipping address. Go ahead, Where’s Waldo?
				</p>
				<div className={"screenshot"}>
					<img src={Video1} alt={"Shopping on Amazon"}/>
				</div>
				<p>
					This is a great example of <Def str={DEFS[3]}>modularity</Def> being taken to the extreme. While this is much more navigable than having every sub-prompt within this menu’s <Def str={DEFS[4]}>hierarchy</Def> visible immediately, most of these menus can be clustered into even smaller menus. Why does “Your Pets” have the same real estate as the user security menu?
				</p>
				<hr/>
				<p>
					Another huge issue I have is the overall design in general. Take a quick look at this web app around you- how many pointed 90-degree angles do you see? In modern design, having a smooth <Def str={DEFS[5]}>contour bias</Def> is almost taken for granted. Take a look at the two screenshots below and give Amazon a score between 0 and 90.
				</p>
				<div className={"side-by-side"}>
					<div className={"screenshot"}>
						<img src={Screenshot1} alt={"Amazon home"}/>
					</div>
					<div className={"screenshot"}>
						<img src={Screenshot2} alt={"Amazon home"}/>
					</div>
				</div>
				<p>
					Hopefully you gave them a score of 0 (or 90, whatever's bad to you). Now juxtapose those screenshots with the following redesign concept found <a href="https://dribbble.com/shots/4910280-Amazon-Redesign" target="_blank">here.</a>
				</p>
				<div className={"screenshot"}>
					<img src={Redesign} alt={"Amazon redesign"}/>
				</div>
				<p>
					It's shocking that Amazon hasn't hired someone to do this yet, there are tons of these redesigns online... all done just for fun.
				</p>
				<hr/>
				<p>
					One great feature of the iOS interface is the status bar. You know it's always there for you, night and day, to let you know what time it is, how much of your parents data plan you're using, and how many more seconds of battery you have left. Thankfully, Apple offers app developers a <a href="https://developer.apple.com/documentation/uikit/uistatusbarstyle" target="_blank">simple one-liner</a> to change the color from light to dark, something required in their <a href="https://developer.apple.com/design/human-interface-guidelines/ios/bars/status-bars/" target="_blank">Human Interface Guidelines</a> handbook.
				</p>
				<p>
					With all that being said, check this out!
				</p>
				<div className={"side-by-side"}>
					<div className={"screenshot"}>
						<img src={VideoStatusBar} alt={"Amazon app disappearing status bar"}/>
					</div>
					<div style={{ width: "40%" }}>
						<img src={WhereGif} alt={"Amazon redesign"}/>
					</div>
				</div>
				<p>
					Go ahead and try this for yourself: click the camera button on the Amazon app and you'll see their revolutionary <i>StyleSnap</i>, featuring the <i>Disappearing Status Bar.</i> The status bar isn't actually going anywhere, it just lacks <Def str={DEFS[6]}>contrast</Def>. After the screen transition, the status bar remains white atop the new white background. This is obviously an accident (something that would never happen at another multi-billion dollar tech company that cared about design), but don't tell Apple unless you want Amazon taken off the App Store.
				</p>
				<hr/>
				<p>
					Which color makes you think of "on" - green or red? And off? Thanks to your preexisting <Def str={DEFS[7]}>mental model</Def>, you most likely answered green for on and red for off. Now take a look at these "custom" Amazon toggle buttons and tell me if my notifications are off.
				</p>
				<div className={"screenshot"}>
					<img src={VideoMapping} alt={"Amazon app disappearing status bar"}/>
				</div>
				<p>
					One positive thing about Amazon's app is their commitment to <Def str={DEFS[8]}>aesthetic consistency</Def>. Throughout the app, they maintain the same standardized layouts, all of which use the same colors, buttons, sections, and so on. As a shopper, I know where I can find product reviews, other products that are similar, and images of the product- they're always in the same spot, and they always have the same appearance.
				</p>
				<p>
					However, at Amazon, their commitment is to <i>you,</i> the customer, not design. That's why they wanted to violate the aforementioned sacred consistency and let me know about FireTV deals in a Halloween-themed box.
				</p>
				<div className={"side-by-side"}>
					<div className={"screenshot"} style={{ width: "50%" }}>
						<img src={Screenshot3} alt={"Amazon orange box interface"}/>
					</div>
					<div style={{ width: "50%" }}>
						<img src={GreatPumpkinGif} alt={"Great pumpkin gif Charlie Brown"}/>
					</div>
				</div>
				<p>
					Last, but certainly not least, it's your turn. Using the terms mentioned above, think about your opinion of Amazon's other app, used to manage their multi-billion dollar Alexa project.
				</p>
				<div className={"side-by-side"}>
					<div className={"screenshot"}>
						<img src={Alexa} alt={"Alexa app home"}/>
					</div>
					<div className={"screenshot"}>
						<img src={AlexaGif} alt={"Alexa devices"}/>
					</div>
				</div>
			</div>
		);
	}

}

export default AmazonBackCard;