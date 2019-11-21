import React, { Component } from "react";
import ICardData from "../../../interfaces/ICardData";
import Def from "../../popovers/DefinitionPopover";
import Logo from "../../../assets/img/cards/mikrotik/logo.png";
import Touchscreen from "../../../assets/img/cards/mikrotik/touchscreen.png";
import WinBoxLogin from "../../../assets/img/cards/mikrotik/winbox-login.jpg";
import WinBox from "../../../assets/img/cards/mikrotik/winbox.png";
import Ubiquiti1 from "../../../assets/img/cards/mikrotik/ubnt-1.jpg";
import Ubiquiti2 from "../../../assets/img/cards/mikrotik/ubnt-2.png";

type Props = {
	toggleFlippedState: () => void;
	style?: any;
}

const DEFS = [
	"A screen operated by input signals involving a finger or stylus.",
	"People believe a product is easier to use if it is more aesthetically pleasing",
	"Everyone can use the product regardless of mental ability.",
	"Software helps to avoid user mistakes. For example, 'are you sure you want to delete?' before deleting a file.",
	"Using pictures to improve recognition. For example, at this point you've figured out that the fox icon shows a definition popover. The fox may seem arbitrary, but it's actually a play on professor Fox's name, the whole reason you're reading this in the first place.",
	"The design should be usable by as many people as possible without needing modification.",
	"The ease with which one can read.",
	"Everyone can perceive the design regardless of sensory abilities.",
	"Pictures are remembered more easily than words."
];

class MikroTikBackCard extends Component<ICardData & Props> {

	render() {
		return (
			<div className={"content"}>
				<img src={Logo} alt={"MikroTik logo"}/>
				<p>
					MikroTik is an enterprise network equipment manufacturer based in Latvia. For my current line of work, I often need to manage these in order to provide internet service to apartment complexes.
				</p>
				<p>
					The CCR line of MikroTik routers may be expensive, but they look awesome. Depending on the model, they include everything from 10Gbps SFP+ ports to gigabit ethernet ports. One of the coolest parts of this product is the <Def str={DEFS[0]}>touchscreen interface</Def>. Instead of having to connect to the network and pull up stats after connecting to the MikroTik, which is often difficult in a troubleshooting environment, you can simply swipe through various menus on the front of the router, which is often easily accessible in the front of the networking rack.
				</p>
				<div className={"screenshot shadow-none"}>
					<img src={Touchscreen} alt={"MikroTik transparent"}/>
				</div>
				<p>
					Unfortunately, this is where the positive aspects of the MikroTik come to an end. The <Def str={DEFS[1]}>aesthetic usability</Def> effect dictates that people believe a product is easier to use if it is more aesthetically pleasing. This could not be more true than regarding the MikroTik’s sole management software, WinBox.
				</p>
				<div className={"screenshot"}>
					<img src={WinBoxLogin} alt={"MikroTik WinBox Login"}/>
				</div>
				<p>
					As you can see, this login screen brings back feelings of Windows XP. The entire WinBox design has not been updated for over a decade, and you can easily tell this whenever using the interface. The program is so difficult to navigate, I often have no idea if I’ve broken the entire facility and sent nuclear launch codes to the Soviets or simply just logged in. If you need to take a class to use a user interface, then the design is showing signs of weak <Def str={DEFS[2]}>operability</Def>- this program needs its own four-year degree to teach you how to use it.
				</p>
				<p>
					From my own personal experience, I can tell you that this program provides very little <Def str={DEFS[3]}>forgiveness</Def>. Last year when attempting to make a small settings change to a device on the network, I mis-clicked on a tiny button near where I meant to click. I lost connection to WinBox, everyone in the building lost internet, and had to enlist the support of a remote network engineering team to bring the facility back online. That was pretty fun.
				</p>
				<p>
					Only the top-level navigation menu has interpretable <Def str={DEFS[4]}>iconic representations</Def>, every other icon lacks any form of immediate understanding. Take a look at the options below- what do you think each feature should do? These top-level menus should be immediately understandable by someone who works in networking. I understand “Log,” “Radius,” “IPv6,” and other icons, but what does “Make Supout.rif” do? How about “CAPsMAN?” Is that some sort of superhero?
				</p>
				<div className={"screenshot"}>
					<img src={WinBox} alt={"MikroTik WinBox"}/>
				</div>
				<p>
					Maybe the “New Winbox” icon can save us. This may just take us to a newer, cleaner menu that can actually be understood. But no- it just brings up a new login window.
				</p>
				<hr/>
				<p>
					Now enter the true leader in networking software interface design: Ubiquiti. This California based company is contending with global leaders that dominate the networking field like Cisco, Ruckus, TP-Link, TrendNet, Aruba (HP), and D-Link. Unlike these other companies, Ubiquiti invests just as much time and energy into their interfaces as the products themselves. In order to manage network devices, all you need is their UniFi Controller.
				</p>
				<div className={"screenshot shadow-none"}>
					<img src={Ubiquiti1} alt={"Ubiquiti UniFi Controller"}/>
				</div>
				<p>
					Unlike WinBox, which is only available for PC, Ubiquiti’s product line can be managed anytime and anywhere, no matter what device you’re on. This <Def str={DEFS[5]}>accessibility</Def> makes it incredibly easy to troubleshoot networking issues in only a short period of time.
				</p>
				<p>
					Unlike nearly any other network management software, Ubiquiti’s UniFi Controller is easily <Def str={DEFS[6]}>legible</Def> due to their flawless use of color, contrast, and font. In turn, the <Def str={DEFS[7]}>perceptibility</Def> of the design is miles ahead of any of its competition.
				</p>
				<p>
					Further, Ubiquiti makes great use of well-designed icons and the <Def str={DEFS[8]}>picture superiority effect</Def>. Devices are represented on their clean interface by pictures of the product, so you immediately know what device you’re managing.
				</p>
				<div className={"screenshot shadow-none"}>
					<img src={Ubiquiti2} alt={"Ubiquiti UniFi Controller"}/>
				</div>
				<p>
					In conclusion- yes. This may have turned into a small review and plug for one of my favorite companies. However, the purpose in showing Ubiquiti's management software is to show how MikroTik can evolve into a company that is ready for the modern era, an epoch that has already arrived. Their products look great and work very well, but they <i>need</i> to modernize their WinBox software if they want to continue as a global leader in this industry. If not, Ubiquiti is poised to take the lead.
				</p>
			</div>
		);
	}

}

export default MikroTikBackCard;