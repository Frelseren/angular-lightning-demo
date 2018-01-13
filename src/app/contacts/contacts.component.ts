import { Component, OnInit } from '@angular/core';

declare const sforce;

interface Contact {
  Id: string;
  Name: string;
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];

  ngOnInit() {
    this.contacts = sforce.apex.execute('AngularPOC', 'getContacts', { });
  }

}
