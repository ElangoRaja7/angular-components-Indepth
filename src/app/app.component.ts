import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BlogListComponent } from './blog-list/blog-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BlogListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'component-indepth';
}
