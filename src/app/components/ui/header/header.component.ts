import { Component, OnInit } from '@angular/core';
import {
	Router,
	Event as RouterEvent,
	NavigationEnd,
	ActivatedRoute,
} from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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

	addTarget() {
		const navItems = document.querySelectorAll('.nav-item');
		if (navItems) {
			navItems.forEach((navItem) => {
				navItem.setAttribute('data-te-target', '#menu');
			});
		}
		return;
	}

	removeTarget() {
		const navItems = document.querySelectorAll('.nav-item');
		if (navItems) {
			navItems.forEach((navItem) => {
				navItem.removeAttribute('data-te-target');
			});
		}
		return;
	}
}
