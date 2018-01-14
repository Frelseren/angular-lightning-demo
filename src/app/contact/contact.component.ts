import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

declare const sforce;

interface Contact {
  Id: string;
  Name: string;
  Title: string;
  Phone: string;
  Email: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  route$: Observable<ParamMap>;
  contact: Contact;

  constructor(
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {
    this.route$ = route.paramMap;
  }

  ngOnInit() {
    this.route$.subscribe(map => {
      this.contact = JSON.parse(sforce.apex.execute('AngularPOC', 'getContact', {
        contactId: map.get('contactId')
      }));
      this.cd.detectChanges();
    });
  }

}
