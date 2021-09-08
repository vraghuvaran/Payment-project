import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageserviceService } from '../services/messageservice.service';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  transferForm: FormGroup
  allMessages: Message[]=[]
  dropdown: any
  transferfees: number = 0
  message?: Message
  transfertypecode: any
  eligible: boolean = false
  constructor(private messageservice: MessageserviceService,
    private transactionservice: TransactionService, 
    ) {
    
    this.dropdown = {
      ControlName: 'message',
      labelName: 'Message Code',
      defaultLabel: '',
      messages: [Message],
      selectedValue: ''
    }

      this.transferForm = new FormGroup({
        receiveraccounholdernumber: new FormControl('',[
          Validators.required,
          Validators.min(0)
        ]),
        receiverbic: new FormControl('',[
          Validators.required,
          Validators.pattern(/^[ A-Z0-9]*$/)
        ]),
        currencyamount: new FormControl('',[
          Validators.required,
          Validators.min(0)
        ])
         

      })
  }

  ngOnInit(): void {

    this.transactionservice.getTransferFee().subscribe((data)=>{

        this.transferfees = +data;       

    },(error)=>{

    })
    

    this.messageservice.getAllMessages().subscribe((data)=>{

      this.allMessages = data;
      this.dropdown.messages = data;

    },(error)=>{

       

    })

  }

  get rcustomerid(){
     return this.transferForm.controls['receiveraccounholdernumber']
  }

  get rbic(){
     return this.transferForm.controls['receiverbic']
  }

  get currencyamount(){
     return this.transferForm.controls['currencyamount']
  }

  handleTransaction(){

    let customerid: string ='';
   
    this.transactionservice.checkEligibility(customerid,this.transferForm.controls['receiveraccounholdernumber'].value)
    .subscribe((data)=>{

      this.eligible = true;

    },(error)=>{

      this.eligible  = false;

    })


    let transferdata ={
      customer: {
        customerid: ''
      },
      senderbic: {
        bic: ''
      },
      receiveraccounholdernumber: {
        customerid: this.transferForm.controls['receiveraccounholdernumber'].value
      },
      receiverbic: {
        bic: ''
      },
      transfertypecode: {
        transfertypecode: ''
      },
      message: {
        messagecode: ''
      },
      currencyamount: this.transferForm.controls['currencyamount'].value
      
    }

    if(this.eligible){
      this.transactionservice.makeTransaction(transferdata).subscribe((data)=>{

        alert('Transaction successfull');
  
  
      },(error)=>{
  
  
  
      })
    }


  }


  handleChange(event: any){
      this.message = event
  }



}
