# Design Patterns Examples for Angular

This module demonstrates 10 common design patterns implemented in Angular 2+.

## Patterns Included

### 1. Singleton Pattern
**Location:** `singleton/singleton-example.service.ts`

**Description:** In Angular, services with `providedIn: 'root'` are singletons by default. This means only one instance of the service exists throughout the application lifecycle.

**Use Case:** Managing global application state, shared configurations, or single points of access to resources.

### 2. Observer Pattern
**Location:** `observer/observer-example.service.ts`

**Description:** Uses RxJS Observables and Subjects to implement the Observer pattern. Multiple subscribers can observe and react to data changes.

**Use Case:** Event handling, data synchronization, reactive programming, and real-time updates.

### 3. Factory Pattern
**Location:** `factory/factory-example.service.ts`

**Description:** Creates different types of objects (vehicles: car, bike, truck) based on input parameters without exposing the creation logic.

**Use Case:** Object creation when the exact type isn't known until runtime, or when creation logic is complex.

### 4. Strategy Pattern
**Location:** `strategy/strategy-example.service.ts`

**Description:** Defines a family of algorithms (payment methods: Credit Card, PayPal, Bitcoin) and makes them interchangeable at runtime.

**Use Case:** Multiple algorithms for the same task, runtime selection of behavior, avoiding conditional statements.

### 5. Decorator Pattern
**Location:** `decorator/decorator-example.ts`

**Description:** Angular uses decorators extensively (@Component, @Injectable, @Input, etc.). This example shows custom decorators for logging execution time and making properties readonly.

**Use Case:** Adding functionality to classes or methods without modifying their code, cross-cutting concerns like logging.

### 6. Facade Pattern
**Location:** `facade/facade-example.service.ts`

**Description:** Provides a simplified interface to a complex subsystem (authentication, authorization, and logging systems).

**Use Case:** Simplifying complex APIs, providing a unified interface to multiple subsystems.

### 7. Command Pattern
**Location:** `command/command-example.service.ts`

**Description:** Encapsulates requests as objects (LightOnCommand, LightOffCommand), enabling undo/redo functionality and request queuing.

**Use Case:** Implementing undo/redo, macro recording, transaction management, request queuing.

### 8. Adapter Pattern
**Location:** `adapter/adapter-example.service.ts`

**Description:** Converts one interface to another, making incompatible interfaces work together (adapting old API format to new format).

**Use Case:** Integrating legacy code, working with third-party libraries, API version compatibility.

### 9. Builder Pattern
**Location:** `builder/builder-example.service.ts`

**Description:** Constructs complex objects step by step with a fluent interface (UserProfileBuilder).

**Use Case:** Creating objects with many optional parameters, improving code readability, enforcing object construction rules.

### 10. Proxy Pattern
**Location:** `proxy/proxy-example.service.ts`

**Description:** Provides a surrogate or placeholder to control access to an object. This example implements a caching proxy.

**Use Case:** Lazy loading, caching, access control, logging, virtual proxies.

## Running the Examples

All patterns are demonstrated in the `DesignPatternsComponent`. When you run the application:

1. Start the development server: `npm start`
2. Navigate to the application in your browser
3. The design patterns examples will be displayed with visual output
4. Open the browser console to see additional logging from patterns like Decorator, Facade, and Command

## File Structure

```
design-patterns/
├── adapter/
│   └── adapter-example.service.ts
├── builder/
│   └── builder-example.service.ts
├── command/
│   └── command-example.service.ts
├── decorator/
│   └── decorator-example.ts
├── facade/
│   └── facade-example.service.ts
├── factory/
│   └── factory-example.service.ts
├── observer/
│   └── observer-example.service.ts
├── proxy/
│   └── proxy-example.service.ts
├── singleton/
│   └── singleton-example.service.ts
├── strategy/
│   └── strategy-example.service.ts
├── design-patterns.component.ts
├── design-patterns.component.html
├── design-patterns.component.css
├── design-patterns.module.ts
└── README.md
```

## Learning Resources

- [Angular Style Guide](https://angular.io/guide/styleguide)
- [RxJS Documentation](https://rxjs.dev/)
- [TypeScript Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)
- [Design Patterns (Gang of Four)](https://en.wikipedia.org/wiki/Design_Patterns)

## Notes

- All services use `providedIn: 'root'` for dependency injection
- Examples are simplified for educational purposes
- Check browser console for detailed logging output
- Some patterns (Observer, Proxy) have time-based demonstrations
