import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LookupRoutingModule } from './lookup-routing.module';
import { GenericFormComponent } from './generic-form/generic-form.component';


@NgModule({
  declarations: [
    GenericFormComponent
  ],
  imports: [
    CommonModule,
    LookupRoutingModule
  ]
})
export class LookupModule { }
