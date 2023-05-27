import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { HeaderComponent } from '../components/header/header.component';
import { SearchbarComponent } from '../components/searchbar/searchbar.component';
import { FeaturedComponent } from '../components/featured/featured.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SearchbarComponent,
    FeaturedComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CarouselComponent,
    RouterModule,
    ButtonModule,
    InputTextModule
  ],
})
export class HomeModule {}
