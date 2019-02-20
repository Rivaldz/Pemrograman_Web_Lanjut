import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  nama = 'M Rivaldo S';
  alamat = 'dusun Bogo';
  tanggal = new Date(2019, 1, 10);

  Courses;
  constructor(private service:CoursesService){
    this.Courses=service.getCourses();
  }
  // Courses = [
    
  //   {id: 1, name: 'Berlari', ket: 'lari 1 jam tiap hari'},
  //   {id: 2, name: 'Senam', ket:'senam tiap sore'},
  //   {id: 3, name: 'Bermain Musik', ket:'bermain musik tiap waktu'},
    
  // ];

  //constructor() { }

  ngOnInit() {
  }
  getNama(){
    return this.nama;
  }
  getAlamat(){
    return this.alamat;
  }

}
