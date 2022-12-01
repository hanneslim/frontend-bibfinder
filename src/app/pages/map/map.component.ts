import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  icon,
  latLng,
  Map,
  MapOptions,
  marker,
  popup,
  tileLayer,
  ZoomAnimEvent,
} from 'leaflet';
import { BehaviorSubject } from 'rxjs';
import { Destroyable } from 'src/app/shared/classes/destroyable';
import {
  TranslationKey,
  TranslationService,
} from 'src/app/shared/services/translation.service';
import { BibData } from 'src/app/shared/ui/bib-list-element/bib-list-element.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent extends Destroyable implements OnInit, OnDestroy {
  @Input() tumData$!: BehaviorSubject<BibData[]>;
  @Input() lmuData$!: BehaviorSubject<BibData[]>;

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

  ngOnInit() {
    this.lmuData$.asObservable().subscribe((lmuData) =>
      lmuData.forEach((lmuBib) => {
        const popUp = popup().setContent(
          '<div style="width: 16rem; display: block"><div style="display: flex;justify-content: space-between;align-items: center;margin-bottom: -0.5rem;margin-top: -0.5rem;"><h3 style="width: 13rem;">' +
            lmuBib.name +
            ' </h3><a href="https://google.com" target="_blank"> <img class="map-icon" style="height: 2rem;padding-right: 0.5rem; cursor:pointer" src="../../../assets/map-markers/direction-icon.svg"/></a></div><div style="display: flex; gap: 0.25rem"><div style="color:' +
            lmuBib.color +
            '">' +
            TranslationService.get(lmuBib.status as TranslationKey) +
            '</div> <div>-</div> <div>Arcisstraße 4</div> </div> </div>'
        );

        if (this.map) {
          marker([lmuBib.lat, lmuBib.lng], {
            icon: this.applyIcon(lmuBib.status, lmuBib.color),
          })
            .addTo(this.map)
            .bindPopup(popUp);
        }
      })
    );

    this.tumData$.asObservable().subscribe((tumData) =>
      tumData.forEach((tumBib) => {
        if (this.map) {
          marker([tumBib.lat, tumBib.lng], {
            icon: this.applyIcon(tumBib.status, tumBib.color),
          })
            .addTo(this.map)
            .bindPopup('I am a green leaf.');
        }
      })
    );
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

  applyIcon(status: string, color: string) {
    let returnIcon = icon({
      iconUrl: '../../../assets/map-markers/library-marker-grey.svg',
      shadowUrl: '../../../assets/markers_shadow.png',

      iconSize: [35, 45],
      iconAnchor: [17, 42],
      popupAnchor: [1, -32],
      shadowAnchor: [10, 12],
      shadowSize: [36, 16],
    });
    if (status === 'open') {
      if (color === 'red') {
        returnIcon = icon({
          iconUrl: '../../../assets/map-markers/library-marker-red.svg',
          shadowUrl: '../../../assets/map-markers/markers_shadow.png',

          iconSize: [35, 45],
          iconAnchor: [17, 42],
          popupAnchor: [1, -32],
          shadowAnchor: [10, 12],
          shadowSize: [36, 16],
        });
      } else if (color === '#FF8402') {
        returnIcon = icon({
          iconUrl: '../../../assets/map-markers/library-marker-orange.svg',
          shadowUrl: '../../../assets/map-markers/markers_shadow.png',

          iconSize: [35, 45],
          iconAnchor: [17, 42],
          popupAnchor: [1, -32],
          shadowAnchor: [10, 12],
          shadowSize: [36, 16],
        });
      } else {
        returnIcon = icon({
          iconUrl: '../../../assets/map-markers/library-marker-green.svg',
          shadowUrl: '../../../assets/map-markers/markers_shadow.png',

          iconSize: [35, 45],
          iconAnchor: [17, 42],
          popupAnchor: [1, -32],
          shadowAnchor: [10, 12],
          shadowSize: [36, 16],
        });
      }
    }
    return returnIcon;
  }
}
