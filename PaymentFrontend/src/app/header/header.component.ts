import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  itemslist: any = [
    {
      name: 'Login',
      link: 'login'
    },
    {
      name: 'Transfer',
      link: 'transfer'
    }
  ]
  constructor() { 
   }

  ngOnInit(): void {
  }

}
