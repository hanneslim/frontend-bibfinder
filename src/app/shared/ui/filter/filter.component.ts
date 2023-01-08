import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';

type FilterFormType = FormGroup<{
  searchText: FormControl<string>;
  checkBoxValues: FormControl<string[]>;
}>;

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  public filterForm: FilterFormType = this._fb.group({
    searchText: this._fb.control<string>(''),
    checkBoxValues: this._fb.control<string[]>([]),
  });

  constructor(private _fb: NonNullableFormBuilder) {
    this.filterForm.controls.checkBoxValues.valueChanges.subscribe((val) =>
      console.log(val)
    );
  }
}
