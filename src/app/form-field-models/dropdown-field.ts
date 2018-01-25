import { FieldBase } from "./field-base";

export class DropdownField extends FieldBase<string>{
    controlType = 'dropdown';
    options:{value:string,description:string}[];

    constructor(fieldConfig:{} = {}){
        super(fieldConfig);
        this.options = fieldConfig['options'] || [];
    }
}