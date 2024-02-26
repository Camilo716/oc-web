import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-module-item',
  standalone: true,
  imports: [],
  templateUrl: './module-item.component.html',
  styleUrl: './module-item.component.css',
})
export class ModuleItemComponent {
  @Input() icon: string = 'Not yet defined';
  @Input() title: string = 'Not yet defined';
  @Input() description: string = 'Not yet defined';
}
