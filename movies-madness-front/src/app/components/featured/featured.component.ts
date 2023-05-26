import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsProps } from 'src/app/models';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'featured-comp',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent implements OnInit {
  coordinates: { rX: number; rY: number } = { rX: 0, rY: 0 };
  featured?: FilmsProps;
  @ViewChild('featuredElement', { static: true }) FeaturedElement?: ElementRef;

  constructor(private filmService: FilmService, private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.getFeatured();
    this.runAnimation();
  }

  getFeatured() {
    this.filmService
      .getMoviesByTitle('harry potter')
      .subscribe((value) => (this.featured = value));
  }

  ngAfterViewInit() {
    const el = this.FeaturedElement?.nativeElement;
    if (!el) return;

    let w = el.clientWidth;
    let h = el.clientHeight;
    let b = el.getBoundingClientRect();

    el.addEventListener('mousemove', (e: MouseEvent) => {
      let X = (e.clientX - b.left) / w;
      let Y = (e.clientY - b.top) / h;

      let rX = (X - 0.5) * 20;
      let rY = -(Y - 0.5) * 20;
      this.coordinates = {
        rX,
        rY,
      };
    });
    el.addEventListener('mouseleave', ()=>{
	this.coordinates = { rX: 0, rY: 0};
    })
  }

  runAnimation() {
    requestAnimationFrame(() => {
	document.documentElement.style.setProperty('--r-x', this.coordinates.rX + 'deg');
      document.documentElement.style.setProperty('--r-y', this.coordinates.rY + 'deg');
	this.runAnimation();
    });
  }
}
