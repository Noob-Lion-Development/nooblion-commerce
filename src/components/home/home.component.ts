import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from 'src/components/title/title.component';

@Component({
  selector: 'nbl-home',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    name = "Trevor";
    addStyle = true;

}
