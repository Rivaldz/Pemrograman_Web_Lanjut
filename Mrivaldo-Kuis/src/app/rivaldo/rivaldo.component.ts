import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rivaldo',
  templateUrl: './rivaldo.component.html',
  styleUrls: ['./rivaldo.component.css']
})
export class RivaldoComponent implements OnInit {


  title = 'MUHAMMAD RIVALDO SETYO PURNOMO'
  title2= 'Menggunakan stringinterpolar(databinding)'
  alamat = 'Jalan imam bonjol no 23 pagar hitam'

  onSavee(){
    console.log('alamat jl senggani dusun bogo desa pelem');
  }



  constructor() { }


  ngOnInit() {
  }

}
