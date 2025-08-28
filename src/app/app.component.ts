import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

import { BlogListComponent } from './blog-list/blog-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BlogListComponent,ShellComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'component-indepth';
}
