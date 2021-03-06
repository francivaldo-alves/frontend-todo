import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from './components/footer/footer.component';
import { ReadAllComponent } from './components/read-all/read-all.component';
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import { HttpClientModule } from "@angular/common/http";
import {MatBadgeModule} from '@angular/material/badge'; 

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, ReadAllComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
