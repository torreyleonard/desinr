import ICardData from "../interfaces/ICardData";
import {faMobileAlt, faClock, faHome} from "@fortawesome/free-solid-svg-icons";

import AmazonApp from "../assets/img/cards/amazon/cover.jpg";
import LametricTime from "../assets/img/lametric-time.jpg";
import BlackAndDecker from "../assets/img/black-and-decker.jpg";
import AmazonBackCard from "../components/card/back-cards/AmazonBackCard";
import LaMetricBackCard from "../components/card/back-cards/LaMetricBackCard";

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
	},
];

export default CardData;