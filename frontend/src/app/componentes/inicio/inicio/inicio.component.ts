import { ConvertPropertyBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
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
    this.listarAutomovil();
  }

  listarAutomovil() {
    this.automovilService.getAutomovil().subscribe(
      res => {
        this.ListarAutomovil = <any>res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

  editar(i: any) {
    this.router.navigate(['index/'+i])
  }

  eliminar(index:number) {
    // @ts-ignore
    var id:string= this.ListarAutomovil[index].id_auto;
    this.automovilService.deleteAutomovil(id).subscribe(
      res => {
        console.log('Automovil Eliminado');
        this.listarAutomovil();
      },
      err => console.log(err)
    );
  }

}
