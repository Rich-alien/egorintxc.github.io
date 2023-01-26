import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {SidebarService} from "../../../services/sidebar.service";
import {MineAuthService} from "../../../services/mine-auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private readonly authService: AuthService,
              private readonly userService: UserService,
              private readonly sideBarService: SidebarService,
              private readonly mine: MineAuthService) {
  }

  ngOnInit(): void {
    this.sideBarService.changeStateBar(true)
  }

  public clickMine() {
    this.mine.signIn();
  }

  public form: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required])
    },
  )
  public formAuth: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    },
  )

  onSubmit() {
    if (!this.form.valid) {
      return this.form.markAllAsTouched();
    }
    const {username, email, password} = this.form.value;
    this.authService.signUp(username, email, password)
  }

  signIn() {
    if (!this.formAuth.valid) {
      return this.formAuth.markAllAsTouched();
    }
    const {email, password} = this.formAuth.value;
    this.authService.signIn(email, password)
  }

  logout() {

  }

  ngOnDestroy(): void {
    this.sideBarService.changeStateBar(true);
  }
}
