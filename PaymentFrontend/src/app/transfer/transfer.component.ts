import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageserviceService } from '../services/messageservice.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  transferForm: FormGroup
  allMessages: any

  constructor(private messageservice: MessageserviceService) {

      this.transferForm = new FormGroup({
        receiveraccounholdernumber: new FormControl('',[
          Validators.required,
          Validators.min(0)
        ]),
        receiverbic: new FormControl('',[
          Validators.required,
          Validators.pattern(/^[ A-Za-z0-9]*$/)
        ]),
        currencyamount: new FormControl('',[
          Validators.required,
          Validators.min(0)
        ]),
        transferfees: new FormControl('',[
          Validators.required,
          Validators.min(0)
        ]),

      })
  }

  ngOnInit(): void {

    this.messageservice.getAllMessages().subscribe((data)=>{

      this.allMessages = data;
    },(error)=>{

    })

  }

  handleTransaction(){

  }



}
