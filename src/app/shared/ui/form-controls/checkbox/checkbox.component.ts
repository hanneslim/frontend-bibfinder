import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox[control][label][name][value]',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() control!: FormControl<string[]>;
  @Input() label!: string;
  @Input() name!: string;
  @Input() value!: string;
  @Input() disabled = false;
}
