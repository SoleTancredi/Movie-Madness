import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { PrimeNgModule } from '../primeNG/primeng.module';
import { HeaderComponent } from '../components/header/header.component';
import { SearchbarComponent } from '../components/searchbar/searchbar.component';
import { FeaturedComponent } from '../components/featured/featured.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, SearchbarComponent, FeaturedComponent],
  imports: [CommonModule, FormsModule, CarouselComponent, PrimeNgModule],
})
export class HomeModule {}
