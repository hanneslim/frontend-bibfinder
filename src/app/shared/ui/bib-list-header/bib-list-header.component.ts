import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bib-list-header[headerText]',
  templateUrl: './bib-list-header.component.html',
  styleUrls: ['./bib-list-header.component.scss'],
})
export class BibListHeaderComponent {
  @Input() headerText!: string;

  public showContent = true;

  public contentSwitch() {
    this.showContent = !this.showContent;
  }
}
