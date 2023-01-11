import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { FilterService } from '../../services/filter.service';

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
    checkBoxValues: this._fb.control<string[]>(['lmu', 'tum']),
  });

  constructor(
    private _fb: NonNullableFormBuilder,
    private _filterService: FilterService
  ) {}

  public submitFilter() {
    this._filterService.applyFilterValues(this.filterForm.getRawValue());
  }
}
