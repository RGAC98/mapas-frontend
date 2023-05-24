import { Component, OnInit } from '@angular/core';

//open Street Map imports
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { icon, Marker } from 'leaflet';

@Component({
  selector: 'app-open-street-map',
  templateUrl: './open-street-map.component.html',
  styleUrls: ['./open-street-map.component.css']
})

export class OpenStreetMapComponent implements OnInit 
{
  //variables para open Street Map
  map: any;
  
  //puntos de referencia
  cp_lat = 0.340753;
  cp_lon =  -78.120926;
  utn_lat = 0.357971;
  utn_lon = -78.110396;

  constructor() 
  {}

  ngOnInit(): void 
  {
    this.initMap();
  }

  private initMap(): void 
  {
    //configuración del mapa
    this.map = L.map('map', {
      center: [this.cp_lat, this.cp_lon],
      attributionControl: false,
      zoom: 14
    });

    //iconos personalizados
    var iconDefault = L.icon({
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    L.Marker.prototype.options.icon = iconDefault;

    //titulo
    let tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    });

    tiles.addTo(this.map);
  }

  agregarPunto_CP_UTN()
  {
    //punto oficina plus
    L.marker([this.cp_lat, this.cp_lon]).bindPopup('Casa plus').addTo(this.map);
    L.marker([this.utn_lat, this.utn_lon]).bindPopup('UTN').addTo(this.map);
  }

  agregarPunto()
  {
    this.map.on('click', (e:any) => {
      L.marker([e.latlng.lat, e.latlng.lng]).bindPopup('Punto').addTo(this.map);
    });
  }

  dibujarRutas()
  {
    //ruta
    L.Routing.control({
      router: L.Routing.osrmv1({
        serviceUrl: `https://router.project-osrm.org/route/v1/`
      }),
      showAlternatives: true,
      fitSelectedRoutes: false,
      show: false,
      routeWhileDragging: true,
      waypoints: [
        L.latLng(this.cp_lat, this.cp_lon),
        L.latLng(this.utn_lat, this.utn_lon)
      ]
    }).addTo(this.map);
  }

}
