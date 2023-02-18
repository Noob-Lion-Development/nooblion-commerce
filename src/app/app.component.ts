import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from 'src/components/nav/nav.component';

@Component({
    selector: 'nbl-app',
    standalone: true,
    imports: [CommonModule, RouterOutlet, NavComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {}
