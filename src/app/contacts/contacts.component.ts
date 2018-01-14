import { Component, OnInit } from '@angular/core';
import { ApexService } from '../apex.service';

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
    private apex: ApexService
  ) {}

  ngOnInit() {
    this.apex.get().subscribe(
      contacts => this.contacts = contacts,
      error => console.log(error)
    );
  }

}
