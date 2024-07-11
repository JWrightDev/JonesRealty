import { Component, OnInit } from '@angular/core';
import {
	Router,
	Event as RouterEvent,
	NavigationEnd,
	ActivatedRoute,
} from '@angular/router';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
	currentRoute: any = '';
	constructor(
		private router: Router,
		private route: ActivatedRoute,
	) {}

	ngOnInit(): void {
		this.router.events.subscribe((event: RouterEvent) => {
			if (event instanceof NavigationEnd) {
				this.currentRoute =
					this.route.snapshot.firstChild?.routeConfig?.path;
			}
		});
	}
}
