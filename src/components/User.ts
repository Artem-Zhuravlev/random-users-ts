import faker from 'faker';
import { Mappale } from './CustomMap';

export class User implements Mappale {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `User Name ${this.name}`;
  }
}