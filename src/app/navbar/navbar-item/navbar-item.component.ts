import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  standalone: true,
  imports: [],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.css',
})
export class NavbarItemComponent {
  @Input() text = 'Not yet defined';
  @Input() link = 'Not yet defined';
}
