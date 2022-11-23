import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

type BibData = {
  [bibName: string]: {
    name: string;
    status: string;
    occupationPercentage: number | string;
  }[];
};

@Injectable({
  providedIn: 'root',
})
export class BibDataService {
  constructor(private _http: HttpClient) {}

  public getTumData(): Observable<BibData> {
    return this._http.get<BibData>('http://localhost:3000/tum-data');
  }

  public getLmuData(): Observable<BibData> {
    return this._http.get<BibData>('http://localhost:3000/lmu-data');
  }
}
