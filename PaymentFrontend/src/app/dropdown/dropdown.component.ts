import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from '../models/message';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input()
  schema:any
 
  @Output()
  handlechanges: EventEmitter<any>
  constructor() {
    this.schema = {
      ControlName: '',
      labelName: '',
      defaultLabel: '',
      messages: [{messagecode: '', instruction:''}],
      selectedValue: ''
    }

    this.handlechanges = new EventEmitter<Message>();
    
   }


  ngOnInit(): void {

  }

  handleDropdownchange(index: any) {

       this.handlechanges.emit(this.schema.messages[index])
       console.log(1)
  }

}
