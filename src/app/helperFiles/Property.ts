export interface Property {
	id: number;
	address: string;
	description: string;
	contactLink: string;
	thumbnailLink: string;
	altText: string;
	isNew?: boolean;
	thumbnails?: string[];
	listingLink?: string;
	isLeased?: boolean;
	videoLinks?: string[];
}
