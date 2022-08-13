import {Injectable} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {User} from "../modules/user";
import firebase from "firebase/compat";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public currentUser: User | null = null;

  constructor(private afAuth: AngularFireAuth) {
  }

  setCurrentUser(data: firebase.User | null) {
    if (data === null) {
      this.currentUser = null;
    }
    this.currentUser = {
      displayName: data?.displayName || 'багаюзер',
      email: data?.email || '',
      emailVerified: data?.emailVerified || false,
      isAnonymous: data?.isAnonymous || false,
      phoneNumber: data?.phoneNumber || null,
      photoURL: data?.photoURL || null,
    };
  }

  cleaningCurrentUser() {
    this.currentUser = null;
  }

  checkUser() {
    this.afAuth.onAuthStateChanged((state) => {
      if (!state) {
        return;
      }
      this.setCurrentUser(state);
    }).then();
  }
}
