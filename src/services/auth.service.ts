import {Injectable} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import UserCredential = firebase.auth.UserCredential;
import {UserService} from "./user.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth,
              private userService: UserService,
              private router: Router) {

  }

  signUp(username: string, email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(
        (success: UserCredential) => {
          return success?.user?.updateProfile({
            displayName: username,
          }).catch(err => {
            console.log(err);
          })
        },
        (error) => {
          console.log(error);
          //  TODO: check all error with this methods for
        }
      );
  }

  signIn(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((data: UserCredential) => {
        this.userService.setCurrentUser(data.user);
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
      });
  }

  signOut() {
    this.afAuth
      .signOut().then(() => {
      this.userService.cleaningCurrentUser();
      this.router.navigate(['/login']).then();
    })
      .catch(err => {
        console.log('Something is wrong:', err.message);
      });
  }
}
