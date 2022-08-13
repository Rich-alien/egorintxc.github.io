import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {PagesModel} from "../pages/pages.model";
import {AppRoutingModule} from "./app.routing";
import {ComponentsModule} from "../components/components.module";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModel,
    ComponentsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
