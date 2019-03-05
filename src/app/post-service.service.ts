import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
// import { post } from 'selenium-webdriver/http';
import { Post } from './post';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostServiceService {
  url: string;
  constructor(private http : Http) {
    
  }
  public getPosts() : Observable<Post[]>{
    this.url = "http://localhost:3000/posts";

    return this.http
      .get(this.url)
      .map(response =>{
        const posts = response.json();
        return posts.map((post) => new Post(post));
      })
      // .catch(this.handleError);
    // return ["Course1","Course2","Course3"]
  }
  

}
