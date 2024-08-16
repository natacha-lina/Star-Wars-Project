import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../../services/swapi.service'; 
import { Location } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  
})
export class ResultComponent implements OnInit {
  item: any;
  film_id: any;
  people_id: any;
  characters: any[] = [];
  url_suggestions: any[] = [];
  suggestions: any[] = [];

  isDataLoaded = false

  constructor(
    private route: ActivatedRoute,
    private swapiService: SwapiService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    //const positiveIntegerRegex = /^\d+$/
    console.log(id)
    if (id) {
      this.swapiService.searchItems('people', id).subscribe((response: any) => {
        console.log(response.results)
        if (response.results.length) {
          this.item = response.results[0]
          this.loadSuggestions(this.item)
        } else {
          this.item = null
        }
        this.isDataLoaded = true
      });
    }
  }

  loadSuggestions(item: any) {
    if (item.films.length) {
      console.log(item.films)
      this.film_id = item.films[0].match(/\/(\d+)\/$/)[1]
      console.log(this.film_id) 
      this.swapiService.getItem('films', this.film_id).subscribe((response: any) => {
        this.characters = response.characters;
        this.url_suggestions = this.characters.filter(chr => chr != item.url).slice(0, 3);

        this.url_suggestions.forEach(url => {
          this.people_id = url.match(/\/(\d+)\/$/)[1]
          this.swapiService.getItem('people', this.people_id).subscribe((resp: any) => {
            this.suggestions.push(resp)
          })
        })
        console.log(this.suggestions)
      });
    }
  }

  goBack(): void {
    this.location.back();
  }

  toTitleCase(str: any) {
    if (!str || typeof str !== 'string') {
      return ''; // Retorna uma string vazia se a entrada for inválida
    }
  
    return str.toLowerCase().split(' ').map((word: any) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }
  
}

