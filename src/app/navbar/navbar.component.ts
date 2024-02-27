import { Component } from '@angular/core';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [NavbarItemComponent],
})
export class NavbarComponent {}
