import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as LCC from 'lightning-container';

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

  private onMessage(contacts: Contact[]) {
    this.contacts = contacts;
    /**
     * Angular cannot detect changes made by lightning container by itself,
     * so we have to force the update manually.
     */
    this.cd.detectChanges();
  }

  ngOnInit() {
    /**
     * When lightning container emits a message event it refers to the wrong
     * scope, so we have to manually bind `this` to the callback function.
     */
    LCC.addMessageHandler(this.onMessage.bind(this));
    LCC.sendMessage('getContacts');
  }

}
