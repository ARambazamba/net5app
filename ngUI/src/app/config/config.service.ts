import { Injectable } from '@angular/core';
import { AppConfig } from './app.config.model';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private cs = new ReplaySubject<AppConfig>(1);

  constructor(private httpClient: HttpClient) {}

  loadConfig(): void {
    this.httpClient
      .get<AppConfig>('./assets/config.json')
      .subscribe((config: AppConfig) => {
        this.cs.next(config);
      });
  }

  getValue(key: string, defaultValue?: any): Observable<any> {
    return this.cs.pipe(
      map((configuration: any) => configuration[key] || defaultValue)
    );
  }
}
