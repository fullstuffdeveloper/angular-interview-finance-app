import { NgModule } from '@angular/core';

import { FormBaseComponent } from './form-base.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule } from '@angular/material/form-field'

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule],
    exports: [FormBaseComponent],
    declarations: [FormBaseComponent],
})
export class FormBaseModule {
    static rootComponent = FormBaseComponent;
 }
