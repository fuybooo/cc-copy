import {Component, DoCheck, Input, OnChanges} from "@angular/core";
@Component({
  selector: 'app-password-validator',
  templateUrl: './password-validator.component.html'
})
export class PasswordValidatorComponent {
  @Input() field: any;
  @Input() group: any;
}
