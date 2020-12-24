import { TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SongAutoComponent } from './song-auto/song-auto.component';
import { SongManualComponent } from './song-manual/song-manual.component';
import { VerseComponent } from './verse/verse.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { routes } from './app-routing.module';

let location: Location;
let router: Router;
let fixture;

describe('Router: AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        SongAutoComponent,
        SongManualComponent,
        VerseComponent,
        CheckboxGroupComponent
      ],
    }).compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('navigate to "/" redirects you to /song-auto', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/song-auto');
    flush();
  }));

  it('navigate to "song-auto" redirects you to /song-auto', fakeAsync(() => {
    router.navigate(['/song-auto']).then(() => {
      expect(location.path()).toBe('/song-auto');
    });  
    flush();
  }));

  it('navigate to "song-manual" redirects you to /song-manual', fakeAsync(() => {
    router.navigate(['/song-manual']).then(() => {
      expect(location.path()).toBe('/song-manual');
    }); 
    flush(); 
  }));
});
