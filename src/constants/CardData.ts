import ICardData from "../interfaces/ICardData";
import {faMobileAlt, faClock, faHome, faEthernet, faToolbox, faDesktop} from "@fortawesome/free-solid-svg-icons";

import AmazonApp from "../assets/img/cards/amazon/cover.jpg";
import LametricTime from "../assets/img/cards/lametric/cover.jpg";
import BlackAndDecker from "../assets/img/cards/blackdecker/cover.jpg";
import AmazonBackCard from "../components/card/back-cards/AmazonBackCard";
import LaMetricBackCard from "../components/card/back-cards/LaMetricBackCard";
import MikroTik from "../assets/img/cards/mikrotik/cover.jpg";
import Eufy from "../assets/img/cards/eufy/cover.jpg";
import Milwaukee from "../assets/img/cards/milwaukee/cover.jpg";
import IntelliJ from "../assets/img/cards/intellij/cover.png";
import Robinhood from "../assets/img/cards/robinhood/cover.jpg";
import BlackDeckerBackCard from "../components/card/back-cards/BlackDeckerBackCard";
import MikroTikBackCard from "../components/card/back-cards/MikroTikBackCard";
import EufyBackCard from "../components/card/back-cards/EufyBackCard";
import MilwaukeeBackCard from "../components/card/back-cards/MilwaukeeBackCard";
import IntelliJBackCard from "../components/card/back-cards/IntelliJBackCard";
import RobinhoodBackCard from "../components/card/back-cards/RobinhoodBackCard";

const CardData: ICardData[] = [
	{
		backgroundImage: AmazonApp,
		categoryIcon: faMobileAlt,
		category: "Mobile interface",
		title: "Amazon for iOS",
		subtitle: "Amazon, Inc.",
		backCard: AmazonBackCard
	},
	{
		backgroundImage: LametricTime,
		categoryIcon: faClock,
		category: "Smart clock",
		title: "LaMetric Time",
		subtitle: "LaMetric",
		backCard: LaMetricBackCard
	},
	{
		backgroundImage: BlackAndDecker,
		categoryIcon: faHome,
		category: "Household appliance",
		title: "Portable Air Conditioner",
		subtitle: "Black and Decker",
		backCard: BlackDeckerBackCard
	},
	{
		backgroundImage: MikroTik,
		categoryIcon: faEthernet,
		category: "Enterprise networking appliance",
		title: "CCR1072-1G-8S+",
		subtitle: "MikroTik",
		backCard: MikroTikBackCard
	},
	{
		backgroundImage: Eufy,
		categoryIcon: faHome,
		category: "Household appliance",
		title: "RoboVac 30C",
		subtitle: "Eufy",
		backCard: EufyBackCard
	},
	{
		backgroundImage: Milwaukee,
		categoryIcon: faToolbox,
		category: "Toolbox",
		title: "PACKOUT",
		subtitle: "Milwaukee Tool",
		backCard: MilwaukeeBackCard
	},
	{
		backgroundImage: IntelliJ,
		categoryIcon: faDesktop,
		category: "Desktop interface",
		title: "IntelliJ IDEA",
		subtitle: "JetBrains",
		backCard: IntelliJBackCard
	},
	{
		backgroundImage: Robinhood,
		categoryIcon: faMobileAlt,
		category: "Mobile interface",
		title: "Robinhood for iOS",
		subtitle: "Robinhood",
		backCard: RobinhoodBackCard
	},
];

export default CardData;