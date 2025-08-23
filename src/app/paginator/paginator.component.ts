import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {

   @Output() updatePageEvent = new EventEmitter<number>();


  @Input() numberOfPages:number=0;
  numberOfPagesDummyArray:number[]=[];

  ngOnInit(){
     this.numberOfPagesDummyArray=Array.from({length:this.numberOfPages});
  }

    updatePageNumber(pageNumber :number){
    
      console.log("Event Emitter called :"+pageNumber);
      this.updatePageEvent.emit(pageNumber);
  }

}
