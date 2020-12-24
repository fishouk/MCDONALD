import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Animal } from './animal';
import { ANIMALS } from './mock-animals';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor() { }

  getAnimals(): Observable<Animal[]> {
    return of(ANIMALS);
  }

}
