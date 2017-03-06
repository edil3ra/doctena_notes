import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-search',
  templateUrl: './search.component.html' ,
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() show:boolean

  constructor() {
    
  }

  toggleShow(event: MouseEvent) {
    event.preventDefault()
    this.show = this.show ? false : true
  }
  
}
