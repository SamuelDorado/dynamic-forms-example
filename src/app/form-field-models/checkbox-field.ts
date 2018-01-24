import { FieldBase } from "./field-base";

export class CheckboxField extends FieldBase<boolean>{
    controlType = 'checkbox'
    constructor(options:{} = {}) {
        super(options);
        this.value = typeof this.value === "boolean" ? this.value : false
    }
}
