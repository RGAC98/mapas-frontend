import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})

export class GoogleMapsComponent implements OnInit 
{
  title = 'Google maps API';

  //coordenadas de referencia
  cp_lat = 0.340753;
  cp_lng = -78.120926;
  utn_lat = 0.357971;
  utn_lng = -78.110396;
  lat = 0;
  lng = 0;

  constructor() 
  {}

  ngOnInit(): void 
  {}

  ObtenerCoordenadasDelMapa($event: any)
  { 
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
  }

}
