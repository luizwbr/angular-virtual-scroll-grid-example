import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { SingletonExampleService } from './singleton/singleton-example.service';
import { ObserverExampleService } from './observer/observer-example.service';
import { VehicleFactory } from './factory/factory-example.service';
import { PaymentService, CreditCardPayment, PayPalPayment, BitcoinPayment } from './strategy/strategy-example.service';
import { DecoratorExample } from './decorator/decorator-example';
import { SecurityFacade } from './facade/facade-example.service';
import { RemoteControl, Light, LightOnCommand, LightOffCommand } from './command/command-example.service';
import { UserAdapter } from './adapter/adapter-example.service';
import { UserProfileService } from './builder/builder-example.service';
import { CachingDataProxy } from './proxy/proxy-example.service';

@Component({
  selector: 'xxx-design-patterns',
  templateUrl: './design-patterns.component.html',
  styleUrls: ['./design-patterns.component.css']
})
export class DesignPatternsComponent implements OnInit, OnDestroy {
  // Singleton
  singletonInstanceId: string;
  singletonCounter: number;

  // Observer
  observerData: string[] = [];
  private observerSubscription: Subscription;
  private observerTimeouts: number[] = [];

  // Factory
  factoryResults: string[] = [];

  // Strategy
  strategyResults: string[] = [];

  // Decorator
  decoratorResult: number;

  // Facade
  facadeResult: string;

  // Command
  commandLogs: string[] = [];

  // Adapter
  adapterResult: string;

  // Builder
  builderResult: string;

  // Proxy
  proxyResults: string[] = [];
  private proxyTimeouts: number[] = [];

  constructor(
    private singletonService: SingletonExampleService,
    private observerService: ObserverExampleService,
    private vehicleFactory: VehicleFactory,
    private paymentService: PaymentService,
    private securityFacade: SecurityFacade,
    private remoteControl: RemoteControl,
    private userAdapter: UserAdapter,
    private userProfileService: UserProfileService,
    private cachingProxy: CachingDataProxy
  ) {}

  ngOnInit(): void {
    this.demonstrateSingleton();
    this.demonstrateObserver();
    this.demonstrateFactory();
    this.demonstrateStrategy();
    this.demonstrateDecorator();
    this.demonstrateFacade();
    this.demonstrateCommand();
    this.demonstrateAdapter();
    this.demonstrateBuilder();
    this.demonstrateProxy();
  }

  ngOnDestroy(): void {
    if (this.observerSubscription) {
      this.observerSubscription.unsubscribe();
    }
    this.observerTimeouts.forEach(timeoutId => clearTimeout(timeoutId));
    this.proxyTimeouts.forEach(timeoutId => clearTimeout(timeoutId));
  }

  demonstrateSingleton(): void {
    this.singletonInstanceId = this.singletonService.getInstanceId();
    this.singletonCounter = this.singletonService.incrementCounter();
  }

  demonstrateObserver(): void {
    this.observerSubscription = this.observerService.getData().subscribe(data => {
      this.observerData.push(data);
    });

    this.observerTimeouts.push(window.setTimeout(() => this.observerService.updateData('First update'), 100));
    this.observerTimeouts.push(window.setTimeout(() => this.observerService.updateData('Second update'), 200));
    this.observerTimeouts.push(window.setTimeout(() => this.observerService.updateData('Third update'), 300));
  }

  demonstrateFactory(): void {
    const car = this.vehicleFactory.createVehicle('car');
    const bike = this.vehicleFactory.createVehicle('bike');
    const truck = this.vehicleFactory.createVehicle('truck');

    this.factoryResults.push(car.drive());
    this.factoryResults.push(bike.drive());
    this.factoryResults.push(truck.drive());
  }

  demonstrateStrategy(): void {
    this.paymentService.setStrategy(new CreditCardPayment());
    this.strategyResults.push(this.paymentService.executePayment(100));

    this.paymentService.setStrategy(new PayPalPayment());
    this.strategyResults.push(this.paymentService.executePayment(200));

    this.paymentService.setStrategy(new BitcoinPayment());
    this.strategyResults.push(this.paymentService.executePayment(300));
  }

  demonstrateDecorator(): void {
    const example = new DecoratorExample();
    this.decoratorResult = example.performCalculation(1000);
  }

  demonstrateFacade(): void {
    const loginSuccess = this.securityFacade.login('admin', 'admin');
    this.facadeResult = loginSuccess ? 'Login successful' : 'Login failed';
  }

  demonstrateCommand(): void {
    const light = new Light();
    const lightOn = new LightOnCommand(light);
    const lightOff = new LightOffCommand(light);

    this.remoteControl.executeCommand(lightOn);
    this.commandLogs.push('Executed: Turn light ON');

    this.remoteControl.executeCommand(lightOff);
    this.commandLogs.push('Executed: Turn light OFF');

    this.remoteControl.undoLastCommand();
    this.commandLogs.push('Undone: Light is back ON');
  }

  demonstrateAdapter(): void {
    const user = this.userAdapter.getUser();
    this.adapterResult = `User: ${user.name}, Email: ${user.email}, Age: ${user.age}`;
  }

  demonstrateBuilder(): void {
    const userProfile = this.userProfileService.createUserProfile()
      .setFirstName('John')
      .setLastName('Doe')
      .setEmail('john.doe@example.com')
      .setAge(30)
      .setAddress('123 Main St')
      .build();

    this.builderResult = `${userProfile.firstName} ${userProfile.lastName} - ${userProfile.email}`;
  }

  demonstrateProxy(): void {
    // First call - fetches fresh data
    this.proxyResults.push('First call: ' + this.cachingProxy.getData());

    // Second call - returns cached data
    this.proxyTimeouts.push(window.setTimeout(() => {
      this.proxyResults.push('Second call (cached): ' + this.cachingProxy.getData());
    }, 1000));

    // Third call after cache expires - fetches fresh data
    this.proxyTimeouts.push(window.setTimeout(() => {
      this.proxyResults.push('Third call (after 6s): ' + this.cachingProxy.getData());
    }, 6000));
  }
}
