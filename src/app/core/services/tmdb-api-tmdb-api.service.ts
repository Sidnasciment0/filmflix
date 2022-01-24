import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiTmdbApiService {

  baseUrl = 'https://api.themoviedb.org/3/';

  options = {
    api_key: '056a1796f26e51baf5dafed6f3a649ca',
    language: 'pt-BR'
  }

  constructor() { }
}
