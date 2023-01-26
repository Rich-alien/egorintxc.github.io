import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";
import {User} from "../../modules/user";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit {

  constructor(private authService: AuthService, private user: UserService) {
  }

  public currentUser: User | any = null;

   ngOnInit() {
     this.currentUser = this.user.currentUser;
  }

  logout() {
    this.authService.signOut();
  }
}
