import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { BibData } from '../ui/bib-list-element/bib-list-element.component';

@Injectable({
  providedIn: 'root',
})
export class BibDataService {
  constructor(private _http: HttpClient) {}

  public getTumData(): Observable<BibData[]> {
    return this._http.get<BibData[]>('http://localhost:3000/tum-data');
  }

  public getLmuData(): Observable<BibData[]> {
    return this._http.get<BibData[]>('http://localhost:3000/lmu-data');
  }
}
