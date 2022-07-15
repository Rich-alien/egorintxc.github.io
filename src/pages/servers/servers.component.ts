import {Component, HostBinding, OnInit} from '@angular/core';
import {RoutingAnimation} from "../../shared/animations/routing-animation";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.less'],
  animations: [RoutingAnimation],
})
export class ServersComponent implements OnInit {
  @HostBinding('@routingAnimation') private routing: any;
  constructor(private titleService:Title) {
    this.titleService.setTitle("SavedWorld - Сервера");
  }

  ngOnInit(): void {
  }

}
