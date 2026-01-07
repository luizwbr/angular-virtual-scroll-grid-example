import { Injectable } from '@angular/core';

/**
 * Adapter Pattern Example
 *
 * Allows incompatible interfaces to work together.
 */

// Old API interface
export interface OldApiResponse {
  user_name: string;
  user_email: string;
  user_age: number;
}

// New API interface (what our app expects)
export interface User {
  name: string;
  email: string;
  age: number;
}

// Old API service
export class LegacyUserService {
  getUser(): OldApiResponse {
    return {
      user_name: 'John Doe',
      user_email: 'john@example.com',
      user_age: 30
    };
  }
}

// Adapter to convert old API to new format
@Injectable({
  providedIn: 'root'
})
export class UserAdapter {
  private legacyService = new LegacyUserService();

  getUser(): User {
    const oldData = this.legacyService.getUser();

    // Adapt old format to new format
    return {
      name: oldData.user_name,
      email: oldData.user_email,
      age: oldData.user_age
    };
  }
}
