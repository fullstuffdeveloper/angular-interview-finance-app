import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { SpendViewTableComponent } from './spend-view-table.component';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'  
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
    imports: [MatTableModule,MatIconModule, MatButtonToggleModule, ReactiveFormsModule, FormsModule, CommonModule, BrowserModule, MatToolbarModule],
    exports: [SpendViewTableComponent],
    declarations: [SpendViewTableComponent]
})
export class SpendViewModule {
    static rootComponent = SpendViewTableComponent;
 }
