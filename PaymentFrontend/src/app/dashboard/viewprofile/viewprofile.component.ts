import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {

  profile?: Customer
  constructor() { }

  ngOnInit(): void {

    

  }

}
