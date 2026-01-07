# angular-virtual-scroll-grid-example

Angular Virtual Scroll Grid Example. Example of virtual scrolling in a grid with Angular 9.

Created by AngularExample. [https://github.com/angularexample](https://github.com/angularexample)

Full source code available at [https://github.com/angularexample/angular-virtual-scroll-example](https://github.com/angularexample/angular-virtual-scroll-example)

## Running Example

Click for running example:
[angular-virtual-scroll-grid-example](https://angularexample.github.io/angular-virtual-scroll-grid-example/)

### Screen Shot

![Angular Virtual Scroll Grid Example](https://github.com/angularexample/angular-virtual-scroll-grid-example/blob/master/src/assets/images/angular-virtual-scroll-grid-example.png)

## Table of Contents
- [About The Author](#about-the-author)
- [Purpose Of This Project](#purpose-of-this-project)
- [Design Patterns Examples](#design-patterns-examples)
- [Project Setup](#project-setup)
  * [Prerequisites](#prerequisites)
  * [How To Install](#how-to-install)
  * [How To Run](#how-to-run)
  * [How To Run Unit Tests](#how-to-run-unit-tests)
  * [How To Run End To End Tests](#how-to-run-end-to-end-tests)
- [Software Libraries Used](#software-libraries-used)

## About The Author

**JC Lango** is a UI Architect and UI Developer for large scale web applications at several Fortune 500 companies.

He is an expert in **Angular**, **Polymer**, and **React** and maintains these sites at Github:

* **AngularExample** [https://github.com/angularexample](https://github.com/angularexample)
* **PolymerExample** [https://github.com/polymerexample](https://github.com/polymerexample)
* **ReactJSExample** [https://github.com/reactjsexample](https://github.com/reactjsexample)

JC may be available to work remote, and can be contacted at these links:
 
* LinkedIn: [https://www.linkedin.com/in/jclango](https://www.linkedin.com/in/jclango)
* Email: [jobs@jclango.com](mailto:jobs@jclango.com)

## Purpose Of This Project

The purpose of this project is to provide an example of virtual scrolling in Angular.

Virtual scrolling improves the performance for the display of lists (or tables or grids) that contain a large number of records.

This requires Angular Material 7 or newer. Angular CDK is required, which is part of Angular Material.

This project is written in Angular 9.

## Design Patterns Examples

This project now includes comprehensive examples of 10 common design patterns implemented in Angular:

1. **Singleton Pattern** - Angular services as singletons
2. **Observer Pattern** - RxJS Observables for reactive programming
3. **Factory Pattern** - Creating objects based on parameters
4. **Strategy Pattern** - Interchangeable algorithms
5. **Decorator Pattern** - Custom TypeScript decorators
6. **Facade Pattern** - Simplified interface to complex subsystems
7. **Command Pattern** - Undo/redo functionality
8. **Adapter Pattern** - Interface compatibility
9. **Builder Pattern** - Step-by-step object construction
10. **Proxy Pattern** - Caching and access control

All patterns are fully documented with working examples, unit tests, and detailed explanations.

See [Design Patterns README](src/app/modules/design-patterns/README.md) for complete documentation.

## Project Setup

### Prerequisites

You need to have Node and NPM installed on your PC.

[Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### How To Install

Download the source code using git or else download and unzip the zip file.

Open a terminal window and go to the project root folder.

You need to have npm installed globally.

Run `npm i` to install the required libraries.

### How To Run

Run `ng serve` for a dev server.

Navigate to `http://localhost:4200/`.

The browser will automatically reload if you change any of the source files.

### How To Run Unit Tests

To run the unit tests, you need to stop the server.
 
If the server is running, stop the server from the terminal window by pressing *Control-C*.

To run the unit tests, Run the following command in the terminal window.

`ng test -- --no-watch --no-progress --browsers=ChromeHeadlessCI`

And if you're running on Windows,
include the `--disable-gpu` flag. See [crbug.com/737678](https://bugs.chromium.org/p/chromium/issues/detail?id=737678).

### How To Run End To End Tests

To run the unit tests using Angular *cli*, you need to stop the server.
 
If the server is running, stop the server from the terminal window by pressing *Control-C*.

To run the e2e tests using Angular cli, Run the following command in the terminal window.

`ng e2e -- --protractor-config=e2e/protractor-ci.conf.js`

And if you're running on Windows,
include the `--disable-gpu` flag. See [crbug.com/737678](https://bugs.chromium.org/p/chromium/issues/detail?id=737678).

## Software Libraries Used

The following major software libraries are used:
```text
Angular 9
Angular Material 8
Angular CDK
RxJS 6
```

**Note**: Normally you need to match the version of Angular Material to Angular. But we must use Angular Material 8 because 9 is not yet released.
In this case it will still work.

---
