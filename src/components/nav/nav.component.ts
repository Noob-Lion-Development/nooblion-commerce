import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { NavigationItem } from './navigationItem';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'nbl-nav',
    standalone: true,
    imports: [CommonModule, RouterLink],
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

    handleBrandNavigation() {
        if (this.brandLink !== undefined) {
            this.activeLink = this.brandLink;
        }
    }

    handleNavigation(link: string) {
        this.activeLink = link;
    }
}
