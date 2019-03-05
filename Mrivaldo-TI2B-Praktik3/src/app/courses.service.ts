import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses(){
    return [
      {id : 0, name : 'HTML'},
      {id : 2, name : 'PHP'},
      {id : 3, name : 'java'},
      {id : 4, name : 'perl'},
      {id : 5, name : 'piton'},
    ];
  }

}
