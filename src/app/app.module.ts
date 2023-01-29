import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { TabComponent } from './products/tab/tab.component';
import { PcComponent } from './products/pc/pc.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    LaptopComponent,
    TabComponent,
    PcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
