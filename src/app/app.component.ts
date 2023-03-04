import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { NavComponent } from 'src/components/nav/nav.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { TitleComponent } from 'src/components/title/title.component';
import { ProductCardComponent } from 'src/components/product-card/product-card.component';
import { DarkModeTogglerComponent } from 'src/components/dark-mode-toggler/dark-mode-toggler.component';
import { ToastContainerComponent } from "../components/toast-container/toast-container.component";

@Component({
    selector: 'nbl-app',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        CommonModule,
        RouterOutlet,
        NavComponent,
        TitleComponent,
        FooterComponent,
        ProductCardComponent,
        DarkModeTogglerComponent,
        DarkModeTogglerComponent,
        ToastContainerComponent
    ]
})
export class AppComponent {
    navigationItems = [
        { name: 'Home', link: '' },
        { name: 'About', link: '/about' },
        { name: 'Store', link: '/store' },
        { name: 'Cart', link: '/cart' },
        { name: 'Orders', link: '/orders'},
        { name: 'Test Page', link: '/testpage' },
    ];
    brandLink = '';
}
