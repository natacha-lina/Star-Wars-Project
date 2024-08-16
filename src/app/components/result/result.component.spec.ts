import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { ResultComponent } from './result.component';
import { SwapiService } from '../../services/swapi.service';
import { FooterComponent } from '../../shared/footer/footer.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let swapiServiceMock: any;
  let locationSpy: jasmine.SpyObj<Location>;

  beforeEach(async () => {
    // Mock de ActivatedRoute
    const activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: (key: string) => '1' // retorna um ID de exemplo
        }
      }
    };

    // Mock de SwapiService
    swapiServiceMock = jasmine.createSpyObj('SwapiService', ['searchItems', 'getItem']);
    swapiServiceMock.searchItems.and.returnValue(of({
      results: [
        {
          name: 'Luke Skywalker',
          films: ['https://swapi.dev/api/films/1/'],
          url: 'https://swapi.dev/api/people/1/'
        }
      ]
    }));

    swapiServiceMock.getItem.and.returnValue(of({
      characters: [
        'https://swapi.dev/api/people/2/',
        'https://swapi.dev/api/people/3/',
        'https://swapi.dev/api/people/4/'
      ]
    }));

    locationSpy = jasmine.createSpyObj('Location', ['back']);

    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      declarations: [ResultComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: SwapiService, useValue: swapiServiceMock },
        { provide: Location, useValue: locationSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Criação do componente
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  //Verifica se o item é carregado corretamente na inicialização do componente.
  it('should initialize and load item on ngOnInit', () => {
    component.ngOnInit();

    expect(component.item).toEqual({
      name: 'Luke Skywalker',
      films: ['https://swapi.dev/api/films/1/'],
      url: 'https://swapi.dev/api/people/1/'
    });

    expect(component.isDataLoaded).toBeTrue();
    expect(swapiServiceMock.searchItems).toHaveBeenCalledWith('people', '1');
  });

  //Testa se as sugestões são carregadas corretamente com base nos filmes.
  it('should load suggestions based on films', () => {
    component.loadSuggestions({
      films: ['https://swapi.dev/api/films/1/'],
      url: 'https://swapi.dev/api/people/1/'
    });

    expect(swapiServiceMock.getItem).toHaveBeenCalledWith('films', '1');
    expect(component.characters.length).toBe(3);
  });

  //Verifica se o método back() do Location é chamado corretamente.
  it('should navigate back on goBack()', () => {
    component.goBack();
    expect(locationSpy.back).toHaveBeenCalled();
  });

  //Testa se a função toTitleCase() converte strings corretamente.
  it('should convert a string to title case', () => {
    const result = component.toTitleCase('hello world');
    expect(result).toBe('Hello World');
  });
});