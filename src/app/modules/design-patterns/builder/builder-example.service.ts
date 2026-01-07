import { Injectable } from '@angular/core';

/**
 * Builder Pattern Example
 *
 * Constructs complex objects step by step.
 */

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  age?: number;
  address?: string;
  phone?: string;
}

export class UserProfileBuilder {
  private profile: Partial<UserProfile> = {};

  setFirstName(firstName: string): UserProfileBuilder {
    this.profile.firstName = firstName;
    return this;
  }

  setLastName(lastName: string): UserProfileBuilder {
    this.profile.lastName = lastName;
    return this;
  }

  setEmail(email: string): UserProfileBuilder {
    this.profile.email = email;
    return this;
  }

  setAge(age: number): UserProfileBuilder {
    this.profile.age = age;
    return this;
  }

  setAddress(address: string): UserProfileBuilder {
    this.profile.address = address;
    return this;
  }

  setPhone(phone: string): UserProfileBuilder {
    this.profile.phone = phone;
    return this;
  }

  build(): UserProfile {
    if (!this.profile.firstName || !this.profile.lastName || !this.profile.email) {
      throw new Error('First name, last name, and email are required');
    }
    return this.profile as UserProfile;
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  createUserProfile(): UserProfileBuilder {
    return new UserProfileBuilder();
  }
}
