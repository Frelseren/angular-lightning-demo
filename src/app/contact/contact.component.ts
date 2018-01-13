import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

interface Contact {
  Id: string;
  Name: string;
  Title: string;
  Phone: string;
  Email: string;
}

declare const sforce;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  route$: Observable<ParamMap>;
  contact: Contact;

  constructor(
    private route: ActivatedRoute
  ) {
    this.route$ = route.paramMap;
  }

  ngOnInit() {
    this.route$.subscribe(map => {
      try {
        this.contact = JSON.parse(sforce.apex.execute('AngularPOC', 'getContact', {
          contactId: map.get('contactId')
        }));
      } catch (e) {
        console.error(e);
      }
    });
  }

}
