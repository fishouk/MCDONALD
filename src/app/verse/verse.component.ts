import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-verse',
  templateUrl: './verse.component.html',
  styleUrls: ['./verse.component.sass']
})
export class VerseComponent implements OnInit {

  @Input() animal: Animal;

  constructor() { }

  ngOnInit(): void {
  }

}
