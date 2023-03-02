import { Injectable } from '@angular/core';
import { NgbToastOptions } from '@ng-bootstrap/ng-bootstrap/toast/toast-config';
import { Observable, of } from 'rxjs';
import { Toast } from 'src/interfaces/toast';

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    toasts: Toast[] = [];

    pushToast(header: string, icon?: string, options?: NgbToastOptions): void {
        this.toasts.push({
            header: header,
            icon: icon,
            options: options,
        });
    }

    getToasts(): Observable<Toast[]> {
        return of(this.toasts);
    }
}
