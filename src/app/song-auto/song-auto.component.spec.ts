import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from "rxjs";
import { AnimalsService } from '../animals.service';
import { ANIMALS } from '../mock-animals';

import { SongAutoComponent } from './song-auto.component';

describe('SongAutoComponent', () => {
  let component: SongAutoComponent;
  let fixture: ComponentFixture<SongAutoComponent>;
  let mockAnimalsService;

  beforeEach(async () => {
    mockAnimalsService = jasmine.createSpyObj(['getAnimals']);

    await TestBed.configureTestingModule({
      declarations: [ SongAutoComponent ],
      providers: [
        { provider: AnimalsService, useValue: mockAnimalsService }
      ] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set animals correctly from the service', () => {
    mockAnimalsService.getAnimals.and.returnValue(of(ANIMALS));
    fixture.detectChanges();
    expect(fixture.componentInstance.animals.length).toBe(5);
  });
  
});
