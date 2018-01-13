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
    try {
      this.contacts = JSON.parse(sforce.apex.execute('AngularPOC', 'getContacts', { }));
    } catch (e) {
      console.error(e);
    }
  }

}
