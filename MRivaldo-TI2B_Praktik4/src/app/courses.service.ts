import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses(){
    return [
    {id: 1, name: 'Berlari', ket: 'lari 1 jam tiap hari'},
    {id: 2, name: 'Senam', ket:'senam tiap sore'},
    {id: 3, name: 'Bermain Musik', ket:'bermain musik tiap waktu'},
    
  ];
  }
}
