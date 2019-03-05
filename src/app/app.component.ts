import { Component, OnInit } from '@angular/core';

import { ApiService, Post } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Recruitment';
  dataIsAvailable: boolean;
  posts: Post[];

  // @Output('change') event_change = new EventEmitter();  
  

  constructor(private apiService: ApiService) {
    this.dataIsAvailable = false;
  }

  onpostClick(postId){
    console.log("Event raised: ",postId);
    // this.apiService.getComments(status);
  }

  ngOnInit() {
    this.apiService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.dataIsAvailable = true;
    });
  }
}
