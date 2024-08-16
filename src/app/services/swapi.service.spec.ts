import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SwapiService } from './swapi.service';

describe('SwapiService', () => {
  let service: SwapiService;
  let httpTestingController: HttpTestingController;
  const baseUrl = 'https://swapi.dev/api';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SwapiService]
    });

    service = TestBed.inject(SwapiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica se há requisições pendentes
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //Testa se o método getItem faz uma requisição correta e retorna a resposta esperada.
  describe('getItem', () => {
    it('should get the correct item from the API', () => {
      const mockResponse = { name: 'Luke Skywalker' };
      const type = 'people';
      const id = '1';
      const url = `${baseUrl}/${type}/${id}/`;

      service.getItem(type, id).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse); // Fornece a resposta mockada
    });
  });

  //Testa se o método searchItems faz uma requisição correta com o parâmetro de busca e retorna a resposta esperada.
  describe('searchItems', () => {
    it('should find items based on search query', () => {
      const mockResponse = { results: [{ name: 'Luke Skywalker' }] };
      const type = 'people';
      const query = 'Luke';
      const url = `${baseUrl}/${type}/?search=${query}`;

      service.searchItems(type, query).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse); // Fornece a resposta mockada
    });
  });
});
