import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbToast, NgbToastHeader } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/services/toast.service';
import { Toast } from 'src/interfaces/toast';

@Component({
    selector: 'nbl-toast-container',
    standalone: true,
    imports: [CommonModule, NgbToast, NgbToastHeader],
    templateUrl: './toast-container.component.html',
    styleUrls: ['./toast-container.component.css'],
})
export class ToastContainerComponent implements OnInit {
    AUTOHIDE_DEFAULT = true;
    DELAY_DEFAULT = 5000;

    pushedToasts: Toast[] = [];

    constructor(public toastService: ToastService) {}

    ngOnInit(): void {
        this.toastService
            .getToasts()
            .subscribe((toasts) => (this.pushedToasts = toasts));
    }

    getAutohide(toast: Toast): boolean {
        return toast.options && toast.options.autohide
            ? toast.options.autohide
            : this.AUTOHIDE_DEFAULT;
    }

    getDelay(toast: Toast): number {
        return toast.options && toast.options.delay
            ? toast.options.delay
            : this.DELAY_DEFAULT;
    }
}
