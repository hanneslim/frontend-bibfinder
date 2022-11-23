import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class Destroyable implements OnDestroy {
  protected _destroy = new Subject<boolean>();
  public ngOnDestroy(): void {
    this._destroy.next(true);
    this._destroy.complete();
  }
}
