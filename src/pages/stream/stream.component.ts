import {Component, HostBinding, OnInit} from '@angular/core';
import {RoutingAnimation} from "../../shared/animations/routing-animation";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.less'],
  animations: [RoutingAnimation],
})
export class StreamComponent implements OnInit {
  @HostBinding('@routingAnimation') private routing: any;

  constructor(private titleService:Title) {
    this.titleService.setTitle("SavedWorld - Стримеры");
  }
  ngOnInit(): void {
  }

}
