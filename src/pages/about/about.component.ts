import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from "../../components/title/title.component";

@Component({
    selector: 'nbl-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    imports: [CommonModule, TitleComponent]
})
export class AboutComponent {

}
