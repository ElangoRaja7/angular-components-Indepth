import { Component, Input } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  standalone: true,
  imports: [TruncatePipe],
  templateUrl: './blog-post-tile.component.html',
  styleUrl: './blog-post-tile.component.scss',
  providers:[TruncatePipe]
})
export class BlogPostTileComponent {


  @Input() post:BlogPost = new BlogPost("","");
  
  fullSummary:string="";
 

  constructor(private truncatePipe:TruncatePipe){

  }

  ngOnInit(){
    this.fullSummary=this.post.summary;
    this.post.summary=this.truncatePipe.transform(this.post.summary,15);
    
    
  }

  showFullText(){
    this.post.summary=this.fullSummary;

  }
}
