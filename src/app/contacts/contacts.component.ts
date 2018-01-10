import { Component, OnInit } from '@angular/core';

declare const Visualforce;

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
    Visualforce.remoting.Manager.invokeAction(
      'AngularPOC.getContacts',
      (result: Contact[], event) => {
        if (event.status) {
          this.contacts = result;
        } else {
          console.error(event.message);
        }
      },
      { escape: false }
    );
  }

}
