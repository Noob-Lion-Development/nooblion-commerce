import { NgbToastOptions } from '@ng-bootstrap/ng-bootstrap/toast/toast-config';

export interface Toast {
    header: string;
    icon?: string;
    options?: NgbToastOptions;
}
