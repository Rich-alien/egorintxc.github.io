import {Component, HostBinding} from '@angular/core';
import {SidebarService} from "../../services/sidebar.service";
import {RoutingAnimation} from "../../shared/animations/routing-animation";
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  animations: [RoutingAnimation],
})
export class MainComponent{
  @HostBinding('@routingAnimation') private routing: any;
  constructor(private sideBarService: SidebarService,
              private titleService:Title) {
    this.titleService.setTitle("SavedWorld - Ванильный сервер майнкрафт");
  }
  changeStars() {
    this.sideBarService.handleChangeStars.next(null);
  }
}
