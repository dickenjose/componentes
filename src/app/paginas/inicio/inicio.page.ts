import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes:Observable<Componente[]>;
  constructor(private DataService:DataService) { }

  ngOnInit() {
    this.componentes=this.DataService.getMenu()
    console.log(this.componentes)
  }

}
