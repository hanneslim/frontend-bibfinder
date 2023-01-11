import { Component, Input } from '@angular/core';
import { BibData } from 'src/app/shared/services/bib-data.service';

@Component({
  selector: 'app-list[tumData][lmuData]',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() tumData!: BibData[] | null;
  @Input() lmuData!: BibData[] | null;
}
