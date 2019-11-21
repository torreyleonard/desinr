import React, { Component } from "react";
import ICardData from "../../../interfaces/ICardData";
import Def from "../../popovers/DefinitionPopover";
import Logo from "../../../assets/img/cards/milwaukee/logo.png";
import Base from "../../../assets/img/cards/milwaukee/base.png";
import Stacked from "../../../assets/img/cards/milwaukee/stacked.jpg";
import Video1 from "../../../assets/img/cards/milwaukee/video-1.gif";

type Props = {
	toggleFlippedState: () => void;
	style?: any;
}

const DEFS = [
	"Manages complexity by dividing large systems into smaller, self contained systems.",
	"Shapes with smooth edges convey positive emotions while shapes with pointy edges are interpreted as more threatening.",
	"Similar style and appearance across a family of products.",
	"Product helps to avoid user mistakes.",
	"Information that lets you know that you are using the product correctly.",
	"Design should be usable by as many people as possible without needed modification."
];

class MilwaukeeBackCard extends Component<ICardData & Props> {

	render() {
		return (
			<div className={"content"}>
				<img src={Logo} alt={"Milwaukee logo"}/>
				<p>
					After months of deliberation, I finally went to Home Depot in August and bought myself a brand-new Milwaukee Packout. Before my Packout days, I had 3 tool bags to hold my various hand-man items. I was always jealous of my dad’s Husky toolbox in the garage, but those are not only way more expensive, but impractical for bring to and from school.
				</p>
				<p>
					The biggest selling point of the Packout is its <Def str={DEFS[0]}>modularity</Def>. Each “box” can be removed, stacked in a different order atop the base cart, or used independently as a job-site toolbox. The base cart, as pictured below, is designed with an industrial-grade handle, IP65 rated protection, and large wheels that can easily overcome large obstacles.
				</p>
				<p>
					One of the most satisfying parts of the Packout's design is the <Def str={DEFS[4]}>feedback</Def> that you receive when attaching a component to the top. A strong "click" sound and the feeling of the box's spring activating lets you know that the box is sturdily held together and ready for action.
				</p>
				<div className={"screenshot shadow-none"}>
					<img src={Base} alt={"Milwaukee Packout base cart"}/>
				</div>
				<p>
					The beautifully designed <Def str={DEFS[1]}>contour bias</Def> of each box maintains the same design across the entirety of Milwaukee’s Packout lineup. This <Def str={DEFS[2]}>aesthetic consistency</Def> looks great when many different components are stacked together. Take the photo below for example: the person who owns these Packouts obviously has quite a lineup of tools. Yet, he’ll still look good pulling these big hogs through a jobsite.
				</p>
				<div className={"screenshot"}>
					<img src={Stacked} alt={"Milwaukee Packout stacked high"}/>
				</div>
				<p>
					Speaking of pulling this big hog through a jobsite, remember that industrial design and large wheels I mentioned? This element of the design provides <Def str={DEFS[3]}>forgiveness</Def> to users that put it through the ringer. You can really through anything at it and it’ll stand up to the test.
				</p>
				<div className={"screenshot"}>
					<img src={Video1} alt={"Milwaukee Packout gif"}/>
				</div>
				<p>
					Now to be fair, I won't be using the Packout on a jobsite anytime soon. I'm not a professional, but thanks to the wide scope of <Def str={DEFS[5]}>accessibility</Def> that this product provides, I can easily use it in an amateur environment as well.
				</p>
			</div>
		);
	}

}

export default MilwaukeeBackCard;