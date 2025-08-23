import { Component } from '@angular/core';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogPost } from '../blog-post';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from '../paginator/paginator.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [BlogPostTileComponent, CommonModule, PaginatorComponent],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {

  posts: BlogPost[][] = [];
  numberOfPages : number=0;
  receivedPageNumber :number=0;
  

  ngOnInit() {
   

    this.posts =
      [

        [
          new BlogPost("Blog Title 1", "Summary 1 from page 1"),
          new BlogPost("Blog Title 1", "Summary 1 from page 1"),
          new BlogPost("Blog Title 1", "Summary 1 from page 1"),
          new BlogPost("Blog Title 1", "Summary 1 from page 1")

        ],
        [
          new BlogPost("Blog Title 1", "Summary 1 from page 2"),
          new BlogPost("Blog Title 1", "Summary 1 from page 2"),
          new BlogPost("Blog Title 1", "Summary 1 from page 2"),
          new BlogPost("Blog Title 1", "Summary 1 from page 2")

        ],
        [
          new BlogPost("Blog Title 1", "Summary 1 from page 3"),
          new BlogPost("Blog Title 1", "Summary 1 from page 3"),
          new BlogPost("Blog Title 1", "Summary 1 from page 3"),
          new BlogPost("Blog Title 1", "Summary 1 from page 3")

        ]
        ,
        [
          new BlogPost("Blog Title 1", "Summary 1 from page 4"),
          new BlogPost("Blog Title 1", "Summary 1 from page 4"),
          new BlogPost("Blog Title 1", "Summary 1 from page 4"),
          new BlogPost("Blog Title 1", "Summary 1 from page 4")

        ]

      ];


    }
    handlePageUpdateEvent(emittedPageNumber:number){

      console.log("Event caught from Parent and the value is : "+emittedPageNumber);
      this.receivedPageNumber=emittedPageNumber;

    }

}
