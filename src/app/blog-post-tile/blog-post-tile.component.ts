import { Component, EventEmitter, Input } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';
import { CommonModule } from '@angular/common';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-blog-post-tile',
  standalone: true,
  imports: [TruncatePipe,CommonModule],
  templateUrl: './blog-post-tile.component.html',
  styleUrl: './blog-post-tile.component.scss',
  providers:[TruncatePipe]
})
export class BlogPostTileComponent {


  @Input() post:BlogPost = new BlogPost("","");
  @Input() numberOfPages: Number=0;

  private pageEvent= new EventEmitter<Number>();
  
  fullSummary:string="";
 

  constructor(private truncatePipe:TruncatePipe){

  }

  ngOnInit(){
    this.fullSummary=this.post.summary;
    this.post.summary=this.truncatePipe.transform(this.post.summary,15);
    this.post.isFav=false;
    
    
  }

  showFullText(){
    this.post.summary=this.fullSummary;

  }
  toggleFav(){
    this.post.isFav=!this.post.isFav;
  }


}
