import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  isUser = false;
  repositaries = [];
  userDetail: any; // should be typed
  constructor(
    private listService: ListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.route);
    console.log(this.route.snapshot.params.id);
    if (this.route.snapshot.params.id) {
      console.log('v ife');
      this.listService
        .getUserById(this.route.snapshot.params.id)
        .subscribe((userDetail) => {
          this.isUser = true;
          console.log(userDetail);
          this.userDetail = userDetail;
        });
    }
  }

  showRepos() {
    this.repositaries = [];
    this.listService
      .getUserRepos(this.userDetail.login)
      .pipe(take(1))
      .subscribe((repo) => {
          this.repositaries = repo
            console.log(this.repositaries)
        });
  }
}
