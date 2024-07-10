import { Component } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
	selector: 'app-open-houses',
	animations: [routerTransition],
	templateUrl: './open-houses.component.html',
	styleUrls: ['./open-houses.component.scss'],
})
export class OpenHousesComponent {}
