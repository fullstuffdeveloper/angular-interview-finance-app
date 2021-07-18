import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@Component({
    selector: 'app-base-form',
    templateUrl: 'form-base.component.html',
    styleUrls: ['form-base.component.scss']
})

export class FormBaseComponent implements OnInit {
    baseForm: FormGroup;

    validationContainer = {
        name: '^[A-Za-z \'.-]+$',
        email: '^$|^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$',
        mobile: '^[0-9]+$',
        zip: '^[0-9]{5}(?:-[0-9]{4})?$',
        city: '^[a-zA-Z \\-\'.]+$',
        state: '^[a-zA-Z \\-\'.]+$',
        addressLine1: '^[a-zA-Z0-9 \\.\\-,]+$',
        addressLine2: '^[a-zA-Z0-9 \\.\\-,]+$'
      };
    constructor(private fb: FormBuilder) { 
    }


    ngOnInit() {
        this.baseForm = this.fb.group({
            name: ['', Validators.compose([Validators.required, Validators.pattern(this.validationContainer.name)])],
        });

        this.baseForm.valueChanges.subscribe((formData) => {
            console.log('formData', formData);
        })
     }
     onSubmit() {

     }
     getErrorMessage() {
         
     }
}