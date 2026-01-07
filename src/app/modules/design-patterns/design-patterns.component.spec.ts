import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesignPatternsComponent } from './design-patterns.component';

describe('DesignPatternsComponent', () => {
  let component: DesignPatternsComponent;
  let fixture: ComponentFixture<DesignPatternsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignPatternsComponent ]
    });
    fixture = TestBed.createComponent(DesignPatternsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should demonstrate singleton pattern', () => {
    component.demonstrateSingleton();
    expect(component.singletonInstanceId).toBeDefined();
    expect(component.singletonCounter).toBeGreaterThan(0);
  });

  it('should demonstrate factory pattern', () => {
    component.demonstrateFactory();
    expect(component.factoryResults.length).toBe(3);
    expect(component.factoryResults[0]).toContain('car');
    expect(component.factoryResults[1]).toContain('bike');
    expect(component.factoryResults[2]).toContain('truck');
  });

  it('should demonstrate strategy pattern', () => {
    component.demonstrateStrategy();
    expect(component.strategyResults.length).toBe(3);
    expect(component.strategyResults[0]).toContain('Credit Card');
    expect(component.strategyResults[1]).toContain('PayPal');
    expect(component.strategyResults[2]).toContain('Bitcoin');
  });

  it('should demonstrate decorator pattern', () => {
    component.demonstrateDecorator();
    expect(component.decoratorResult).toBeDefined();
    expect(component.decoratorResult).toBeGreaterThan(0);
  });

  it('should demonstrate facade pattern', () => {
    component.demonstrateFacade();
    expect(component.facadeResult).toBeDefined();
    expect(component.facadeResult).toContain('Login');
  });

  it('should demonstrate command pattern', () => {
    component.demonstrateCommand();
    expect(component.commandLogs.length).toBeGreaterThan(0);
  });

  it('should demonstrate adapter pattern', () => {
    component.demonstrateAdapter();
    expect(component.adapterResult).toBeDefined();
    expect(component.adapterResult).toContain('User:');
  });

  it('should demonstrate builder pattern', () => {
    component.demonstrateBuilder();
    expect(component.builderResult).toBeDefined();
    expect(component.builderResult).toContain('John');
    expect(component.builderResult).toContain('Doe');
  });

  it('should call all demonstrations on init', () => {
    spyOn(component, 'demonstrateSingleton');
    spyOn(component, 'demonstrateObserver');
    spyOn(component, 'demonstrateFactory');
    spyOn(component, 'demonstrateStrategy');
    spyOn(component, 'demonstrateDecorator');
    spyOn(component, 'demonstrateFacade');
    spyOn(component, 'demonstrateCommand');
    spyOn(component, 'demonstrateAdapter');
    spyOn(component, 'demonstrateBuilder');
    spyOn(component, 'demonstrateProxy');

    component.ngOnInit();

    expect(component.demonstrateSingleton).toHaveBeenCalled();
    expect(component.demonstrateObserver).toHaveBeenCalled();
    expect(component.demonstrateFactory).toHaveBeenCalled();
    expect(component.demonstrateStrategy).toHaveBeenCalled();
    expect(component.demonstrateDecorator).toHaveBeenCalled();
    expect(component.demonstrateFacade).toHaveBeenCalled();
    expect(component.demonstrateCommand).toHaveBeenCalled();
    expect(component.demonstrateAdapter).toHaveBeenCalled();
    expect(component.demonstrateBuilder).toHaveBeenCalled();
    expect(component.demonstrateProxy).toHaveBeenCalled();
  });
});
