import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {
  customoptions:any;
  constructor() { 
    this.customoptions= {
      buttons:[{
        text:'Guardar',
        handler:(event)=> {
          console.log( event)
        }
      },
      {
        text:'Cancelar',
        handler:()=> {
          console.log("clicke en cancelar")
        }
      }
        
      ]
    }
  }

  ngOnInit() {
  
  }
  cambiofecha(event){
    console.log(new Date(event.detail.value))
  }


}
