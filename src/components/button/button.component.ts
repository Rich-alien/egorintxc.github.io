import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent {
  @Input()
  title: string = ''

  //green default color style
  @Input()
  colorStyle: 'green' = 'green'

}
