import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  public handleChangeStars: Subject<null> = new Subject();

  public barVisibal: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  changeStateBar(state: boolean):void{
    this.barVisibal.next(state);
  }
}
