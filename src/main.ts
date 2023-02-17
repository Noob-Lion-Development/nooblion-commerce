import { bootstrapApplication } from '@angular/platform-browser';
import { Route, provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './components/home/home.component';

export const ROUTES: Route[] = [{ path: '', component: HomeComponent }];

bootstrapApplication(AppComponent, {
    providers: [provideRouter(ROUTES)],
});
