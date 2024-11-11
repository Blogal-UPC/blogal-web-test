import { Injectable } from '@angular/core';
import { Tag } from '../../shared/models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {
    private tags: Tag[] = [
        { id: 1, name: '', description: 'Etiqueta por defecto' },
        { id: 2, name: 'tortugas', description: 'Tortugas' },
        { id: 3, name: 'oceano', description: 'Usa esta etiqueta si tu tema se relaciona al océano' },
        { id: 4, name: 'estrellas', description: 'Usa esta etiqueta si tu tema se relaciona a estrellas' },
        { id: 5, name: 'cangrejos', description: 'Para temas sobre cangrejos y crustáceos' },
        { id: 6, name: 'corales', description: 'Relacionado a arrecifes de coral y ecosistemas marinos' },
        { id: 7, name: 'glaciares', description: 'Etiquetas sobre glaciares y zonas polares' },
        { id: 8, name: 'mariposas', description: 'Para temas sobre mariposas e insectos' },
        { id: 9, name: 'manglares', description: 'Contenido sobre manglares y su conservación' },
        { id: 10, name: 'ballenas', description: 'Temas relacionados con ballenas y mamíferos marinos' },
        { id: 11, name: 'bosques_lluviosos', description: 'Para temas sobre bosques tropicales húmedos' },
        { id: 12, name: 'dunas', description: 'Contenido sobre dunas y formaciones arenosas' },
        { id: 13, name: 'tiburones', description: 'Para temas sobre tiburones y su biología' },
        { id: 14, name: 'estalactitas', description: 'Etiquetas para formaciones de estalactitas y cuevas' },
        { id: 15, name: 'animales_nocturnos', description: 'Sobre especies que tienen actividad nocturna' },
        { id: 16, name: 'flora_desertica', description: 'Temas sobre plantas y adaptaciones en el desierto' },
        { id: 17, name: 'migracion_animal', description: 'Para temas relacionados a la migración de especies' },
        { id: 18, name: 'ecosistemas_urbanos', description: 'Sobre la naturaleza en zonas urbanas' },
        { id: 19, name: 'arrecifes', description: 'Temas sobre la biodiversidad en arrecifes de coral' },
        { id: 20, name: 'abejas', description: 'Para contenido sobre abejas y polinización' },
        { id: 21, name: 'rios_subterraneos', description: 'Etiquetas para temas sobre ríos subterráneos y acuíferos' },
        { id: 22, name: 'fosiles', description: 'Para temas sobre fósiles y paleontología específica' },
        { id: 23, name: 'orquideas', description: 'Contenido sobre la variedad de orquídeas' },
        { id: 24, name: 'cactus', description: 'Temas sobre cactus y plantas de zonas áridas' },
        { id: 25, name: 'formaciones_rocosas', description: 'Para temas sobre formaciones y estructuras geológicas' }
    ];
    

  getTags(): Tag[] {
    return this.tags;
  }

  getTagById(id: number): Tag | null {
    return this.tags.find(c => c.id === id) || null;
  }
  getTagByName(name:string):Tag|null{
    return this.tags.find(t=>t.name.toLowerCase()===name.toLowerCase())||null;
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
