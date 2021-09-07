import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {url } from '../constants'

@Injectable({
  providedIn: 'root'
})
export class MessageserviceService {

  constructor(private http: HttpClient) { }

  getAllMessages() {

   return this.http.get(url+'/message')

  }
}
