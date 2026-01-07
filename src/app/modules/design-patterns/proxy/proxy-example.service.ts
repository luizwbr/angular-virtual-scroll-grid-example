import { Injectable } from '@angular/core';

/**
 * Proxy Pattern Example
 *
 * Provides a surrogate or placeholder to control access to an object.
 */

export interface DataService {
  getData(): string;
}

// Real subject
export class RealDataService implements DataService {
  getData(): string {
    console.log('Fetching data from real service...');
    return 'Real Data';
  }
}

// Proxy with caching
@Injectable({
  providedIn: 'root'
})
export class CachingDataProxy implements DataService {
  private realService = new RealDataService();
  private cache: string | null = null;
  private cacheTime: number | null = null;
  private readonly CACHE_DURATION = 5000; // 5 seconds

  getData(): string {
    const now = Date.now();

    // Return cached data if still valid
    if (this.cache && this.cacheTime && (now - this.cacheTime) < this.CACHE_DURATION) {
      console.log('Returning cached data');
      return this.cache;
    }

    // Fetch fresh data and cache it
    console.log('Cache expired or empty, fetching fresh data');
    this.cache = this.realService.getData();
    this.cacheTime = now;
    return this.cache;
  }

  clearCache(): void {
    this.cache = null;
    this.cacheTime = null;
  }
}
