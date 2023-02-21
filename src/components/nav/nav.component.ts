import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { NavigationItem } from '../../interfaces/navigationItem';
import { RouterLink } from '@angular/router';

import { ShoppingCartDropDownComponent } from '../shopping-cart-drop-down/shopping-cart-drop-down.component';

@Component({
    selector: 'nbl-nav',
    standalone: true,
    imports: [CommonModule, RouterLink, ShoppingCartDropDownComponent],
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
})
export class NavComponent {
    @Input() navigationItems: NavigationItem[] = [];
    @Input() brandLink?: string;

    activeLink: string;

    constructor(private location: Location) {
        this.activeLink = this.location.path();
    }

    handleBrandNavigation(): void {
        if (this.brandLink !== undefined) {
            this.activeLink = this.brandLink;
        }
    }

    handleNavigation(link: string): void {
        this.activeLink = link;
    }
}
