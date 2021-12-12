import { User } from './User';
import { Company } from './Company';

interface Mappale {
  location: {
    lat: number;
    lng: number;
  }
}

export class CustomMap {
  private  googleMap: google.maps.Map;

  constructor(mapDivId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(mapDivId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addMarker(mappable: Mappale): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  }
}