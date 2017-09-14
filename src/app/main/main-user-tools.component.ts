import {Component} from '@angular/core';

@Component({
  selector: 'app-main-user-tools',
  templateUrl: './main-user-tools.component.html'
})
export class MainUserToolsComponent {
  @Input() userName: string;
}
