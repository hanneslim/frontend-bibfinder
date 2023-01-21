import { Component, OnInit } from '@angular/core';
import { finalize, takeUntil } from 'rxjs/operators';
import { Destroyable } from 'src/app/shared/classes/destroyable';
import { BibDataService } from 'src/app/shared/services/bib-data.service';
import { FilterService } from 'src/app/shared/services/filter.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent extends Destroyable implements OnInit {
  constructor(
    private _bibDataService: BibDataService,
    private _filterService: FilterService
  ) {
    super();
  }

  public tumData$ = this._filterService.filteredTumData$;
  public lmuData$ = this._filterService.filteredLmuData$;

  public ngOnInit(): void {
    this._bibDataService
      .getTumData()
      .pipe(takeUntil(this._destroy))
      .subscribe(() => this._filterService.resetBibData());
    this._bibDataService
      .getLmuData()
      .pipe(takeUntil(this._destroy))
      .subscribe(() => this._filterService.resetBibData());
  }
}
