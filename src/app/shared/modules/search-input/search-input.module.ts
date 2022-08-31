import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {SearchInputComponent} from './search-input.component';

@NgModule({
  declarations: [SearchInputComponent],
  imports: [MatInputModule, MatButtonModule, MatFormFieldModule, MatIconModule, FormsModule, MatInputModule, CommonModule],
  exports: [SearchInputComponent]
})
export class SearchInputModule { }
