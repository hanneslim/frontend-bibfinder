import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  @Input() form?: FormGroup | FormControl;
  @Input() icon!: string;
  @Input() disabled = false;

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
