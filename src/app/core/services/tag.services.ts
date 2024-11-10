import { Injectable } from '@angular/core';
import { Tag } from '../../shared/models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {
    private tags: Tag[] = [
        { id: 1, name: '', description: 'Etiqueta por defecto' },
        { id: 2, name: 'Tortugas', description: 'Tortugas' },
        { id: 3, name: 'Océano', description: 'Usa esta etiqueta si tu tema se relaciona al océano' },
        { id: 4, name: 'Estrellas', description: 'Usa esta etiqueta si tu tema se relaciona a estrellas' },
        { id: 5, name: 'Cangrejos', description: 'Para temas sobre cangrejos y crustáceos' },
        { id: 6, name: 'Corales', description: 'Relacionado a arrecifes de coral y ecosistemas marinos' },
        { id: 7, name: 'Glaciares', description: 'Etiquetas sobre glaciares y zonas polares' },
        { id: 8, name: 'Mariposas', description: 'Para temas sobre mariposas e insectos' },
        { id: 9, name: 'Manglares', description: 'Contenido sobre manglares y su conservación' },
        { id: 10, name: 'Ballenas', description: 'Temas relacionados con ballenas y mamíferos marinos' },
        { id: 11, name: 'Bosques lluviosos', description: 'Para temas sobre bosques tropicales húmedos' },
        { id: 12, name: 'Dunas', description: 'Contenido sobre dunas y formaciones arenosas' },
        { id: 13, name: 'Tiburones', description: 'Para temas sobre tiburones y su biología' },
        { id: 14, name: 'Estalactitas', description: 'Etiquetas para formaciones de estalactitas y cuevas' },
        { id: 15, name: 'Animales nocturnos', description: 'Sobre especies que tienen actividad nocturna' },
        { id: 16, name: 'Flora desértica', description: 'Temas sobre plantas y adaptaciones en el desierto' },
        { id: 17, name: 'Migración animal', description: 'Para temas relacionados a la migración de especies' },
        { id: 18, name: 'Ecosistemas urbanos', description: 'Sobre la naturaleza en zonas urbanas' },
        { id: 19, name: 'Arrecifes', description: 'Temas sobre la biodiversidad en arrecifes de coral' },
        { id: 20, name: 'Abejas', description: 'Para contenido sobre abejas y polinización' },
        { id: 21, name: 'Ríos subterráneos', description: 'Etiquetas para temas sobre ríos subterráneos y acuíferos' },
        { id: 22, name: 'Fósiles', description: 'Para temas sobre fósiles y paleontología específica' },
        { id: 23, name: 'Orquídeas', description: 'Contenido sobre la variedad de orquídeas' },
        { id: 24, name: 'Cactus', description: 'Temas sobre cactus y plantas de zonas áridas' },
        { id: 25, name: 'Formaciones rocosas', description: 'Para temas sobre formaciones y estructuras geológicas' }
    ];
    

  getTags(): Tag[] {
    return this.tags;
  }

  getTagById(id: number): Tag | null {
    return this.tags.find(c => c.id === id) || null;
  }

  addTag(tag: Tag): Tag {
    tag.id = this.tags.length + 1;
    this.tags.push(tag);
    return tag;
  }


  deleteTag(id: number): void {
    this.tags = this.tags.filter(c => c.id !== id);
  }
}
