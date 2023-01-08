import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input[control]',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @Input() control!: FormControl<string>;
  @Input() label?: string;
  @Input() icon = 'pi pi-search';
  @Input() placeholder = 'Search';
  @Input() disabled = false;
}
