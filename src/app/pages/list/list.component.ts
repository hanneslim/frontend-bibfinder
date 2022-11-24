import { Component, OnInit } from '@angular/core';
import { Destroyable } from 'src/app/shared/classes/destroyable';
import { BibDataService } from 'src/app/shared/services/bib-data.service';

import { Observable } from 'rxjs/internal/Observable';
import { takeUntil } from 'rxjs/operators';
import { of } from 'rxjs';
import { BibData } from 'src/app/shared/ui/bib-list-element/bib-list-element.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent extends Destroyable implements OnInit {
  public tumData$: Observable<BibData[]> = of([]);
  public lmuData$: Observable<BibData[]> = of([]);
  constructor(private _bibDataService: BibDataService) {
    super();
  }

  ngOnInit(): void {
    this.tumData$ = this._bibDataService
      .getTumData()
      .pipe(takeUntil(this._destroy));

    this.lmuData$ = this._bibDataService
      .getLmuData()
      .pipe(takeUntil(this._destroy));
  }
}
