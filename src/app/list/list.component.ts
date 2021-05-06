import { Component, OnInit } from "@angular/core";
import { ListService } from "./list.service";
import {take} from 'rxjs/operators';
import { FormControl } from "@angular/forms";

export interface ListInterface {
    incomplete_results: boolean;
    items: any[]; // should be typed
    total_count: number;
}

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
  })
  export class ListComponent implements OnInit {
      list: ListInterface;
      placeTitle: string = 'Bratislava';
      place = new FormControl('');

      constructor(private listService: ListService) {}

      ngOnInit() {
          this.getList(null, null);
      }

      getList(place, pagination) {
          return this.listService.getUsersByLocation(place, pagination).pipe(take(1)).subscribe(d => {
              this.list = d;
              this.placeTitle = this.place.value;
          });
      }
  }

