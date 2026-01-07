import { TestBed } from '@angular/core/testing';
import { PaymentService, CreditCardPayment, PayPalPayment, BitcoinPayment } from './strategy-example.service';

describe('PaymentService (Strategy Pattern)', () => {
  let service: PaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should execute payment with credit card strategy', () => {
    service.setStrategy(new CreditCardPayment());
    const result = service.executePayment(100);
    expect(result).toContain('Credit Card');
    expect(result).toContain('100');
  });

  it('should execute payment with PayPal strategy', () => {
    service.setStrategy(new PayPalPayment());
    const result = service.executePayment(200);
    expect(result).toContain('PayPal');
    expect(result).toContain('200');
  });

  it('should execute payment with Bitcoin strategy', () => {
    service.setStrategy(new BitcoinPayment());
    const result = service.executePayment(300);
    expect(result).toContain('Bitcoin');
    expect(result).toContain('300');
  });

  it('should throw error when strategy is not set', () => {
    expect(() => service.executePayment(100)).toThrow();
  });
});
