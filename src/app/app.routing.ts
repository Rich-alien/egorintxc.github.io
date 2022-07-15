import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "../pages/main/main.component";
import {InformationComponent} from "../pages/information/information.component";
import {RulesComponent} from "../pages/rules/rules.component";
import {StreamComponent} from "../pages/stream/stream.component";
import {ServersComponent} from "../pages/servers/servers.component";

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
  {path: '', redirectTo: 'main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
