import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

/**
 * Observer Pattern Example
 *
 * Uses RxJS Subject to implement the Observer pattern.
 * Multiple subscribers can observe changes to the data.
 */
@Injectable({
  providedIn: 'root'
})
export class ObserverExampleService {
  private dataSubject = new Subject<string>();
  private data$ = this.dataSubject.asObservable();

  getData(): Observable<string> {
    return this.data$;
  }

  updateData(newData: string): void {
    this.dataSubject.next(newData);
  }
}
