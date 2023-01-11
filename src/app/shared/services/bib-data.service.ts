import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export type BibData = {
  name: string;
  color: string;
  status: string;
  street: string;
  gmapslink: string;
  occupationPercentage: string | number;
  university: string;
  innerCity: boolean;
  lat: number;
  lng: number;
};

@Injectable({
  providedIn: 'root',
})
export class BibDataService {
  constructor(private _http: HttpClient) {}

  public tumData: BibData[] = [];
  public lmuData: BibData[] = [];

  public getTumData(): Observable<BibData[]> {
    return this._http
      .get<BibData[]>('https://cute-blazer-crow.cyclic.app/tum-data')
      .pipe(
        tap((tum) => {
          this.tumData = tum;
        })
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
