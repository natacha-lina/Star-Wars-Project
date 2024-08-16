
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [FooterComponent],
  standalone: true
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToSearch() {
    this.router.navigate(['/search']);
  }
}