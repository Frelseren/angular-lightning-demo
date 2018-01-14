import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ApexService } from 'app/apex.service';

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
    private apex: ApexService
  ) {
    this.route$ = route.paramMap;
  }

  ngOnInit() {
    this.route$.subscribe(map => {
      this.apex.get(map.get('contactId')).subscribe(
        contacts => this.contact = contacts[0],
        error => console.log(error)
      );
    });
  }

}
