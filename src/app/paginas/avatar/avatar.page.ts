import { Component, OnInit } from '@angular/core';
interface avatar {
  icono:string;
  nombre:string;
}
@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {
  avatar:avatar[]=[
    {
      icono:"assets/img/homero.jpg",
      nombre:"Homero Simpson"
    },
    {
      icono:"assets/img/marge.jpg",
      nombre:"Marge Simpson"
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}
