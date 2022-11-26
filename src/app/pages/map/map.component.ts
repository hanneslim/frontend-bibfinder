import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  icon,
  latLng,
  Map,
  MapOptions,
  marker,
  tileLayer,
  ZoomAnimEvent,
} from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit, OnDestroy {
  public map$: EventEmitter<Map> = new EventEmitter();
  public zoom$: EventEmitter<number> = new EventEmitter();
  public options: MapOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        opacity: 0.7,
        maxZoom: 19,
        detectRetina: true,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }),
    ],
    zoom: 14,
    center: latLng(48.15, 11.57),
  };
  public map?: Map;
  public zoom?: number;

  constructor() {}

  ngAfterViewInit() {
    const redIcon = icon({
      iconUrl: '../../../assets/map-markers/library-marker-red.svg',
      shadowUrl: '../../../assets/markers_shadow.png',

      iconSize: [35, 45],
      iconAnchor: [17, 42],
      popupAnchor: [1, -32],
      shadowAnchor: [10, 12],
      shadowSize: [36, 16],
    });

    const orangeIcon = icon({
      iconUrl: '../../../assets/map-markers/library-marker-orange.svg',
      shadowUrl: '../../../assets/markers_shadow.png',

      iconSize: [35, 45],
      iconAnchor: [17, 42],
      popupAnchor: [1, -32],
      shadowAnchor: [10, 12],
      shadowSize: [36, 16],
    });
    const greenIcon = icon({
      iconUrl: '../../../assets/map-markers/library-marker-green.svg',
      shadowUrl: '../../../assets/map-markers/markers_shadow.png',

      iconSize: [35, 45],
      iconAnchor: [17, 42],
      popupAnchor: [1, -32],
      shadowAnchor: [10, 12],
      shadowSize: [36, 16],
    });
    if (this.map) {
      marker([48.15, 11.57], { icon: greenIcon })
        .addTo(this.map)
        .bindPopup('I am a green leaf.');
    }
  }

  ngOnDestroy() {
    if (this.map) {
      this.map.clearAllEventListeners;
      this.map.remove();
    }
  }

  onMapReady(map: Map) {
    this.map = map;
    this.map$.emit(map);
    this.zoom = map.getZoom();
    this.zoom$.emit(this.zoom);
  }

  onMapZoomEnd(e: ZoomAnimEvent) {
    this.zoom = e.target.getZoom();
    this.zoom$.emit(this.zoom);
  }
}
