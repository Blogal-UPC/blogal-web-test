import { Injectable } from '@angular/core';
import { Category } from '../../shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: Category[] = [
    { id: 1, name: 'Biología', description: 'Artículos de Biología' },
    { id: 2, name: 'Ecología', description: 'Libros sobre Ecología' },
    { id: 3, name: 'Astronomía', description: 'Libros de Astronomía' },
    { id: 4, name: 'Meteorologia', description: 'Libros de Meteorologia' },
    { id: 5, name: 'Botánica', description: 'Libros de Botánica' },
    { id: 6, name: 'Zoología', description: 'Libros de Zoología' },

  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getCategoryById(id: number): Category | null {
    return this.categories.find(c => c.id === id) || null;
  }

  private nextId = this.categories.length + 1;
  addCategory(category: Category): Category {
    category.id = this.nextId++;
    this.categories.push(category);
    return category;
  }


  deleteCategory(id: number): void {
    this.categories = this.categories.filter(c => c.id !== id);
  }
}
