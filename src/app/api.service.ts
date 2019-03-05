import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000';

const user = 'John';

export interface Post {
  id: number;
  title: string;
  author: string;
}
interface Comment{
  id: number;
  body: string;
  postId: number;

}

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getPosts() {
    console.log("Here");
    console.log(this.http.get<Post[]>(`${BASE_URL}/posts?author=${user}`));
    return this.http.get<Post[]>(`${BASE_URL}/posts?author=${user}`);
  }

  getComments(pId: string){
    // /api/comments?postId=x
    return this.http.get<Comment[]>(`${BASE_URL}/comments?postId=${pId}`);
  }
}
