import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from './enviroments/enviroment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNgModule } from './primeNG/primeng.module';

@NgModule({
  declarations: [AppComponent],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PrimeNgModule
  ],
  providers: [{ provide: 'ENV', useValue: environment }],
  bootstrap: [AppComponent],
})
export class AppModule {}
