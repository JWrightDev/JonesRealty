import { Component, Input, OnInit } from '@angular/core';
import { Loft } from '../../../helperFiles/Loft';
import {Apartment} from "../../../helperFiles/Apartment";

@Component({
	selector: 'app-listing-card',
	templateUrl: './listing-card.component.html',
	styleUrls: ['./listing-card.component.scss'],
})
export class ListingCardComponent {
	@Input() propertyItem: Loft | Apartment;

	constructor() {
		this.propertyItem = {
			id: 0,
			title: '',
			listingLink: '',
			thumbnailLink: '',
			altText: '',
			isLeased: false,
		};
	}
}
