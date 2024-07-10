import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Loft } from '../../../helperFiles/Loft';
import { InfoService } from '../../../services/info.service';

@Component({
	selector: 'app-lofts',
	animations: [routerTransition],
	templateUrl: './lofts.component.html',
	styleUrls: ['./lofts.component.scss'],
})
export class LoftsComponent implements OnInit {
	loftList: Loft[];

	constructor(private infoService: InfoService) {
		this.loftList = [];
	}

	ngOnInit() {
		this.infoService
			.getLoftsObs()
			.subscribe((loftArray: Loft[]) => (this.loftList = loftArray));
	}
}
