import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-poverinfo',
  templateUrl: './poverinfo.component.html',
  styleUrls: ['./poverinfo.component.scss'],
})
export class PoverinfoComponent implements OnInit {
  items=Array(10);
  constructor(private PopoverController:PopoverController) { }

  ngOnInit() {}
  onClick(valor){
    console.log(valor)
    this.PopoverController.dismiss({
      valor: valor,
    });
  }

}
