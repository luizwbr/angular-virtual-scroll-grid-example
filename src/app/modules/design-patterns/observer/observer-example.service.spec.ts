import { TestBed } from '@angular/core/testing';
import { ObserverExampleService } from './observer-example.service';

describe('ObserverExampleService', () => {
  let service: ObserverExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObserverExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should notify subscribers of data changes', (done) => {
    const testData = 'test data';
    service.getData().subscribe(data => {
      expect(data).toBe(testData);
      done();
    });
    service.updateData(testData);
  });

  it('should notify multiple subscribers', (done) => {
    const testData = 'broadcast data';
    let receivedCount = 0;

    service.getData().subscribe(data => {
      expect(data).toBe(testData);
      receivedCount++;
    });

    service.getData().subscribe(data => {
      expect(data).toBe(testData);
      receivedCount++;
      if (receivedCount === 2) {
        done();
      }
    });

    service.updateData(testData);
  });
});
