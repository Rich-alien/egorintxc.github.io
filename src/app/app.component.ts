import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'planet';

  constructor(private user: UserService) {
  }

  ngOnInit() {
    this.user.checkUser();
  }
}
