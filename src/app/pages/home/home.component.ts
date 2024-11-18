import { Component, OnInit } from '@angular/core';
import { NavbarHomeComponent } from '../../shared/components/navbar-home/navbar-home.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { TutorialService } from '../../core/services/tutorial.services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarHomeComponent,FooterComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {
    this.tutorialService.initialize([
      {
        anchorId: 'guide',
        content: 'Bienvenido a la guía de Blogal! Aquí encontrarás toda la información necesaria para usar nuestra plataforma.',
        title: 'Guía'
      },
      {
        anchorId: 'interactive-tutorials',
        content: 'Explora nuestros tutoriales interactivos para aprender a usar Blogal de manera efectiva.',
        title: 'Tutoriales Interactivos'
      }
    ]);
  }

  startTour(): void {
    this.tutorialService.start();
  }
}
