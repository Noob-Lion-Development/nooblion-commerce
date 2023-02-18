import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from 'src/components/nav/nav.component';
import { FooterComponent } from 'src/components/footer/footer.component';

@Component({
    selector: 'nbl-app',
    standalone: true,
    imports: [CommonModule, RouterOutlet, NavComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {}
