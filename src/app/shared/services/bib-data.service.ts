import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

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

  public getTumData(): Observable<BibData[]> {
    return this._http.get<BibData[]>(
      'https://cute-blazer-crow.cyclic.app/tum-data'
    );
  }

  public getLmuData(): Observable<BibData[]> {
    return this._http.get<BibData[]>(
      'https://cute-blazer-crow.cyclic.app/lmu-data'
    );
  }
}
