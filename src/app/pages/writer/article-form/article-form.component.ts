import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [CommonModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatChipsModule,
    FormsModule],
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.css'
})
export class ArticleFormComponent implements OnInit{
  content: string = '';
  coauthors: string[] = [];
  allAuthors: string[] = ['John Doe', 'Juan Solis', 'Ana Smith', 'Miguel Poma', 'Jane Smith']; // Lista estática de autores
  previewContent: string = '';
  solo_suscriptores: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  addCoauthor(coauthor: string | null): void {
    if (coauthor && !this.coauthors.includes(coauthor)) {
      this.coauthors.push(coauthor);
    }
  }

  onAuthorSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedAuthor = selectElement.value;
    this.addCoauthor(selectedAuthor);
  }

  updatePreview(content: string) {
    this.previewContent = content;
  }

  publish(): void {
    // Lógica para publicar la publicación
    console.log('Publicación publicada con coautores:', this.coauthors);
    console.log('Contenido del artículo:', this.content);
  }
  importTemplate(template: string) {
    // Lógica para importar la plantilla seleccionada
    if (template === 'academic') {
      this.content = 'Plantilla de Texto Académico\n\n[Escribe tu contenido académico aquí...]';
    } else if (template === 'blog') {
      this.content = 'Plantilla de Blog\n\n[Escribe tu contenido de blog aquí...]';
    }
  }
}
