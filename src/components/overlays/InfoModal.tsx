import React, { Component } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFireAlt, faInfoCircle, faExpandArrowsAlt} from "@fortawesome/free-solid-svg-icons";
import {faReact, faFontAwesomeLogoFull, faGithub} from "@fortawesome/free-brands-svg-icons";
import "./InfoModal.css";
import DefinitionPopover from "./DefinitionPopover";
import moment from "moment";

class InfoModal extends Component {

	getHeading = () => {
		return (
			<div className={"heading"}>
				<span>desinr&nbsp;</span>
				<FontAwesomeIcon icon={faFireAlt} className={"logo"}/>
			</div>
		);
	};

	render() {
		return (
			<div className={"info-modal"} style={{ height: window.innerHeight*0.85 }}>
				<div className={"inner-wrapper"}>
					{this.getHeading()}
					<div className={"subtitle"}>
						Created by Torrey Leonard<br/>for COMM 3545 at OSU
					</div>
					<div className={"content"}>
						<h5>What is it?</h5>
						<p>
							In order to demonstrate knowledge of terms learned throughout the semester, this Tinder-inspired design app shows eight separate products, each with their own review and evaluation. All of the terms are relating to Human-Computer-Interaction, but a few products not relating to computers are included as well.
						</p>
						<h5>How does it work?</h5>
						<p>
							Each card shows a product, its category, and the company that created it. Click the <FontAwesomeIcon icon={faInfoCircle}/> icon in the bottom right to flip the card over and read the evaluation. You can then press the <FontAwesomeIcon icon={faExpandArrowsAlt}/> icon to enter fullscreen. Within the evaluation, you may see something <DefinitionPopover str={"All definitions were provided by COMM 3545 professor Fox, so it's only fitting that the iconic representation (also a key term) is a fox."}>like this</DefinitionPopover>. To read the definition of the word, click, tap, or hover your mouse over it.
						</p>
						<h5>Design Considerations</h5>
						<p>
							By factoring in <DefinitionPopover str={"Everyone can use the product regardless of mental ability."}>simplicity</DefinitionPopover> and <DefinitionPopover str={"Shapes with smooth edges convey positive emotions while shapes with pointy edges are interpreted as more threatening."}>contour bias</DefinitionPopover> to the overall design process, <span className={"small-heading"}>{this.getHeading()}</span> aims for ease of use with a minimalistic and easy to interpret design.
						</p>
						<p>
							If you're viewing this on a desktop, you've probably noticed by now that the screen appears in an iPhone X. That's because this webapp was created originally using<a href="https://facebook.github.io/react-native/" target="_blank">&nbsp;<FontAwesomeIcon icon={faReact}/>&nbsp;React Native</a>, a framework for building mobile apps by Facebook. After considering the steps involved in making an app easily <DefinitionPopover str={"The design should be usable by as many people as possible without needing modification."}>accessible</DefinitionPopover> for grading and future use, I switched to plain old<a href="https://reactjs.org/" target="_blank">&nbsp;<FontAwesomeIcon icon={faReact}/>&nbsp;React</a>, Facebook's original <a href="https://lmgtfy.com/?q=DOM+web" target="_blank">DOM</a> framework. Animations were created using <a href="https://www.react-spring.io/" target="_blank">React Spring</a>, and icons are courtesy of <a href="https://fontawesome.com/" target="_blank"><FontAwesomeIcon icon={faFontAwesomeLogoFull}/></a>. You can view the entire repository by clicking the GitHub icon below.
						</p>
						{
							// Don't display until after graded, I don't procrastinate
							moment().isAfter(moment("2020-01-01")) && (
								<p>
									If you're reading this in the future and are taking COMM 3545, my best advice is to start early. Like, really. I lowkey started everything two nights before and worked on it during all of my classes the day it was due (it's a website, so if you turn it in you can still change it). Get some inspiration by Googling <a href="https://lmgtfy.com/?q=COMM+3545+design+diary" target="_blank">"COMM 3545 Design Diary"</a> and read some of those over. Oh yeah, and Quizlet. <span className={"muted"}>For those of you who understand JavaScript or TypeScript, check the source code of this paragraph.</span>
								</p>
							)
						}
					</div>
					<div className={"bottom-row"}>
						<a href="https://github.com/torreyleonard/desinr/" target="_blank">
							<FontAwesomeIcon icon={faGithub}/>
						</a>
					</div>
				</div>
			</div>
		);
	}

}

export default InfoModal;