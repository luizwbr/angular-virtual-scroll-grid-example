import { Injectable } from '@angular/core';

/**
 * Strategy Pattern Example
 *
 * Defines a family of algorithms and makes them interchangeable.
 */

export interface PaymentStrategy {
  pay(amount: number): string;
}

export class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): string {
    return `Paid $${amount} using Credit Card`;
  }
}

export class PayPalPayment implements PaymentStrategy {
  pay(amount: number): string {
    return `Paid $${amount} using PayPal`;
  }
}

export class BitcoinPayment implements PaymentStrategy {
  pay(amount: number): string {
    return `Paid $${amount} using Bitcoin`;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private strategy: PaymentStrategy;

  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  executePayment(amount: number): string {
    if (!this.strategy) {
      throw new Error('Payment strategy not set');
    }
    return this.strategy.pay(amount);
  }
}
