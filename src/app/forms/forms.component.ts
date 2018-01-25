import { Component, OnInit } from '@angular/core';
import { FieldsService } from '../services/fields.service';
import { FieldControlService } from '../services/field-control.service';
import { FieldBase } from '../form-field-models/field-base';
import { FormGroup } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers:[FieldsService,FieldControlService],
  animations:[trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(300)
      ])
    ])]
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
