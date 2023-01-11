import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BibData, BibDataService } from './bib-data.service';

type FilterValues = {
  searchText: string;
  checkBoxValues: string[];
};

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor(private _bibDataService: BibDataService) {}
  private _filteredTumData: BehaviorSubject<BibData[]> = new BehaviorSubject<
    BibData[]
  >([]);
  private _filteredLmuData: BehaviorSubject<BibData[]> = new BehaviorSubject<
    BibData[]
  >([]);

  public filteredTumData$ = this._filteredTumData.asObservable();
  public filteredLmuData$ = this._filteredLmuData.asObservable();

  public applyFilterValues(appliedFilter: FilterValues) {
    this.resetBibData();
    if (
      !appliedFilter.checkBoxValues.includes('tum') &&
      appliedFilter.checkBoxValues.includes('lmu')
    ) {
      this._filteredTumData.next([]);
    }
    if (
      !appliedFilter.checkBoxValues.includes('lmu') &&
      appliedFilter.checkBoxValues.includes('tum')
    ) {
      this._filteredLmuData.next([]);
    }
    if (appliedFilter.checkBoxValues.includes('innerCity')) {
      this._filteredLmuData.next(
        this._filteredLmuData.value.filter((lmu) => lmu.innerCity === true)
      );
      this._filteredTumData.next(
        this._filteredTumData.value.filter((tum) => tum.innerCity === true)
      );
    }
    if (appliedFilter.checkBoxValues.includes('open')) {
      this._filteredLmuData.next(
        this._filteredLmuData.value.filter((lmu) => lmu.status === 'open')
      );
      this._filteredTumData.next(
        this._filteredTumData.value.filter((tum) => tum.status === 'open')
      );
    }
    if (appliedFilter.searchText !== '') {
      this._filteredLmuData.next(
        this._filteredLmuData.value.filter((lmu) =>
          lmu.name
            .toLowerCase()
            .includes(appliedFilter.searchText.toLowerCase())
        )
      );
      this._filteredTumData.next(
        this._filteredTumData.value.filter((tum) =>
          tum.name
            .toLowerCase()
            .includes(appliedFilter.searchText.toLowerCase())
        )
      );
    }
  }

  public resetBibData() {
    this._filteredTumData.next(this._bibDataService.tumData);
    this._filteredLmuData.next(this._bibDataService.lmuData);
  }
}
