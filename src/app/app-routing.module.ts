import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Pages/home/home.component';
import { PropertiesComponent } from './components/Pages/properties/properties.component';
import { ProjectsComponent } from './components/Pages/projects/projects.component';
import { MediaComponent } from './components/Pages/media/media.component';
import { CompanyComponent } from './components/Pages/company/company.component';
import { NotFoundComponent } from './components/ui/not-found/not-found.component';
import { DetailsComponent } from './components/Pages/details/details.component';
import { LoftsComponent } from './components/Pages/lofts/lofts.component';
import { OpenHousesComponent } from './components/Pages/open-houses/open-houses.component';
import { JycComponent } from './components/Pages/jyc/jyc.component';

const routes: Routes = [
	{
		path: 'jr/home',
		component: HomeComponent,
		title: 'Jones Realty Inc. - Home',
		data: {
			animation: 'home',
		},
	},
	{
		path: 'jr',
		redirectTo: 'jr/home',
		pathMatch: 'full',
		data: {
			animation: 'home',
		},
	},
	{
		path: '',
		redirectTo: 'jr/home',
		pathMatch: 'full',
		data: {
			animation: 'home',
		},
	},
	{
		path: 'jr/properties',
		component: PropertiesComponent,
		title: 'Jones Realty Inc. - Properties',
		data: {
			animation: 'properties',
		},
	},
	{
		path: 'jr/projects',
		component: ProjectsComponent,
		title: 'Jones Realty Inc. - Projects',
		data: {
			animation: 'projects',
		},
	},
	{
		path: 'jr/media',
		component: MediaComponent,
		title: 'Jones Realty Inc. - Media',
		data: {
			animation: 'media',
		},
	},
	{
		path: 'jr/company',
		component: CompanyComponent,
		title: 'Jones Realty Inc. - Company / Contact',
		data: {
			animation: 'company',
		},
	},
	{
		path: 'jr/details/:id',
		component: DetailsComponent,
		title: 'Jones Realty Inc. - Details',
		data: {
			animation: 'details',
		},
	},
	{
		path: 'jr/lofts',
		component: LoftsComponent,
		title: 'Jones Realty Inc. - Lofts',
		data: {
			animation: 'lofts',
		},
	},
	{
		path: 'jr/open-houses',
		component: OpenHousesComponent,
		title: 'Jones Realty Inc. - Open Houses',
		data: {
			animation: 'open-houses',
		},
	},
	{
		path: 'jyc',
		component: JycComponent,
		title: 'Amherstburg & River Canard Yacht Club - Info',
		data: {
			animation: 'jyc',
		},
	},
	{
		path: '**',
		component: NotFoundComponent,
		title: 'Jones Realty Inc. - Not Found',
		data: {
			animation: 'notfound',
		},
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			useHash: true,
			anchorScrolling: 'enabled',
			scrollOffset: [0, 64],
			scrollPositionRestoration: 'top',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
