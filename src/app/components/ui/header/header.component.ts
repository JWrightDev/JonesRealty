import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
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
