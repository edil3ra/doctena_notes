import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  
})
export class FormComponent {
  @Input() show:boolean

  constructor() {
    
  }

  toggleShow(event: MouseEvent) {
    event.preventDefault()
    this.show = this.show ? false : true
  }
}
