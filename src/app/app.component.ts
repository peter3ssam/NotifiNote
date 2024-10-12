import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AccountComponent,
    HomeComponent,
    RouterOutlet,
    HttpClientModule,
  ],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'NotifiNote';
}
