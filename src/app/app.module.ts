import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './mycomponents/navbar/navbar.component';
import { HeroComponent } from './mycomponents/hero/hero.component';
import { TrackerHeaderComponent } from './mycomponents/tracker-header/tracker-header.component';
import { TrackerButtonComponent } from './tracker-button/tracker-button.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HeroComponent, TrackerHeaderComponent, TrackerButtonComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
