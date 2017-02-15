import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HeroesModule } from './hero-list/hero.module';
import { AppRoutingModule } from './app-routing.module';
import { HeroesService } from './hero-list/hero.service';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesModule,
    AppRoutingModule
  ],
  providers: [
  {provide: 'heroes', useClass:HeroesService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
