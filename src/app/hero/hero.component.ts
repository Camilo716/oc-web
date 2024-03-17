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
    'Descubre cómo podemos convertir tus ideas en poderosas herramientas digitales que te ayuden a destacar en un mundo cada vez más competitivo';
}
