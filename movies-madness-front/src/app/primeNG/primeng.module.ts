import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormControl } from '@angular/forms';

@NgModule({
  imports: [
    ButtonModule,
    TagModule,
    InputTextModule,
    PasswordModule,
    FormControl,
  ],
  exports: [
    ButtonModule,
    TagModule,
    InputTextModule,
    PasswordModule,
    FormControl,
  ],
})
class PrimeNgCommonModule {}
export {  PrimeNgCommonModule };
