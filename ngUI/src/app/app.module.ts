import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { configFactory } from './config/config.factory';
import { ConfigService } from './config/config.service';
import { SkillsComponent } from './skills/skills/skills.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, SkillsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
