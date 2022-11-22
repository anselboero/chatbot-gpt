import { Component, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-google-maps-wrapper',
  templateUrl: './google-maps-wrapper.component.html',
  styleUrls: ['./google-maps-wrapper.component.css']
})
export class GoogleMapsWrapperComponent {
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;
  location: google.maps.LatLngLiteral = {lat: 45.06800440458354, lng: 7.68570497569531};
  zoom: number = 0;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPosition: google.maps.LatLngLiteral = this.location;
  
  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  constructor() {
    // set dynamic Zoom
    let intervalId = setInterval(() => {
      this.zoom = this.zoom + 1;
      if(this.zoom === 15) clearInterval(intervalId)
    }, 200)
  }

}
