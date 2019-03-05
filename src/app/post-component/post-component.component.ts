import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { Observable } from 'rxjs/Observable';
import { Post } from '../post';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css'],
  providers:[ApiService]
})
export class PostComponentComponent implements OnInit {
  //comment=[];

  @Input('post') posts : Observable<Post[]>;

  @Input('comment') comment : Observable<Comment[]>; 

  @Input('postId') postId;

  @Output('change') change = new EventEmitter(); 
  
  constructor(post: ApiService) {
    this.posts = post.getPosts()
    
   }

   onClick(comment : ApiService){
    
    // this.postId.emit({value: this.isSelected}); //This is passing an object to custom change event
    this.change.emit(event);
    //this.comment = comment.getComments(this.postId);
  }
  
  ngOnInit() {
  }

}
