import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as LCC from 'lightning-container';

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

  constructor(
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    sforce.connection.sessionId = LCC.getRESTAPISessionKey();

    try {
      this.contacts = JSON.parse(sforce.apex.execute('AngularPOC',
        'getContacts', {}));
      /**
       * Angular cannot detect changes made by lightning container by itself,
       * so we have to force the update manually.
       */
      this.cd.detectChanges();
    } catch (e) {
      console.error(e);
    }
  }

}
