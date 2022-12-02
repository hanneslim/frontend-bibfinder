import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BibData } from 'src/app/shared/services/bib-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() tumData$!: BehaviorSubject<BibData[]>;
  @Input() lmuData$!: BehaviorSubject<BibData[]>;
}
