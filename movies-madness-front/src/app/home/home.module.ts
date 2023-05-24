import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { FilmService } from '../service/film.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule],
})
export class HomeModule {}
