import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from "../../components/title/title.component";
import { ProductCardComponent } from "../../components/product-card/product-card.component";

@Component({
    selector: 'nbl-testpage',
    standalone: true,
    templateUrl: './testpage.component.html',
    styleUrls: ['./testpage.component.css'],
    imports: [CommonModule, TitleComponent, ProductCardComponent]
})
export class TestpageComponent {
    name = 'Trevor';
    addStyle = true;
}
