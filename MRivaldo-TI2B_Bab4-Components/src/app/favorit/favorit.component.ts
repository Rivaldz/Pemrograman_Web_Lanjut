import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorit',
  templateUrl: './favorit.component.html',
  styleUrls: ['./favorit.component.css']
})
export class FavoritComponent implements OnInit {
  @Input() isFavorit: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavorit=!this.isFavorit;
  }

}
