import { Component, AfterViewInit } from '@angular/core';
import 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  openmap: any;

  constructor() { }

  ngAfterViewInit() {

    let openmap = L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: 'terms and feedback'
    });

    let map = L.map("map", {
      center: [37.7833, -122.4167],
      zoom: 10,
      zoomControl: false,
      maxZoom: 18
    }).addLayer(openmap);

    let marker = L.marker([33.2148, -97.1331]).addTo(map);

    let popup = L.popup();

    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .openOn(map);
    }

    map.on('click', onMapClick);
  }

}
