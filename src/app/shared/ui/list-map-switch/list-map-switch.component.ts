import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-map-switch',
  templateUrl: './list-map-switch.component.html',
  styleUrls: ['./list-map-switch.component.scss'],
})
export class ListMapSwitchComponent {
  @Input() firstPageActive = false;

  public switchActive() {
    this.firstPageActive = !this.firstPageActive;
  }

  public ngAfterViewInit() {
    this.firstPageActive = true;
  }
}
