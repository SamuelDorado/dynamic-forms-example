import { Component, OnInit } from '@angular/core';
import { FieldsService } from '../services/fields.service';
import { FieldControlService } from '../services/field-control.service';
import { FieldBase } from '../form-field-models/field-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers:[FieldsService,FieldControlService]
})
export class FormsComponent implements OnInit {
  fields: FieldBase<any>[];
  form: FormGroup;
  payLoad: any = '';
  constructor(private fieldsService: FieldsService,
              private fcs: FieldControlService ) { }

  ngOnInit() {
    this.fields = this.fieldsService.getFields();
    this.form = this.fcs.getFormGroup(this.fields);
  }

  onSubmit(){
    this.payLoad = this.form.value;
  }
}
