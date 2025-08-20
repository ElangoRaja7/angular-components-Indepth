import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-post-tile',
  standalone: true,
  imports: [],
  templateUrl: './blog-post-tile.component.html',
  styleUrl: './blog-post-tile.component.scss'
})
export class BlogPostTileComponent {


  title:string="";
  summary:string="";

  constructor(){

  }

  ngOnInit(){
    this.title="Title";
    this.summary="Blog Post's summary"
  }
}
