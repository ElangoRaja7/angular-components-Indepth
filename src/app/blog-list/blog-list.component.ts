import { Component } from '@angular/core';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogPost } from '../blog-post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [BlogPostTileComponent,CommonModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {

  posts:BlogPost[]=[];

  ngOnInit(){

    this.posts.push(new BlogPost("Blog Title 1","Summary 1"));
    this.posts.push(new BlogPost("Blog Title 2","Summary 2  shglsfjg sfgsdfg slsdfgjlk sdfgkl sdfgjksl dfgkjsdlfgk sdlfgjsdlfkgjsdfkg"));
    this.posts.push(new BlogPost("Blog Title 3","Summary 3"));
    this.posts.push(new BlogPost("Blog Title 4","Summary 4"));
    this.posts.push(new BlogPost("Blog Title 5","Summary 5"));
  }

}
