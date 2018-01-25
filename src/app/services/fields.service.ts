import { Injectable } from "@angular/core";
import { FieldBase } from "../form-field-models/field-base";
import { DropdownField } from "../form-field-models/dropdown-field";
import { TextboxField } from "../form-field-models/textbox-field";
import { CheckboxField } from "../form-field-models/checkbox-field";

@Injectable()
export class FieldsService {
    getFields() {

        let fields: FieldBase<any>[] = [
    
          new DropdownField({
            key: 'brave',
            label: 'Bravery Rating',
            options: [
              {key: 'solid',  value: 'Solid'},
              {key: 'great',  value: 'Great'},
              {key: 'good',   value: 'Good'},
              {key: 'unproven', value: 'Unproven'}
            ],
            order: 3
          }),
    
          new TextboxField({
            key: 'firstName',
            label: 'First name',
            value: 'Bombasto',
            required: true,
            order: 1
          }),
    
          new TextboxField({
            key: 'emailAddress',
            label: 'Email',
            type: 'email',
            order: 2
          }),
          new CheckboxField({
            key: 'accept',
            value:false,
            label:'Accept terms and conditions?',
            order:4
          })
        ];
    
        return fields.sort((a, b) => a.order - b.order);
      }
}