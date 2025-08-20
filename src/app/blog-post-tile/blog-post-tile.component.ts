import { Component, Input } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-post-tile',
  standalone: true,
  imports: [],
  templateUrl: './blog-post-tile.component.html',
  styleUrl: './blog-post-tile.component.scss'
})
export class BlogPostTileComponent {


  @Input() post:BlogPost = new BlogPost("","");
 

  constructor(){

  }

  ngOnInit(){
    
  }
}
