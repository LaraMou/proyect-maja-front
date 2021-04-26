import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';


import { ExpertosRoutingModule } from './expertos-routing.module';
import { ExpertosPageComponent } from './expertos-page/expertos-page.component';

import { FormComponent } from './form/form.component';
@NgModule({
  declarations: [
    ExpertosPageComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    ExpertosRoutingModule,
    FormsModule,
    ReactiveFormsModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule


  ]
})
export class ExpertosModule { }
