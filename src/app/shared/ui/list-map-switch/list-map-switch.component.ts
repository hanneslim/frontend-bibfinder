import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-map-switch',
  templateUrl: './list-map-switch.component.html',
  styleUrls: ['./list-map-switch.component.scss'],
})
export class ListMapSwitchComponent implements AfterViewInit {
  @Input() firstPageActive = false;

  public switchActive() {
    this.firstPageActive = !this.firstPageActive;
  }

  public ngAfterViewInit() {
    setTimeout(() => (this.firstPageActive = true));
  }
}
