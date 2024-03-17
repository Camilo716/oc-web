import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  OC_MAIL: string = 'info@onecluster.org';
  OC_NUMBER: string = '+57 324 646 6628';
}
