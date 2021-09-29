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
  ]

  constructor() { }

  ngOnInit() {
  }

}
