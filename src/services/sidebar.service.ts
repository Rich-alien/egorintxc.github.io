import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  public handleChangeStars: Subject<null> = new Subject();
}
