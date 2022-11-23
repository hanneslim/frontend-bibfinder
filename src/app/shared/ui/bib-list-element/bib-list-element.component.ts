import { Component, Input } from '@angular/core';

export type BibData = {
  name: string;
  status: string;
  occupationPercentage: number | string;
};

@Component({
  selector: 'app-bib-list-element[bibData]',
  templateUrl: './bib-list-element.component.html',
  styleUrls: ['./bib-list-element.component.scss'],
})
export class BibListElementComponent {
  @Input() bibData!: BibData;

  public percentage = '0%';
  public color = '#f4f4f4';
  public ngOnInit() {
    if (this.bibData.status === 'open') {
      if (typeof this.bibData.occupationPercentage === 'number') {
        this._useLmuData();
      } else {
        this._useTumData(this.bibData.occupationPercentage);
      }
    }
  }

  private _useLmuData() {
    this.percentage = this.bibData.occupationPercentage + '%';

    if (this.bibData.occupationPercentage <= 50) {
      this.color = '#4FBA1C';
    } else if (this.bibData.occupationPercentage <= 75) {
      this.color = '#FF8402';
    } else if (this.bibData.occupationPercentage > 75) {
      this.color = 'red';
    }
  }

  private _useTumData(occRate: string) {
    if (occRate.includes('unter')) {
      this.percentage = '15%';
      this.color = '#4FBA1C';
    } else if (occRate.includes('mehr als 25')) {
      this.percentage = '35%';
      this.color = '#4FBA1C';
    } else if (occRate.includes('mehr als 50')) {
      this.percentage = '60%';
      this.color = '#FF8402';
    } else if (occRate.includes('mehr als 75')) {
      this.percentage = '85%';
      this.color = 'red';
    }
  }
}
