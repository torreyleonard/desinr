import {IconProp} from "@fortawesome/fontawesome-svg-core";

export default interface ICardData {
	backgroundImage: string;
	categoryIcon: IconProp;
	category: string;
	title: string;
	subtitle: string;
	backCard?: any;
}