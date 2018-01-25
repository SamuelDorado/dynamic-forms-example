import { FieldBase } from "./field-base";

export class TextboxField extends FieldBase<string>{
    controlType = 'textbox'
    type:string;
    constructor(fieldConfig: {} = {}){
        super(fieldConfig);
        this.type = fieldConfig['type'] || 'text';
    }
}