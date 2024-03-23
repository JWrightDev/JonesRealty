import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/Pages/home/home.component';
import { PropertiesComponent } from './components/Pages/properties/properties.component';
import { ProjectsComponent } from './components/Pages/projects/projects.component';
import { MediaComponent } from './components/Pages/media/media.component';
import { CompanyComponent } from './components/Pages/company/company.component';
import { NotFoundComponent } from './components/ui/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OutlineIconsModule, SolidIconsModule } from '@dimaslz/ng-heroicons';
import { PropertyCardComponent } from './components/ui/property-card/property-card.component';
import { ProjectCardComponent } from './components/ui/project-card/project-card.component';
import { FeaturedComponent } from './components/ui/featured/featured.component';
import { NgOptimizedImage } from '@angular/common';
import { MobileCollapseDirective } from './directives/mobile-collapse.directive';
import { AddTargetDirective } from './directives/add-target.directive';
import { ContactComponent } from './components/ui/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	RECAPTCHA_SETTINGS,
	RecaptchaFormsModule,
	RecaptchaModule,
	RecaptchaSettings,
} from 'ng-recaptcha';
import { RouterModule } from '@angular/router';
import { LoadingScreenComponent } from './components/ui/loading-screen/loading-screen.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { DetailsComponent } from './components/Pages/details/details.component';
import { ServicesComponent } from './components/ui/services/services.component';
import { HeaderComponent } from './components/ui/header/header.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		PropertiesComponent,
		ProjectsComponent,
		MediaComponent,
		CompanyComponent,
		NotFoundComponent,
		PropertyCardComponent,
		ProjectCardComponent,
		FeaturedComponent,
		MobileCollapseDirective,
		AddTargetDirective,
		ContactComponent,
		LoadingScreenComponent,
		FooterComponent,
		DetailsComponent,
		ServicesComponent,
		HeaderComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		OutlineIconsModule,
		NgOptimizedImage,
		ReactiveFormsModule,
		FormsModule,
		RecaptchaModule,
		RecaptchaFormsModule,
		RouterModule,
		SolidIconsModule,
	],
	providers: [
		{
			provide: RECAPTCHA_SETTINGS,
			useValue: {
				siteKey: '6Lc7w7goAAAAAJ1o4EfcPOYPvF7U89eYpX0G8wDw',
			} as RecaptchaSettings,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
