import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './intefaces/components';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public botones :Observable<Componente[]>

  constructor(private dataSrv: DataService) { }

  ngOnInit() {
    this.botones = this.dataSrv.getMenuOpts()
  }
}
