import React, { Component } from "react";
import ICardData from "../../../interfaces/ICardData";
import Def from "../../popovers/DefinitionPopover";
import Logo from "../../../assets/img/cards/intellij/logo.png";
import IntelliSense1 from "../../../assets/img/cards/intellij/intellisense-1.png";
import IntelliSense2 from "../../../assets/img/cards/intellij/intellisense-2.gif";
import Screenshot1 from "../../../assets/img/cards/intellij/screenshot-1.png";
import Personalization from "../../../assets/img/cards/intellij/personalization.jpg";
import Langs from "../../../assets/img/cards/intellij/langs.png";

type Props = {
	toggleFlippedState: () => void;
	style?: any;
}

const DEFS = [
	"Anyone can understand the design, regardless of mental ability.",
	"Functional design is practically beautiful.",
	"The degree to which users deliberately tailor the content by making choices.",
	"When we build something ourselves, we have more of a psychological bond with it.",
	"Elements of a design that prevent the user from misusing it.",
	"The amount of information occupying the users mind.",
	"Consistency between actions and the meaning associated with it.",
	"Product helps to avoid user mistakes.",
	"Using pictures to improve recognition. For example, at this point you've figured out that the fox icon shows a definition popover. The fox may seem arbitrary, but it's actually a play on professor Fox's name, the whole reason you're reading this in the first place.",
];

class IntelliJBackCard extends Component<ICardData & Props> {

	render() {
		return (
			<div className={"content"}>
				<div className={"screenshot shadow-none"}>
					<img src={Logo} alt={"IntelliJ logo"} style={{ width: 100 }}/>
				</div>
				<p>
					An IDE, or Integrated Development Environment, is much like a car, phone, or restaurant. Once you fall in love with one, it’s hard to make the switch. That’s the position I’m in with IntelliJ IDEA, a program written in Java for developing computer software. As I’m sure you guessed, the very web app you’re looking at right now was written thanks to IntelliJ IDEA.
				</p>
				<p>
					One of the first things you may notice about the design is it seems to lack <Def str={DEFS[0]}>simplicity</Def>. There’s a lot going on all around the window, but it’s managed well. To me, this is a good thing. Unlike other IDEs like Atom by GitHub, which is very modern and minimalistic, nearly every feature needed when writing a piece of software is readily available to you somewhere on your screen. For IntelliJ, they value the idea that <Def str={DEFS[1]}>form follows function</Def>, and I love it.
				</p>
				<div className={"screenshot"}>
					<img src={Screenshot1} alt={"IntelliJ IDEA"} />
				</div>
				<p>
					One of the unique features that IntelliJ IDEA provides is their ability to <Def str={DEFS[2]}>customize</Def> nearly every aspect of the UI. By giving users the option to change components such as color schemes, the <Def str={DEFS[3]}>IKEA Effect</Def>  leads users to have a deeper bond with the interface after tailoring the UI to your very own unique taste.
				</p>
				<div className={"screenshot"}>
					<a href="https://www.youtube.com/watch?v=38xV3wd47jU" target="_blank">
						<img src={Personalization} alt={"IntelliJ personalization"} />
					</a>
				</div>
				<p>
					While all that is pretty cool, by far my favorite feature of IntelliJ IDEA is their IntelliSense. It's important to note that, while "code completion" is not necessarily a feature unique to IDEA, it's the way in which they do this that makes their software really stand out. Take a look at the example below and see if you can figure out what's going on.
				</p>
				<div className={"screenshot"}>
					<img src={IntelliSense2} alt={"IntelliSense gif"}/>
				</div>
				<p>
					Based on the file you're currently working on, location within the project, dependencies used, and a plethora of other information, IntelliSense can quickly aggregate the most likely methods and variables that you're typing. After indexing every project file on your hard drive, IDEA can save a massive amount of time, and provide <Def str={DEFS[4]}>constraints</Def> when you're doing something invalid. Other IDEs typically only make recommendations based hard-coded algorithms, regardless of what you're doing, and even sometimes what language you're writing in.
				</p>
				<p>
					By reducing the user's amount of <Def str={DEFS[5]}>cognitive load</Def>, IntelliSense allows you to focus on the details that really matter within the program you're creating.
				</p>
				<div className={"screenshot"}>
					<img src={IntelliSense1} alt={"IntelliSense"}/>
				</div>
				<p>
					Lastly, one of the least recognized features in any IDE is its <Def str={DEFS[6]}>functional consistency</Def> across multiple languages. For example: say you open a TypeScript file and a CSS file at the same time, both of which are used for this project. A poorly designed IDE may either not know the difference between the two and provide invalid <Def str={DEFS[7]}>feedback</Def>, or it might go way too far and completely change the interface to what looks like a different program entirely.
				</p>
				<div className={"screenshot"}>
					<img src={Langs} alt={"IntelliSense"}/>
				</div>
				<p>
					IntelliJ IDEA, however, maintains your theme, navigation layout, and everything else about your window. The sole difference is the <Def str={DEFS[8]}>iconic representation</Def> of the file you're currently working on. Once you start writing, it begins to give you intelligent suggestions based on the language of the file.
				</p>
				<hr/>
				<p>
					After using many other IDEs throughout the past few years, I'm certain that I'll be sticking with IntelliJ IDEA for the foreseeable future. It's just like my car, my phone, and my favorite restaurant- I just can't seem to make the switch.
				</p>
			</div>
		);
	}

}

export default IntelliJBackCard;