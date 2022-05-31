import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutomovilService {

  constructor() { }
}

//getAutomoviles(){

//}

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