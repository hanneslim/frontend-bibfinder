import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
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

  private _appliedFilter: Subject<FilterValues> = new Subject<FilterValues>();

  public appliedFilter$ = this._appliedFilter.asObservable();

  public filteredTumData$ = this._filteredTumData.asObservable();
  public filteredLmuData$ = this._filteredLmuData.asObservable();

  public applyFilterValues(appliedFilter: FilterValues) {
    let tumCopy = this._bibDataService.tumData;
    let lmuCopy = this._bibDataService.lmuData;

    let finalTumData: BibData[] = [];
    let finalLmuData: BibData[] = [];

    this._appliedFilter.next(appliedFilter);
    this.resetBibData();
    if (
      !appliedFilter.checkBoxValues.includes('tum') &&
      appliedFilter.checkBoxValues.includes('lmu')
    ) {
      tumCopy = [];
    }
    if (
      !appliedFilter.checkBoxValues.includes('lmu') &&
      appliedFilter.checkBoxValues.includes('tum')
    ) {
      lmuCopy = [];
    }

    if (appliedFilter.checkBoxValues.includes('open')) {
      lmuCopy = lmuCopy.filter((lmu) => lmu.status === 'open');

      tumCopy = tumCopy.filter((tum) => tum.status === 'open');
    }
    if (appliedFilter.searchText !== '') {
      lmuCopy = lmuCopy.filter((lmu) =>
        lmu.name.toLowerCase().includes(appliedFilter.searchText.toLowerCase())
      );

      tumCopy = tumCopy.filter((tum) =>
        tum.name.toLowerCase().includes(appliedFilter.searchText.toLowerCase())
      );
    }
    if (appliedFilter.checkBoxValues.includes('innerCity')) {
      finalLmuData.push(
        ...lmuCopy.filter((lmu) => lmu.location === 'Innenstadt')
      );

      finalTumData.push(
        ...tumCopy.filter((tum) => tum.location === 'Innenstadt')
      );
    }
    if (appliedFilter.checkBoxValues.includes('garching')) {
      finalLmuData.push(
        ...lmuCopy.filter((lmu) => lmu.location === 'Garching')
      );

      finalTumData.push(
        ...tumCopy.filter((tum) => tum.location === 'Garching')
      );
    }
    if (appliedFilter.checkBoxValues.includes('großhadern')) {
      finalLmuData.push(
        ...lmuCopy.filter((lmu) => lmu.location === 'Großhadern')
      );

      finalTumData.push(
        ...tumCopy.filter((tum) => tum.location === 'Großhadern')
      );
    }
    this._emitValues(
      appliedFilter,
      tumCopy,
      lmuCopy,
      finalTumData,
      finalLmuData
    );
  }

  private _emitValues(
    appliedFilter: FilterValues,
    tumCopy: BibData[],
    lmuCopy: BibData[],
    finalTumData: BibData[],
    finalLmuData: BibData[]
  ) {
    if (
      appliedFilter.checkBoxValues.includes('innenstadt') ||
      appliedFilter.checkBoxValues.includes('garching') ||
      appliedFilter.checkBoxValues.includes('großhadern')
    ) {
      this._filteredTumData.next(finalTumData);
      this._filteredLmuData.next(finalLmuData);
    } else {
      this._filteredTumData.next(tumCopy);
      this._filteredLmuData.next(lmuCopy);
    }
  }

  public resetBibData() {
    this._filteredTumData.next(this._bibDataService.tumData);
    this._filteredLmuData.next(this._bibDataService.lmuData);
  }
}
