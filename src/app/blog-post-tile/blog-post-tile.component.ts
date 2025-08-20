import { Component, Input } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  standalone: true,
  imports: [TruncatePipe],
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
