import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public title: string = 'Software Empresarial';
  public shortDescription: string =
    'Modularidad, escalabilidad y seguridad para tu negocio';

  public detailedDescription: string =
    'Transformando empresas con soluciones empresariales a medida para una gestión eficiente y personalizada';
}
