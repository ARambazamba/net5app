import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { Skill } from './skills.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  apiUrl = this.cs.getValue('apiUrl');

  constructor(private cs: ConfigService, private httpClient: HttpClient) {
    // latency
    // this.cs.getValue('apiUrl').subscribe((url) => {
    //   this.apiUrl = url;
    // });
  }

  getSkills(): Observable<Skill[]> {
    return this.apiUrl.pipe(
      tap((url) => console.log('url', url)),
      switchMap((url) => {
        return this.httpClient.get<Skill[]>(`${url}api/skills`);
      })
    );

    // latency
    // return this.httpClient.get<Skill[]>(`${this.apiUrl}api/skills`);
  }
}
