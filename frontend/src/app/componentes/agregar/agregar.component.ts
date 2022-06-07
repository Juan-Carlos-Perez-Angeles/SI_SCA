import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Automovil, AutomovilService } from 'src/app/services/automovil.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  @HostBinding('class') clasess = 'row';
  automovil: Automovil = {
    id_auto: '',
    marca: '',
    modelo: '',
    anno: '',
    motor: '',
    color: '',
    rine: '',
    img: '',
    precio: '',
    segmento: ''
  };

  constructor(private automovilService: AutomovilService, private router: Router) { }

  ngOnInit(): void {
  }

  agregarAutomovil() {
    delete this.automovil.id_auto;
    this.automovilService.postAutomovil(this.automovil).subscribe();
    this.router.navigate(['']);
  }
}
