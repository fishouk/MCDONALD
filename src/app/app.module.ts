import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerseComponent } from './verse/verse.component';
import { SongAutoComponent } from './song-auto/song-auto.component';
import { SongManualComponent } from './song-manual/song-manual.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';

@NgModule({
  declarations: [
    AppComponent,
    VerseComponent,
    SongAutoComponent,
    SongManualComponent,
    CheckboxGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
