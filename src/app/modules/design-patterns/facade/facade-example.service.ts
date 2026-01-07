import { Injectable } from '@angular/core';

/**
 * Facade Pattern Example
 *
 * Provides a simplified interface to a complex subsystem.
 */

// Complex subsystem classes
class AuthenticationSystem {
  authenticate(username: string, password: string): boolean {
    console.log('Authenticating user...');
    return username === 'admin' && password === 'admin';
  }
}

class AuthorizationSystem {
  authorize(user: string, resource: string): boolean {
    console.log('Authorizing access...');
    return user === 'admin';
  }
}

class LoggingSystem {
  log(message: string): void {
    console.log(`[LOG] ${message}`);
  }
}

// Facade that simplifies the interface
@Injectable({
  providedIn: 'root'
})
export class SecurityFacade {
  private auth = new AuthenticationSystem();
  private authz = new AuthorizationSystem();
  private logger = new LoggingSystem();

  login(username: string, password: string): boolean {
    this.logger.log(`Login attempt for user: ${username}`);

    if (!this.auth.authenticate(username, password)) {
      this.logger.log(`Authentication failed for user: ${username}`);
      return false;
    }

    if (!this.authz.authorize(username, 'dashboard')) {
      this.logger.log(`Authorization failed for user: ${username}`);
      return false;
    }

    this.logger.log(`User ${username} logged in successfully`);
    return true;
  }
}
