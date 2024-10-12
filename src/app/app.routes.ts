import { Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    component: AppComponent,
    path: '',
    children: [
      {
        component: AccountComponent,
        title: 'AccountPage',
        path: 'account',
      },
      {
        component: HomeComponent,
        title: 'HomePage',
        path: '',
      },
    ],
  },
];
