import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-post-tile',
  standalone: true,
  imports: [],
  templateUrl: './blog-post-tile.component.html',
  styleUrl: './blog-post-tile.component.scss'
})
export class BlogPostTileComponent {


  @Input() title:string="";
  @Input() summary:string="";

  constructor(){

  }

  ngOnInit(){
    
  }
}
