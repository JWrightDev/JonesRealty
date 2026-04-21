export interface Apartment{
	id: number;
	title: string;
	listingLink: string;
	thumbnailLink?: string;
	altText?: string;
	isLeased: boolean;
	isSold?: boolean;
}
