import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
	imports: [ButtonModule, TagModule, InputTextModule],
	exports: [ButtonModule,TagModule, InputTextModule],
	declarations: [],
	providers: [],
})
export class PrimeNgModule { }
