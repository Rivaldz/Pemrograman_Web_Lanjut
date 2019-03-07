import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rivaldo',
  templateUrl: './rivaldo.component.html',
  // template: `<input [(ngModel)]="name" type="text"> 
  //  {{name}}`,
  styles:[]
})
export class RivaldoComponent implements OnInit {


  title = 'MUHAMMAD RIVALDO SETYO PURNOMO'
  title2= 'Menggunakan stringinterpolar(databinding)'
  
  public name="";
  public alamat="";
  
  onClick(){
    this.alamat='Coding tak perlu di hapal ker cukup di pahami okeyy';
  }
  constructor() { }

  ngOnInit() {
  }

}
