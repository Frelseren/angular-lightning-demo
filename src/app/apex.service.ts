import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

declare const sessionId;

interface Contact {
  Id: string;
  Name: string;
  Title: string;
  Phone: string;
  Email: string;
}

@Injectable()
export class ApexService {
  headers = new HttpHeaders({ 'Authorization': 'Bearer ' + sessionId });

  constructor(
    private http: HttpClient
  ) { }

  get(contactId?: string): Observable<Contact[]> {
    const params = new HttpParams().set('contactId', contactId);

    return this.http.get<Contact[]>('/services/apexrest/angularpoc', {
      headers: this.headers,
      params: contactId ? params : null
    });
  }

}
