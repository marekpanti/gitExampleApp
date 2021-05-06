import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ListService {
  constructor(private http: HttpClient) {}

  getUsersByLocation(place: string, page: number): Observable<any> {
    return this.http.get('https://api.github.com/search/users?q=location:' + (place || 'bratislava') + '&page=' + (page || 0));
  }

  getUserById(id: string): Observable<any> {
    return this.http.get('https://api.github.com/user/' + id);
  }

  getUserRepos(name: string): Observable<any> {
      return this.http.get('https://api.github.com/users/' + name + '/repos')
  }
}