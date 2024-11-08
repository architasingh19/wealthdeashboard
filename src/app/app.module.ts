import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { MainContentComponent } from './Components/main-content/main-content.component';
import { WealthCalendarComponent } from './Components/wealth-calendar/wealth-calendar.component';
import { HeaderComponent } from './Components/header/header.component';
import { WealthContainerComponent } from './Components/wealth-container/wealth-container.component';
import { FooterComponent } from './Components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainContentComponent,
    WealthCalendarComponent,
    HeaderComponent,
    WealthContainerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
