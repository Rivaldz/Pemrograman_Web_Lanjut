import {ValidationErrors, AbstractControl} from '@angular/forms';

export class ValidatorUsername{
    static cannotContainSpace (control: AbstractControl): ValidationErrors | null{
        if((control.value as string).indexOf(' ')>=0)
            return {cannotContainSpace: true};
        return null;
    }
}