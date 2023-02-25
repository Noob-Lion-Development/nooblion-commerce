import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'nbl-dark-mode-toggler',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dark-mode-toggler.component.html',
    styleUrls: ['./dark-mode-toggler.component.css'],
})
export class DarkModeTogglerComponent {
    toggleDarkMode(): void {
        const setTheme = (): void => {
            const currentTheme =
                document.documentElement.getAttribute('data-bs-theme');
            const theme = currentTheme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', theme);
            document.documentElement.setAttribute('data-bs-theme', theme);
        };

        (() => {
            'use strict';

            setTheme();

            const showActiveTheme = (theme: string): void => {
                const activeThemeIcon = document.querySelector(
                    '.theme-icon-active use'
                ) as SVGUseElement;
                const btnToActive = document.querySelector(
                    `[data-bs-theme-value="${theme}"]`
                ) as HTMLElement;
                const svgOfActiveBtn = btnToActive
                    .querySelector('svg use')
                    ?.getAttribute('href');
                document
                    .querySelectorAll('[data-bs-theme-value]')
                    .forEach((element) => {
                        element.classList.remove('active');
                    });

                btnToActive.classList.add('active');
                activeThemeIcon.setAttribute('href', svgOfActiveBtn as string);
            };

            window.addEventListener('DOMContentLoaded', () => {
                showActiveTheme(localStorage.getItem('theme') || 'light');
                document
                    .querySelectorAll('[data-bs-theme-value]')
                    .forEach((toggle) => {
                        toggle.addEventListener('click', () => {
                            const theme = toggle.getAttribute(
                                'data-bs-theme-value'
                            ) as string;
                            localStorage.setItem('theme', theme);
                            setTheme();
                            showActiveTheme(theme);
                        });
                    });
            });
        })();
    }
}
