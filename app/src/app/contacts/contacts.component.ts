import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts = [
    {id:1, name:'hahaha', phoneNumber:'1234'},
    {id:2, name:'huhuh', phoneNumber:'1234343'},
    {id:3, name:'hihihi', phoneNumber:'1234575'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
