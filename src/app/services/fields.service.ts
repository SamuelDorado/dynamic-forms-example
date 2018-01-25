import { Injectable } from "@angular/core";

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
          })
        ];
    
        return fields.sort((a, b) => a.order - b.order);
      }
}