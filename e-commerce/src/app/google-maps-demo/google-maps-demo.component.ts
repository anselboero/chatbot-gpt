import {Component} from '@angular/core';

@Component({
  selector: 'google-maps-demo',
  templateUrl: './google-maps-demo.component.html',
})
export class GoogleMapsDemoComponent {

  center: google.maps.LatLngLiteral = {lat: 50, lng: 12};
  zoom = 4;
  backgroundColor = 'red'
}
