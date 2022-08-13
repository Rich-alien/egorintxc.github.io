import {NgModule} from "@angular/core";
import {MainComponent} from "./main/main.component";
import {ComponentsModule} from "../components/components.module";
import {InformationComponent} from "./information/information.component";
import {HeaderComponent} from "./header/header.component";
import {NewsComponent} from "./news/news.component";
import {RulesComponent} from "./rules/rules.component";
import {CommonModule} from "@angular/common";
import {StreamComponent} from "./stream/stream.component";
import {RouterModule} from "@angular/router";
import {StepsComponent} from "./information/components/steps/steps.component";
import {ServersComponent} from "./servers/servers.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularSvgIconModule} from "angular-svg-icon";
import {LoginComponent} from "./auth/login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ChatComponent} from "./chat/chat.component";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ComponentsModule,
    CommonModule,
    RouterModule,
    AngularSvgIconModule,
    ReactiveFormsModule
  ],
  declarations: [
    MainComponent,
    InformationComponent,
    HeaderComponent,
    NewsComponent,
    RulesComponent,
    StreamComponent,
    StepsComponent,
    ServersComponent,
    LoginComponent,
    ChatComponent
  ],
  exports: [MainComponent]
})
export class PagesModel {
}
