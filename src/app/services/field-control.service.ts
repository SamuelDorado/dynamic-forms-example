import { Injectable } from "@angular/core";
import { FieldBase } from "../form-field-models/field-base";
import { FormControl, Validators , FormGroup} from "@angular/forms";

@Injectable()
export class FieldControlService {
    getFormGroup(fields: FieldBase<any>[]){
        let group: any  = {};
        fields.forEach((field: FieldBase<any>)=>{
            group[field.key] = field.required ? new FormControl(field.value||'',Validators.required )
                                                : new FormControl(field.value || '');
        });
        return new FormGroup(group);
    }
}