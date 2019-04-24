import { Component} from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{
  posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';

   constructor(private http: Http) { 
    http.get(this.url)
    .subscribe(response => {
      this.posts = response.json();
    });
  }

  createPost(input : HTMLInputElement){
    let post:any = {title:input.value};
    input.value = '';

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0,0, post);
      }); 

  }
  updatePost(post){
    this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
    .subscribe(Response=>{
      console.log(Response.json());
    })
  }
  deletePost(post){
    this.http.delete(this.url + '/' + post.id)
    .subscribe(Response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    })
  }
}
