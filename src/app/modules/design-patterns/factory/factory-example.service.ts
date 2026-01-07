import { Injectable } from '@angular/core';

/**
 * Factory Pattern Example
 *
 * Creates different types of objects based on input parameters.
 */

export interface Vehicle {
  type: string;
  drive(): string;
}

export class Car implements Vehicle {
  type = 'Car';
  drive(): string {
    return 'Driving a car on the road';
  }
}

export class Bike implements Vehicle {
  type = 'Bike';
  drive(): string {
    return 'Riding a bike on the path';
  }
}

export class Truck implements Vehicle {
  type = 'Truck';
  drive(): string {
    return 'Driving a truck on the highway';
  }
}

@Injectable({
  providedIn: 'root'
})
export class VehicleFactory {
  createVehicle(type: string): Vehicle {
    switch (type.toLowerCase()) {
      case 'car':
        return new Car();
      case 'bike':
        return new Bike();
      case 'truck':
        return new Truck();
      default:
        throw new Error(`Vehicle type ${type} not supported`);
    }
  }
}
