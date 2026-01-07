/**
 * Decorator Pattern Example
 *
 * Angular heavily uses decorators like @Component, @Injectable, @Input, @Output.
 * This example shows a custom decorator implementation.
 */

// Method decorator to log execution time
export function LogExecutionTime() {
  return function <T>(
    target: any,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<T>
  ) {
    const originalMethod = descriptor.value as any;

    descriptor.value = function (this: any, ...args: unknown[]) {
      const start = performance.now();
      const result = originalMethod.apply(this, args);
      const end = performance.now();
      console.log(`${propertyKey} executed in ${end - start}ms`);
      return result;
    } as any;

    return descriptor;
  };
}

// Property decorator to make properties readonly
export function ReadOnly() {
  return function (target: any, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
      writable: false,
      configurable: false
    });
  };
}

// Example class using decorators
export class DecoratorExample {
  @ReadOnly()
  public readonly applicationName = 'Angular Design Patterns';

  @LogExecutionTime()
  performCalculation(num: number): number {
    let result = 0;
    for (let i = 0; i < num; i++) {
      result += i;
    }
    return result;
  }
}
