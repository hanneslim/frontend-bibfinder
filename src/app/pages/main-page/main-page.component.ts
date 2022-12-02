import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Destroyable } from 'src/app/shared/classes/destroyable';
import {
  BibData,
  BibDataService,
} from 'src/app/shared/services/bib-data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent extends Destroyable implements OnInit {
  public tumData$: BehaviorSubject<BibData[]> = new BehaviorSubject<BibData[]>(
    []
  );
  public lmuData$: BehaviorSubject<BibData[]> = new BehaviorSubject<BibData[]>(
    []
  );
  constructor(private _bibDataService: BibDataService) {
    super();
  }

  ngOnInit(): void {
    this._bibDataService
      .getTumData()
      .pipe(takeUntil(this._destroy))
      .subscribe((tum) => this.tumData$.next(tum));

    this._bibDataService
      .getLmuData()
      .pipe(takeUntil(this._destroy))
      .subscribe((lmu) => this.lmuData$.next(lmu));
  }
}
