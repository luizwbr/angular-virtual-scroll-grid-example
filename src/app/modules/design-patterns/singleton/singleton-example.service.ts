import { Injectable } from '@angular/core';

/**
 * Singleton Pattern Example
 *
 * In Angular, services with providedIn: 'root' are singletons by default.
 * This means only one instance of the service exists throughout the application.
 */
@Injectable({
  providedIn: 'root'
})
export class SingletonExampleService {
  private instanceId: string;
  private counter = 0;

  constructor() {
    this.instanceId = Math.random().toString(36).substr(2, 9);
    console.log('SingletonExampleService instance created with ID:', this.instanceId);
  }

  getInstanceId(): string {
    return this.instanceId;
  }

  incrementCounter(): number {
    return ++this.counter;
  }

  getCounter(): number {
    return this.counter;
  }
}
