import ICardData from "../interfaces/ICardData";
import {faMobileAlt, faClock, faHome} from "@fortawesome/free-solid-svg-icons";

import AmazonApp from "../assets/img/cards/amazon/cover.jpg";
import LametricTime from "../assets/img/lametric-time.jpg";
import BlackAndDecker from "../assets/img/black-and-decker.jpg";
import AmazonBackCard from "../components/card/back-cards/AmazonBackCard";

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
	},
	{
		backgroundImage: BlackAndDecker,
		categoryIcon: faHome,
		category: "Household appliance",
		title: "Portable Air Conditioner",
		subtitle: "Black and Decker",
	},
	{
		backgroundImage: "https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2017/07/iphone-6s-amazon-app-ios.jpg?itok=B6xcfE9S",
		categoryIcon: faMobileAlt,
		category: "Mobile interface 4",
		title: "Amazon for iOS",
		subtitle: "Amazon, Inc.",
	},
	{
		backgroundImage: "https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2017/07/iphone-6s-amazon-app-ios.jpg?itok=B6xcfE9S",
		categoryIcon: faMobileAlt,
		category: "Mobile interface 5",
		title: "Amazon for iOS",
		subtitle: "Amazon, Inc.",
	},
	{
		backgroundImage: "https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2017/07/iphone-6s-amazon-app-ios.jpg?itok=B6xcfE9S",
		categoryIcon: faMobileAlt,
		category: "Mobile interface 6",
		title: "Amazon for iOS",
		subtitle: "Amazon, Inc.",
	}
];

export default CardData;