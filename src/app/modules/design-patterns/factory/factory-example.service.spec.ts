import { TestBed } from '@angular/core/testing';
import { VehicleFactory } from './factory-example.service';

describe('VehicleFactory', () => {
  let factory: VehicleFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    factory = TestBed.inject(VehicleFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  it('should create a car', () => {
    const car = factory.createVehicle('car');
    expect(car.type).toBe('Car');
    expect(car.drive()).toContain('car');
  });

  it('should create a bike', () => {
    const bike = factory.createVehicle('bike');
    expect(bike.type).toBe('Bike');
    expect(bike.drive()).toContain('bike');
  });

  it('should create a truck', () => {
    const truck = factory.createVehicle('truck');
    expect(truck.type).toBe('Truck');
    expect(truck.drive()).toContain('truck');
  });

  it('should throw error for unknown vehicle type', () => {
    expect(() => factory.createVehicle('airplane')).toThrow();
  });
});
