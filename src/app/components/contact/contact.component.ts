import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact : Contact;
  strResult: string;
  // name = "Tanakorn"
  // email = "boonsukurtt@gmail.com"
  // msg = "This is my message."
  // phone = "0924871742";
  constructor() { }

  ngOnInit(): void {
    this.contact = new Contact()
  }
  readData(){
    console.log(this.contact.name);
    console.log(this.contact.email);
    console.log(this.contact.msg);
    console.log(this.contact.call);
  }

  onSubmit(f:NgForm){
    this.strResult = JSON.stringify(this.contact);
    window.alert(this.strResult);
    console.log(this.contact);
  }
}

