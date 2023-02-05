import { Component, Input } from '@angular/core';
import { BibData } from '../../services/bib-data.service';

@Component({
  selector: 'app-bib-list-element[bibData]',
  templateUrl: './bib-list-element.component.html',
  styleUrls: ['./bib-list-element.component.scss'],
})
export class BibListElementComponent {
  @Input() bibData!: BibData;

  public percentage = '0%';
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
    this.percentage =
      this.bibData.occupationPercentage === 0
        ? '1%'
        : this.bibData.occupationPercentage + '%';
  }

  private _useTumData(occRate: string) {
    if (occRate.includes('unter')) {
      this.percentage = '15%';
    } else if (occRate.includes('mehr als 25')) {
      this.percentage = '35%';
    } else if (occRate.includes('mehr als 50')) {
      this.percentage = '60%';
    } else if (occRate.includes('mehr als 75')) {
      this.percentage = '85%';
    } else if (occRate.includes('vollständig')) {
      this.percentage = '100%';
    } else {
      this.percentage = '1%';
    }
  }
}
