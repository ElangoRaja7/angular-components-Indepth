import { ChangeDetectionStrategy, Component, QueryList, ViewChild, viewChild, ViewChildren } from '@angular/core';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogPost } from '../blog-post';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from '../paginator/paginator.component';
import { BlogPostDataService } from '../blog-post-data.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [BlogPostTileComponent, CommonModule, PaginatorComponent],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
  providers: [BlogPostDataService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BlogListComponent {

  posts: BlogPost[][] = [];
  numberOfPages: number = 0;
  receivedPageNumber: number = 0;
  @ViewChildren('tile') blogPostTile: QueryList<BlogPostTileComponent> | undefined;
  constructor(private blogData: BlogPostDataService) {

  }

  ngOnInit() {


    this.posts = this.blogData.getData();


  }
  handlePageUpdateEvent(emittedPageNumber: number) {

    console.log("Event caught from Parent and the value is : " + emittedPageNumber);
    this.receivedPageNumber = emittedPageNumber;

  }
  ExpandChild() {
    //this.blogPostTile!.showFullText();

    this.blogPostTile?.forEach(e => e.showFullText());
  }
  favAll(){
    console.log("FavAll is called")
    //this.blogPostTile?.forEach(e=>e.isFav=true);
    this.posts[this.receivedPageNumber].
    map(e=>{
      new BlogPost(e.title,e.summary);
      e.isFav=true;
    })
  }

}
