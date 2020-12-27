import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config/config.service';
import { Skill } from './skills.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  apiUrl = '';

  constructor(private cs: ConfigService, private httpClient: HttpClient) {
    this.cs.getValue('apiUrl').subscribe((url) => {
      this.apiUrl = url;
    });
  }

  getSkills(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(`${this.apiUrl}api/skills`);
  }
}
