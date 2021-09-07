import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {url} from '../constants'

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransferFee(){
    return this.http.get<Number>('http://127.0.0.1:8080/transaction/transfercharges')
  }

  makeTransaction(data: any){

    return this.http.post(url+'transaction',data)
  }

  checkEligibility(sendercustomerid: string, receivercustomerid: string){
    let params = new HttpParams();
    params = params.append('sendercustomerid',sendercustomerid)
    params = params.append('receivercustomerid',receivercustomerid)
    return this.http.get(url+'transaction/eligibilitycheck',{params: params})
  }
}
