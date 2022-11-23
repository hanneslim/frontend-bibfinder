import { Component, OnInit } from '@angular/core';
import { Destroyable } from 'src/app/shared/classes/destroyable';
import { BibDataService } from 'src/app/shared/services/bib-data.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent extends Destroyable implements OnInit {
  constructor(private _bibDataService: BibDataService) {
    super();
  }

  ngOnInit(): void {
    this._bibDataService
      .getLmuData()
      .pipe(takeUntil(this._destroy))
      .subscribe((val) => console.log(val));
  }
}
