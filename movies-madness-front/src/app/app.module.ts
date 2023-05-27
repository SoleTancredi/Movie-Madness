import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from './enviroments/enviroment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNgCommonModule } from './primeNG/primeng.module';
import { AppRoutingModule } from './app-routing.module';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PasswordModule,
    FormsModule,
//     PrimeNgCommonModule
  ],
  providers: [{ provide: 'ENV', useValue: environment }],
  bootstrap: [AppComponent],
})
export class AppModule {}
