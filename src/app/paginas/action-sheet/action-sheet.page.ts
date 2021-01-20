import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
 
  constructor(private actionSheet:ActionSheetController, private route:Router) { }

  ngOnInit() {
  }
  onClick(){
    this.presentActionSheet();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheet.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        cssClass:'rojo',
        handler: () => {
          console.log('Click en eliminar');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Inicio',
        icon: 'home',
        handler: () => {
          this.route.navigate(['/inicio']);
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
