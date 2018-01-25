import { Component, OnInit, Input } from '@angular/core';
import { FieldBase } from '../form-field-models/field-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {
  @Input() field: FieldBase<any>;
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  get isValid() {
    return this.form.controls[this.field.key].valid;
  }

}
