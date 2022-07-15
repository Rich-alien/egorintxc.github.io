import {Component, HostBinding} from '@angular/core';
import {RoutingAnimation} from "../../shared/animations/routing-animation";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.less'],
  animations: [RoutingAnimation],
})
export class RulesComponent {
  @HostBinding('@routingAnimation') private routing: any;
  constructor(private titleService:Title) {
    this.titleService.setTitle("SavedWorld - Правила");
  }
  listOfRules: Array<{ id: number; title: string, subTitle: string }> = [
    {id:1,title: 'Мы за равенство',subTitle:'У нас все игроки равны. Вне зависимости от служебного положения или количества финансовой поддержки. Мы защищаем интересы абсолютно каждого игрока на нашем сервере'},
    {id:2,title: 'Мы за адекватность',subTitle:'Уважайте свои интересы и интересы других игроков.  Не ставьте себя выше остальных в любом контексте. Чрезмерная токсичность и неадекватность у нас неприемлема, как и использования бан-вордов в лексиконе'},
    {id:3,title: 'Мы против гриферства',subTitle:'Не допускайте акта нанесения морального или материального ущерба в сторону игроков. А так же, любого вида воровства, издевательств и порчи территорий, принадлежащей нашему комьюнити'},
    {id:4,title: 'Мы против абузов',subTitle:'Именно поэтому для каждого сервера сделаны свои правила и есть разного рода ограничения. Всё это сделано для привнесения баланса в мультиплеерный режим игры'},
    {id:5,title: 'Мы против читерства',subTitle:'Использование любого вида читов и программ для получения приемущества в PVP, PVE, координации, поиска ресурсов, взлома аккаунтов и т.д  влечёт за собой моментальный бан\n'},
  ]
}
