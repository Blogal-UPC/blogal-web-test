import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private steps: any[] = [];
  private currentStepIndex: number = 0;

  initialize(steps: any[]): void {
    this.steps = steps;
  }

  start(): void {
    this.currentStepIndex = 0;
    this.showStep();
  }

  next(): void {
    this.currentStepIndex++;
    if (this.currentStepIndex < this.steps.length) {
      this.showStep();
    } else {
      this.end();
    }
  }

  private showStep(): void {
    const step = this.steps[this.currentStepIndex];
    const element = document.getElementById(step.anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      alert(`${step.title}\n\n${step.content}`);
    }
  }

  private end(): void {
    alert('Tutorial finalizado');
  }
}