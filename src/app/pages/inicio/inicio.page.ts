import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/intefaces/components';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public botones :Observable<Componente[]>

  constructor(private dataSrv: DataService) { }

  ngOnInit() {
    this.botones = this.dataSrv.getMenuOpts()
  }

}
