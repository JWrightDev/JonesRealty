import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Pages/home/home.component';
import { PropertiesComponent } from './components/Pages/properties/properties.component';
import { ProjectsComponent } from './components/Pages/projects/projects.component';
import { MediaComponent } from './components/Pages/media/media.component';
import { CompanyComponent } from './components/Pages/company/company.component';
import { NotFoundComponent } from './components/ui/not-found/not-found.component';
import { DetailsComponent } from './components/Pages/details/details.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		title: 'Jones Realty Inc. - Home',
		data: {
			animation: 'home',
		},
	},
	{
		path: 'properties',
		component: PropertiesComponent,
		title: 'Jones Realty Inc. - Properties',
		data: {
			animation: 'properties',
		},
	},
	{
		path: 'projects',
		component: ProjectsComponent,
		title: 'Jones Realty Inc. - Projects',
		data: {
			animation: 'projects',
		},
	},
	{
		path: 'media',
		component: MediaComponent,
		title: 'Jones Realty Inc. - Media',
		data: {
			animation: 'media',
		},
	},
	{
		path: 'company',
		component: CompanyComponent,
		title: 'Jones Realty Inc. - Company / Contact',
		data: {
			animation: 'company',
		},
	},
	{
		path: 'details/:id',
		component: DetailsComponent,
		title: 'Jones Realty Inc. - Details',
		data: {
			animation: 'details',
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
