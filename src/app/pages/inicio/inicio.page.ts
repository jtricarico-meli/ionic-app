import { Component, OnInit } from '@angular/core';

interface Componente {
  icono:string
  nombre:string
  ruta:string
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  botones:Componente[] = [
    {
      icono: "alert-circle-outline",
      nombre:"Alert",
      ruta:"/alert",
    },
    {
      icono:"list-outline",
      nombre:"Action Sheet",
      ruta:"/action-sheet"
    },
    {
      icono:"accessibility-outline",
      nombre:"Avatar",
      ruta:"/avatar"
    },
    {
      icono:"id-card-outline",
      nombre:"Card",
      ruta:"/card"
    },
    {
      icono:"radio-button-on-outline",
      nombre:"Buttons",
      ruta:"/buttons"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
