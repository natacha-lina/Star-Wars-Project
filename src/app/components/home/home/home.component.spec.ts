import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Criação do componente
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Verifica o conteúdo do HTML
  it('should display the correct heading', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('h1');
    
    expect(heading).toBeTruthy(); // Verifica se o <h1> existe
    expect(heading?.textContent).toContain('Welcome to the Star Wars Universe')
  });
})