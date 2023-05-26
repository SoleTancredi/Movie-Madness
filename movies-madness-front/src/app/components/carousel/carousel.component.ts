import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { FilmsProps } from 'src/app/models';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, CarouselModule, TagModule, ButtonModule],
})
export class CarouselComponent implements OnChanges {
  @Input() films?: FilmsProps[];
  
  genre: string = 'Terror';
  ngOnChanges() {
    console.log('changes');
  }
}
