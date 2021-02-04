import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PoverinfoComponent } from '../../componentes/poverinfo/poverinfo.component';

@Component({
  selector: 'app-pover',
  templateUrl: './pover.page.html',
  styleUrls: ['./pover.page.scss'],
})
export class PoverPage implements OnInit {

  constructor(private popoverController:PopoverController) { }

  ngOnInit() {
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PoverinfoComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();
    const {data}=await popover.onWillDismiss();
    console.log(data)
  }

}
