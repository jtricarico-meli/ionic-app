import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../intefaces/components';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getMenuOpts(){
    return this.httpClient.get<Componente[]>('../assets/data/opciones.menu.json')
  }
}
