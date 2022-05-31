import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Automovil, AutomovilService } from 'src/app/services/automovil.service';
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

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

  constructor(private automovilService: AutomovilService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.automovilService.getUnAutomovil(params['id']).subscribe(
        res => {
          const info = res;
          const obj = Object.assign({}, info);
          this.automovil = obj;
          console.log(this.automovil);
          console.log('ID objeto: ' + this.automovil.id_auto)
        },
        error => console.log(error)
      )
    }
  }

  modificarAutomovil() {
    const params = this.activatedRoute.snapshot.params;
    this.automovilService.updateAutomovil(params['id'], this.automovil).subscribe(
      res => {
        console.log('Objeto actualizado: ' + this.automovil)
        console.log('info actualizada' + res);
      },
      error => console.log(error)
    );
    this.router.navigate(['/inicio']);
  }

}
