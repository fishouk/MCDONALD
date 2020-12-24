import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from "rxjs";
import { AnimalsService } from '../animals.service';
import { ANIMALS } from '../mock-animals';
import { ReactiveFormsModule } from '@angular/forms';

import { SongManualComponent } from './song-manual.component';

describe('SongManualComponent', () => {
  let component: SongManualComponent;
  let fixture: ComponentFixture<SongManualComponent>;
  let mockAnimalsService;

  beforeEach(async () => {
    mockAnimalsService = jasmine.createSpyObj(['getAnimals']);
    
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ SongManualComponent ],
      providers: [
        { provider: AnimalsService, useValue: mockAnimalsService }
      ] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set animals correctly from the service', () => {
    mockAnimalsService.getAnimals.and.returnValue(of(ANIMALS));
    fixture.detectChanges();
    expect(fixture.componentInstance.animals.length).toBe(5);
  });

});
