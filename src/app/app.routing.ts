import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "../pages/main/main.component";
import {InformationComponent} from "../pages/information/information.component";
import {RulesComponent} from "../pages/rules/rules.component";
import {StreamComponent} from "../pages/stream/stream.component";
import {ServersComponent} from "../pages/servers/servers.component";
import {LoginComponent} from "../pages/auth/login/login.component";
import {ChatComponent} from "../pages/chat/chat.component";
import {AngularFireAuthGuard, redirectUnauthorizedTo} from "@angular/fire/compat/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login'])
const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'play',
    component: InformationComponent,
  },
  {
    path: 'servers',
    component: ServersComponent,
  },
  {
    path: 'rules',
    component: RulesComponent,
  },
  {
    path: 'stream',
    component: StreamComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {path: '', redirectTo: 'main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
