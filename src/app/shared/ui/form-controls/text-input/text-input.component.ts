import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslationService } from 'src/app/shared/services/translation.service';

@Component({
  selector: 'app-text-input[control]',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @Input() control!: FormControl<string>;
  @Input() label?: string;
  @Input() icon = 'pi pi-search';
  @Input() placeholder = TranslationService.get('search');
  @Input() disabled = false;
}
