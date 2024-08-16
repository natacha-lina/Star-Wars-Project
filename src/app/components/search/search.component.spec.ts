import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from '../../shared/footer/footer.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule,FooterComponent],
      declarations: [SearchComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  //Criação do Componente: Verifica se o componente foi criado com sucesso.
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  //Navegação com Query Não Vazia
  it('should navigate to the result page when query is not empty', () => {
    const navigateSpy = spyOn(router, 'navigate');

    component.query = 'Luke Skywalker';
    component.search();

    expect(navigateSpy).toHaveBeenCalledWith(['/result', 'people', 'Luke Skywalker']);
  });

  //Nenhuma Navegação com Query Vazia
  it('should not navigate when query is empty', () => {
    const navigateSpy = spyOn(router, 'navigate');

    component.query = '';
    component.search();
    expect(navigateSpy).not.toHaveBeenCalled();

    component.query = '   ';
    component.search();
    expect(navigateSpy).not.toHaveBeenCalled();
  });

  //Trim da Query Antes da Navegação:
  it('should trim the query before navigating', () => {
    const navigateSpy = spyOn(router, 'navigate');

    component.query = 'Luke Skywalker';
    component.search();

    expect(navigateSpy).toHaveBeenCalledWith(['/result', 'people', 'Luke Skywalker']);
  });
});