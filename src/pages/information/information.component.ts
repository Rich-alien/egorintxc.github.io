import {Component, HostBinding, OnInit} from '@angular/core';
import {RoutingAnimation} from "../../shared/animations/routing-animation";
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.less'],
  animations: [RoutingAnimation],
})
export class InformationComponent implements OnInit {
  @HostBinding('@routingAnimation') private routing: any;
  constructor(private titleService:Title) {
    this.titleService.setTitle("SavedWorld - Начать играть");
  }

  ngOnInit(): void {
  }

}
