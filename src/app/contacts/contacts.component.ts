import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare const sessionId;

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
    private http: HttpClient
  ) {}

  ngOnInit() {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + sessionId });

    this.http.get<Contact[]>('/services/apexrest/angularpoc', { headers })
      .subscribe(contacts => this.contacts = contacts);
  }

}
