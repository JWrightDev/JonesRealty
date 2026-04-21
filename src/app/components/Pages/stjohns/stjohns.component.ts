import { Component } from '@angular/core';
import {InfoService} from "../../../services/info.service";
import {Apartment} from "../../../helperFiles/Apartment";

@Component({
  selector: 'app-stjohns',
  templateUrl: './stjohns.component.html',
  styleUrls: ['./stjohns.component.scss']
})
export class StjohnsComponent {
	apartmentList: Apartment[];

	constructor(private infoService: InfoService) {
		this.apartmentList = [];
	}

	ngOnInit() {
		this.infoService
			.getApartmentsObs()
			.subscribe((apartArray: Apartment[]) => (this.apartmentList = apartArray));
	}
}
