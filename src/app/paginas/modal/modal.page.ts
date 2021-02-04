import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalinfoPage } from '../modalinfo/modalinfo.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalinfoPage,
      cssClass: 'my-custom-class',
      componentProps:{
        nombre:"Jose",
        pais:"Bolivia"
      }
    });
    await modal.present();
    const {data}= await modal.onWillDismiss();
    console.log(data)
  }
}
