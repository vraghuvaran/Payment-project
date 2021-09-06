import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  transferForm: FormGroup
  constructor() {
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
        ])
      })
  }

  ngOnInit(): void {


  }

  handleTransaction(){

  }



}
