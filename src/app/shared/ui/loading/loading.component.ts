import { Component, OnInit, inject } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { takeUntil } from 'rxjs/operators';
import { Destroyable } from '../../classes/destroyable';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent extends Destroyable implements OnInit {
  private _loadingService = inject(LoadingService);

  public ngOnInit(): void {
    this._loadingService.isLoading
      .pipe(takeUntil(this._destroy))
      .subscribe((loadingStatus) => {
        const spinner = document.querySelector('#loading-spinner');
        if (loadingStatus) {
          spinner?.setAttribute('style', 'display: flex');
          const spinnerText = document.querySelector('#spinner-text');
          if (spinnerText) {
            setTimeout(() => {
              spinnerText.textContent = TranslationService.get(
                'occupancyGetsDisplayed'
              );
            }, 3000);
          }
        } else {
          spinner?.setAttribute('style', 'display: none');
        }
      });
  }
}
