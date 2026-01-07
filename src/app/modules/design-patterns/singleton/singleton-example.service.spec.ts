import { TestBed } from '@angular/core/testing';
import { SingletonExampleService } from './singleton-example.service';

describe('SingletonExampleService', () => {
  let service1: SingletonExampleService;
  let service2: SingletonExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service1 = TestBed.inject(SingletonExampleService);
    service2 = TestBed.inject(SingletonExampleService);
  });

  it('should be created', () => {
    expect(service1).toBeTruthy();
  });

  it('should be a singleton (same instance)', () => {
    expect(service1).toBe(service2);
    expect(service1.getInstanceId()).toBe(service2.getInstanceId());
  });

  it('should increment counter', () => {
    const count1 = service1.incrementCounter();
    const count2 = service2.incrementCounter();
    expect(count2).toBe(count1 + 1);
  });

  it('should share state across instances', () => {
    service1.incrementCounter();
    service1.incrementCounter();
    expect(service2.getCounter()).toBe(2);
  });
});
