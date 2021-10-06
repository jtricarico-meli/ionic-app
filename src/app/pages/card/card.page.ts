import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  @Input() icon = "eye-on-sharp"
  flagView = true

  botonEye:any = {
    name:"eye-sharp"
  }

  botonEyeOff:any = {
    name:"eye-off-sharp"
  }

  constructor() { }

  ngOnInit() {
  }

  changeView(){
    this.flagView = !this.flagView
    if(this.flagView){
      this.icon=this.botonEye.name
    }else{
      this.icon=this.botonEyeOff.name
    }
  }

}
