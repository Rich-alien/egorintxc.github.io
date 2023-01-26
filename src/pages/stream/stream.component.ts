import {Component, HostBinding, OnInit} from '@angular/core';
import {RoutingAnimation} from "../../shared/animations/routing-animation";
import {Title} from "@angular/platform-browser";
import {TwitchEmbed, TwitchEmbedLayout} from "twitch-player";
import {SLIDE_LIST} from "../../consts/const";

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.less'],
  animations: [RoutingAnimation],
})
export class StreamComponent implements OnInit {
  @HostBinding('@routingAnimation') private routing: any;
  public currentPosition: number = 0;
  embed: any;
  public slideList = SLIDE_LIST;

  constructor(private titleService: Title) {
    this.titleService.setTitle("SavedWorld - Стримеры");
  }

  ngOnInit(): void {
    this.embed = new TwitchEmbed('twitch-player', {
      width: 562,
      height: 317,
      channel: this.slideList[this.currentPosition].id,
      layout: TwitchEmbedLayout.VIDEO,
      parent: ["embed.example.com", "othersite.example.com"]
    });
    // console.log(this.embed);
  }

  nextPerson() {
    this.currentPosition === this.slideList.length - 1 ? this.currentPosition = 0 : this.currentPosition++;
    this.embed.setChannel(this.slideList[this.currentPosition].id);
  }

  rollBackPerson() {
    this.currentPosition === 0 ? this.currentPosition = this.slideList.length - 1 : this.currentPosition--;
    this.embed.setChannel(this.slideList[this.currentPosition].id);

  }

  getTwitchUrlByID(id: string): string {
    return 'https://www.twitch.tv/' + id;
  }

  getImageUrlByID(id: string) {
    return 'assets/streamers/' + id + '.png'
  }
}
