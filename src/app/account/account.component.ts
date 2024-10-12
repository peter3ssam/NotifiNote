import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AccountService } from '../Services/account.service';
import { SignIn } from '../Models/SignIn.model';
import { Register } from '../Models/Register.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent implements OnInit {
  isRegister: boolean = true;
  changePanelStatues() {
    this.isRegister = !this.isRegister;
    if (this.div.nativeElement.classList.contains('animate')) {
      this.div.nativeElement.classList.toggle('animate2');
    } else {
      this.div.nativeElement.classList.toggle('animate');
    }
  }
  @ViewChild('div') div: any;
  router: Router = inject(Router);
  constructor(private accountServ: AccountService) {}
  ngOnInit(): void {
    if (localStorage.getItem('JWTKEY')) {
      this.router.navigate(['/']);
    }
  }
  submit(data: SignIn | Register | any) {
    if (this.isRegister) {
      this.accountServ.Register(data);
      return;
    }
    this.accountServ.signIn(data);
  }
}
