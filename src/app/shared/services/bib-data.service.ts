import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';
import { LoadingService } from './loading.service';

export type BibData = {
  name: string;
  color: string;
  status: string;
  street: string;
  gmapslink: string;
  occupationPercentage: string | number;
  university: string;
  location: string;
  lat: number;
  lng: number;
};

@Injectable({
  providedIn: 'root',
})
export class BibDataService {
  constructor(
    private _http: HttpClient,
    private _loadingService: LoadingService
  ) {}

  public tumData: BibData[] = [];
  public lmuData: BibData[] = [];

  public getTumData(): Observable<BibData[]> {
    return this._http
      .get<BibData[]>('https://cute-blazer-crow.cyclic.app/tum-data')
      .pipe(
        tap((tum) => {
          this.tumData = tum;
          this._loadingService.isLoading.next(true);
        }),
        finalize(() => this._loadingService.isLoading.next(false))
      );
  }

  public getLmuData(): Observable<BibData[]> {
    return this._http
      .get<BibData[]>('https://cute-blazer-crow.cyclic.app/lmu-data')
      .pipe(
        tap((lmu) => {
          this.lmuData = lmu;
        })
      );
  }
}
