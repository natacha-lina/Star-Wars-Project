import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchModule } from './components/search/search.module';
import { FooterComponent } from './shared/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'star-wars';
}
