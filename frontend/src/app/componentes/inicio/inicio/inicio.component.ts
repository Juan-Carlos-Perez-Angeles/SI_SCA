import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Automovil, AutomovilService } from 'src/app/services/automovil.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ListarAutomovil: Automovil[] = [];

  constructor(private automovilService: AutomovilService, private router: Router) { }

  ngOnInit(): void {
    
  }

  editar(i:number){

  }

  eliminar(i:number){

  }

}
