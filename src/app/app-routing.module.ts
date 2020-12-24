import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongAutoComponent } from './song-auto/song-auto.component';
import { SongManualComponent } from './song-manual/song-manual.component';

export const routes: Routes = [
  { path: '', redirectTo: '/song-auto', pathMatch: 'full' },
  { path: 'song-auto', component: SongAutoComponent, data : {title:'Listen a song'} },
  { path: 'song-manual', component: SongManualComponent, data : {title:'Customize a song'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
