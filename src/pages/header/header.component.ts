import {Component, HostBinding, OnInit} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],

})
export class HeaderComponent implements OnInit {

  isTextVisible: boolean = true;
  widthProgressBar: number = 0;
  maxWidthProgressBar = 380;
  constructor() {
  }
  getWidthProgressBar():string{
    return this.widthProgressBar+'px'
  }
  ngOnInit(): void {
  }

  copeMessage() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = 'sw-play.ml';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    setTimeout(() => {
      this.isTextVisible = false;

    }, 200);
    let timer = setInterval(() => {
      this.widthProgressBar++;
      if (this.widthProgressBar === this.maxWidthProgressBar) {
        clearInterval(timer);
        this.widthProgressBar = 0;
      }
    }, 13);
    setTimeout(() => {
      this.isTextVisible = true;
    }, 5000)
  }
}
