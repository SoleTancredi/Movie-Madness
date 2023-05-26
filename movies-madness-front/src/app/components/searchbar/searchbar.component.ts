import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
//   imports: [NgMod]
})
export class SearchbarComponent {
  searchInput: string = "";
}
