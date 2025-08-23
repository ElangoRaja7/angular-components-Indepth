import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogPostDataService {

  constructor() { }

  getData():BlogPost[][]{
    return  [

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
}
