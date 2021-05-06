import { Component } from "@angular/core";
import { switchMap } from "rxjs/operators";
import { AuthGitService } from "../auth/auth.service";
import { ListService } from "../list/list.service";

@Component({
    selector: 'app-profil',
    templateUrl: './profil.component.html',
    styleUrls: ['./profil.component.scss'],
  })
  export class ProfilComponent {
      userDetail: any;
      constructor(private auth: AuthGitService, private listService: ListService) {}

      ngOnInit() {
          this.auth.getUser().pipe(switchMap((user) => {
              const userId = user.sub.substring(user.sub.indexOf('|') + 1); // get id of logged in User
             return this.listService.getUserById(userId)
          })).subscribe(d => this.userDetail = d);
      }
  }