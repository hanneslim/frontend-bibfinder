import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

const buttonType = ['button', 'submit', 'reset'] as const;
const buttonStyle = [
  'success',
  'secondary',
  'info',
  'warning',
  'help',
  'danger',
] as const;

type ButtonType = typeof buttonType[number];
type ButtonStyle = typeof buttonStyle[number];

@Component({
  selector: 'app-button[label]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() form?: FormGroup;
  @Input() disabled = false;
  @Input() label!: string;
  @Input() type: ButtonType = 'button';
  @Input() style?: ButtonStyle;

  @Output() clickEvent: EventEmitter<Event> = new EventEmitter<Event>();

  public isDisabled(): boolean {
    return (
      this.disabled ||
      (this.form
        ? !this.form.valid || (this.form.valid && !this.form.dirty)
        : false)
    );
  }
}
