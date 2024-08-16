import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  query = '';

  constructor(private router: Router) {}

  search() {
    if (this.query.trim()) {
      this.router.navigate(['/result', 'people', this.query]);
    }
  }
}