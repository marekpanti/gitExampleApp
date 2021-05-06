import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../shared/user.interface';
import { AuthGitService } from './auth.service';

@Component({
  selector: 'app-auth-line',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  user: UserInterface;
  isSignedIn = false;  
  constructor(public auth: AuthGitService) {}

  ngOnInit() {
    this.auth.getUser().subscribe(data => {
        this.user = data;
        this.isSignedIn = !!data;
    })
  }
}
