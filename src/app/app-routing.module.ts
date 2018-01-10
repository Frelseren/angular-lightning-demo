import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from 'app/contacts/contacts.component';
import { ContactComponent } from 'app/contact/contact.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'contact/:contactId',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: '/contacts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
