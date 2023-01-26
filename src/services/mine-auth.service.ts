import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, map, of} from "rxjs";
@Injectable({
  providedIn: 'root',
})
export class MineAuthService {
  constructor(private readonly router: Router,
              private readonly http: HttpClient) {

  }

  signUp(username: string, email: string, password: string) {

  }

  signIn() {
    this.http.post(environment.mineShitApi+'/api/authorizeUrl/',
      {login:'11212',password:'fucku'}).pipe(
      map((d)=>{
        console.log(d);
      }),
      catchError((err)=>{
        console.log(err);
        return of([]);
      }),
    ) .subscribe()
  }

  signOut() {

  }
}
