import { bootstrapApplication } from '@angular/platform-browser';
import { Route, provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { StoreComponent } from './pages/store/store.component';
import { CartComponent } from './pages/cart/cart.component';
import { TestpageComponent } from './pages/testpage/testpage.component';

export const ROUTES: Route[] = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'store', component: StoreComponent },
    { path: 'cart', component: CartComponent },
    { path: 'testpage', component: TestpageComponent },
];

bootstrapApplication(AppComponent, {
    providers: [provideRouter(ROUTES)],
});
