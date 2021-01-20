import { Component, OnInit } from '@angular/core';
interface Componente{
  icono:string;
  nombre:string;
  direccion:string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componente:Componente[]=[
    {
      icono: 'person-outline',
      nombre:'Action Sheet',
      direccion:'/action-sheet',
    },
    {
      icono: 'pricetag-outline',
      nombre:'Alert',
      direccion:'/alert',
    },
    {
      icono: 'planet-outline',
      nombre:'Fab',
      direccion:'/fab',
    },
    {
      icono: 'rocket-outline',
      nombre:'Date Time',
      direccion:'/datetime',
    },
    {
      icono: 'albums-outline',
      nombre:'Botones',
      direccion:'/buttons',
    },
   
  ]
  constructor() { }

  ngOnInit() {
  }

}
