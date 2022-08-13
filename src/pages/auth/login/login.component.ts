import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private userService: UserService) {
  }

  ngOnInit(): void {}

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
}
