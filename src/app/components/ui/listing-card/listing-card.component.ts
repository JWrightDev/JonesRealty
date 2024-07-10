import { Component, Input, OnInit } from '@angular/core';
import { Loft } from '../../../helperFiles/Loft';

@Component({
	selector: 'app-listing-card',
	templateUrl: './listing-card.component.html',
	styleUrls: ['./listing-card.component.scss'],
})
export class ListingCardComponent {
	@Input() loftItem: Loft;

	constructor() {
		this.loftItem = {
			id: 0,
			title: '',
			listingLink: '',
			thumbnailLink: '',
			altText: '',
			isLeased: false,
		};
	}
}
