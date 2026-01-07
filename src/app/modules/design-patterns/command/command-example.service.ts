import { Injectable } from '@angular/core';

/**
 * Command Pattern Example
 *
 * Encapsulates a request as an object, allowing parameterization of clients
 * with different requests, queuing of requests, and logging of operations.
 */

export interface Command {
  execute(): void;
  undo(): void;
}

export class Light {
  private isOn = false;

  turnOn(): void {
    this.isOn = true;
    console.log('Light is ON');
  }

  turnOff(): void {
    this.isOn = false;
    console.log('Light is OFF');
  }

  getStatus(): boolean {
    return this.isOn;
  }
}

export class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOn();
  }

  undo(): void {
    this.light.turnOff();
  }
}

export class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOff();
  }

  undo(): void {
    this.light.turnOn();
  }
}

@Injectable({
  providedIn: 'root'
})
export class RemoteControl {
  private history: Command[] = [];

  executeCommand(command: Command): void {
    command.execute();
    this.history.push(command);
  }

  undoLastCommand(): void {
    const command = this.history.pop();
    if (command) {
      command.undo();
    }
  }
}
