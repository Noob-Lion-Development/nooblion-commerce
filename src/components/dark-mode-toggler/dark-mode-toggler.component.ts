import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'nbl-dark-mode-toggler',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dark-mode-toggler.component.html',
    styleUrls: ['./dark-mode-toggler.component.css'],
})
export class DarkModeTogglerComponent implements OnInit {
    DEFAULT_THEME = 'dark';

    ngOnInit(): void {
        const currentTheme =
            localStorage.getItem('theme') ?? this.DEFAULT_THEME;
        this.setTheme(currentTheme);
    }

    toggleDarkMode(): void {
        const currentTheme =
            document.documentElement.getAttribute('data-bs-theme');
        const toggledTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(toggledTheme);
    }

    setTheme(theme: string): void {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-bs-theme', theme);
    }
}
