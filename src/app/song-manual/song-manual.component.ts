import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { CheckboxItem } from '../checkbox-group/checkboxItem';

import { Animal } from '../animal';
import { Checkbox } from '../checkboxItem';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-song-manual',
  templateUrl: './song-manual.component.html',
  styleUrls: ['./song-manual.component.sass']
})
export class SongManualComponent implements OnInit {  
  animals: Animal[] = [];
  selectedAnimals: Animal[] = []; 
  animalsOptions: Checkbox[] = [];
  checkoutForm: any;
  
  constructor(
    private animalsService: AnimalsService, 
    private titleService: Title,
    private formBuilder: FormBuilder
    ) { 
      this.checkoutForm = this.formBuilder.group({
        newAnimalName: new FormControl('', [
          Validators.required, 
          Validators.pattern("^[a-zA-Z]+$")
        ]),
        newAnimalSound: new FormControl('', [
          Validators.required, 
          Validators.pattern("^[a-zA-Z]+$")
        ]),
      });
    }
  get newAnimalName() { return this.checkoutForm.get('newAnimalName'); }
  get newAnimalSound() { return this.checkoutForm.get('newAnimalSound'); }

  ngOnInit(): void {
    this.titleService.setTitle('Customize a song');
    this.getAnimals();
    this.animalsOptions = this.animals.map((item) => new CheckboxItem(item.id, item.name));    
  }

  getAnimals(): void {
    this.animalsService.getAnimals()
    .subscribe(animals => this.animals = animals);
  }

  onAnimalsChange(slectedAnimalsIDs): void {
    this.selectedAnimals = slectedAnimalsIDs.map(id =>      
      this.animals.find(x => x.id === id)
    );
  }

  onSubmit(newAnimalData) {
    this.checkoutForm.controls['newAnimalName'].markAsTouched();
    this.checkoutForm.controls['newAnimalSound'].markAsTouched();
    if(!this.checkoutForm.invalid) {
      const newAnimal = {
        id: (this.animals[this.animals.length - 1].id + 1),
        name: newAnimalData.newAnimalName,
        sound: newAnimalData.newAnimalSound,
      };
      this.animals = [...this.animals, newAnimal];
      this.animalsOptions = [...this.animalsOptions, new CheckboxItem(newAnimal.id, newAnimal.name)];

      this.checkoutForm.reset();
    }
    }
}
