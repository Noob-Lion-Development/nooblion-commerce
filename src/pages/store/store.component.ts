import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from "../../components/title/title.component";

@Component({
    selector: 'nbl-store',
    standalone: true,
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.css'],
    imports: [CommonModule, TitleComponent]
})
export class StoreComponent {

}
