import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import {
  icon,
  latLng,
  Map,
  MapOptions,
  Marker,
  marker,
  popup,
  tileLayer,
  ZoomAnimEvent,
} from 'leaflet';
import { Observable } from 'rxjs';
import { Destroyable } from 'src/app/shared/classes/destroyable';
import { BibData } from 'src/app/shared/services/bib-data.service';
import {
  TranslationKey,
  TranslationService,
} from 'src/app/shared/services/translation.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent extends Destroyable implements OnInit {
  @Input() tumData$!: Observable<BibData[]>;
  @Input() lmuData$!: Observable<BibData[]>;

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

  private _lmuMapMarkers: Marker[] = [];
  private _tumMapMarkers: Marker[] = [];

  ngOnInit() {
    this.lmuData$.subscribe((lmuData) => {
      this._removeAllMarkers('lmu');
      lmuData.forEach((lmuBib) => {
        const popUp = popup().setContent(
          '<div style="width: 16rem; display: block"><div style="display: flex;justify-content: space-between;align-items: center;margin-bottom: -0.5rem;margin-top: -0.5rem;"><h3 style="width: 13rem;">' +
            lmuBib.name +
            ' </h3><a href="' +
            lmuBib.gmapslink +
            '" target="_blank"> <img class="map-icon" style="height: 2rem;padding-right: 0.5rem; cursor:pointer" src="../../../assets/map-markers/direction-icon.svg"/></a></div><div style="display: flex; gap: 0.25rem"><div style="color:#1a73e8">' +
            TranslationService.get(lmuBib.status as TranslationKey) +
            '</div> <div>-</div> <div>' +
            lmuBib.street +
            '</div> </div> </div>'
        );

        if (this.map) {
          this._lmuMapMarkers.push(
            marker([lmuBib.lat, lmuBib.lng + 0.0022], {
              icon: this.applyIcon(lmuBib.status, lmuBib.color),
            })
              .addTo(this.map)
              .bindPopup(popUp)
          );
        }
      });
    });

    this.tumData$.subscribe((tumData) => {
      this._removeAllMarkers('tum');
      tumData.forEach((tumBib) => {
        const popUp = popup().setContent(
          '<div style="width: 16rem; display: block"><div style="display: flex;justify-content: space-between;align-items: center;margin-bottom: -0.5rem;margin-top: -0.5rem;"><h3 style="width: 13rem;">' +
            tumBib.name +
            ' </h3><a href="' +
            tumBib.gmapslink +
            '" target="_blank"> <img class="map-icon" style="height: 2rem;padding-right: 0.5rem; cursor:pointer" src="../../../assets/map-markers/direction-icon.svg"/></a></div><div style="display: flex; gap: 0.25rem"><div style="color:#1a73e8">' +
            TranslationService.get(tumBib.status as TranslationKey) +
            '</div> <div>-</div> <div>' +
            tumBib.street +
            '</div> </div> </div>'
        );
        if (this.map) {
          this._tumMapMarkers.push(
            marker([tumBib.lat, tumBib.lng + 0.002], {
              icon: this.applyIcon(tumBib.status, tumBib.color),
            })
              .addTo(this.map)
              .bindPopup(popUp)
          );
        }
      });
    });
  }

  private _removeAllMarkers(bib: string) {
    if (bib === 'lmu') {
      for (let i = 0; i < this._lmuMapMarkers.length; i++) {
        this.map?.removeLayer(this._lmuMapMarkers[i]);
      }
    } else {
      for (let i = 0; i < this._tumMapMarkers.length; i++) {
        this.map?.removeLayer(this._tumMapMarkers[i]);
      }
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
      shadowUrl: '../../../assets/map-markers/markers_shadow.png',

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
