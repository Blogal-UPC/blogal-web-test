import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private steps: any[] = [];
  private currentStepIndex: number = 0;

  initialize(steps: any[]): void {
    this.steps = [
      { anchorId: 'benefits', title: 'Beneficios', content: 'Descubre cómo Blogal puede transformar tu vida.' },
      { anchorId: 'testimonials', title: 'Testimonios', content: '¡No lo decimos solo nosotros, lo dicen quienes ya lo probaron!' },
      { anchorId: 'pricing', title: 'Precios', content: 'Elige el plan que se ajusta a tus necesidades.' },
      { anchorId: 'about-us', title: 'Sobre Nosotros', content: 'Somos un equipo apasionado dedicado a ofrecerte soluciones prácticas.' },
      { anchorId: 'faqs', title: 'Preguntas Frecuentes', content: '¿Tienes dudas? Aquí tienes las respuestas.' }
    ];
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
  
      const tutorialModal = document.getElementById('tutorial-modal');
      const tutorialModalTitle = document.getElementById('tutorial-modal-title');
      const tutorialModalContent = document.getElementById('tutorial-modal-content');
      const tutorialModalNext = document.getElementById('tutorial-modal-next');
      const tutorialModalClose = document.getElementById('tutorial-modal-close');
  
      if (tutorialModal && tutorialModalTitle && tutorialModalContent && tutorialModalNext && tutorialModalClose) {
        tutorialModalTitle.innerText = step.title;
        tutorialModalContent.innerText = step.content;
        tutorialModal.style.display = 'block';
  
        tutorialModalNext.onclick = () => {
          tutorialModal.style.display = 'none';
          this.next();
        };
  
        tutorialModalClose.onclick = () => {
          tutorialModal.style.display = 'none';
        };
      }
    }
  }

  private end(): void {
    const tutorialModal = document.getElementById('tutorial-modal');
    if (tutorialModal) {
      tutorialModal.style.display = 'none';
    }
    alert('Tutorial finalizado');
  }
}