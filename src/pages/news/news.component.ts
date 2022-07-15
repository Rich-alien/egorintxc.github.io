import {Component, HostBinding, OnInit} from '@angular/core';
import {RoutingAnimation} from "../../shared/animations/routing-animation";
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
  animations: [RoutingAnimation],
})
export class NewsComponent implements OnInit {
  @HostBinding('@routingAnimation') private routing: any;
  constructor() { }

  ngOnInit(): void {
  }

}
