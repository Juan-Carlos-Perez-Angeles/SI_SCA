import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AutomovilService {

  url = '/index/';

  constructor(private http: HttpClient) { }

  getAutomovil() {
    return this.http.get(this.url);
  }

  getUnAutomovil(id: string | undefined) {
    return this.http.get(this.url + '/' + id);
  }

  postAutomovil(automovil: Automovil) {
    return this.http.post(this.url, automovil);
  }

  deleteAutomovil(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  updateAutomovil(id: string | undefined, automovil: Automovil) {
    return this.http.put(this.url + '/' + id, automovil);
  }

}

export interface Automovil {
  id_auto?: string;
  marca?: string;
  modelo?: string;
  anno?: string;
  motor?: string;
  color?: string;
  rine?: string;
  img?: string;
  precio?: string;
  segmento?: string;
}

