import { Component, Input } from '@angular/core';
import { ModuleItemComponent } from './module-item/module-item.component';

@Component({
  selector: 'app-modules',
  standalone: true,
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.css',
  imports: [ModuleItemComponent],
})
export class ModulesComponent {}
