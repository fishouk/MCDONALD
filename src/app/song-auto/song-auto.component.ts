import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Animal } from '../animal';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-song-auto',
  templateUrl: './song-auto.component.html',
  styleUrls: ['./song-auto.component.sass']
})
export class SongAutoComponent implements OnInit {
  animals: Animal[] = [];

  constructor(
    private animalsService: AnimalsService, 
    private titleService: Title
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Listen a song');
    this.getAnimals();
  }

  getAnimals(): void {
    this.animalsService.getAnimals()
    .subscribe(animals => this.animals = animals);
  }

}
