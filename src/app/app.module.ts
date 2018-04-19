import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ViewofbookcharhouseComponent } from './viewofbookcharhouse/viewofbookcharhouse.component';
import { DetailofanycardComponent } from './detailofanycard/detailofanycard.component';
import { RouterModule } from '@angular/router';
import { IceandfireHttpserviceService } from './iceandfire-httpservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewofbookcharhouseComponent,
    DetailofanycardComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:ViewofbookcharhouseComponent},
      {path:"", redirectTo:'home',pathMatch:"full"},
      {path:'books',component:DetailofanycardComponent},
      {path:'characters',component:DetailofanycardComponent},
      {path:'houses',component:DetailofanycardComponent},])
    ],
  providers: [IceandfireHttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
