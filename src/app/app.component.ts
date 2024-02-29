import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModulesComponent } from './modules/modules.component';
import { FooterComponent } from './footer/footer.component';
import { CustomDevelopmentComponent } from './custom-development/custom-development.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    HeroComponent,
    NavbarComponent,
    ModulesComponent,
    FooterComponent,
    CustomDevelopmentComponent,
  ],
})
export class AppComponent {
  title = 'oc-web';
}
