import { AdminModule } from "./admin/admin.module";
import { StreamingModule } from "./streaming/streaming.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestore } from "@angular/fire/firestore";
import { environment } from "src/environments/environment";
import { DisqusModule } from "ngx-disqus";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { AngularFireAnalyticsModule } from "@angular/fire/analytics";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    DisqusModule.forRoot("watchim"),
    AppRoutingModule,
    AngularFireAnalyticsModule,
    SharedModule,
    AdminModule,
    CoreModule,
    StreamingModule,
  ],
  providers: [
    AngularFirestore,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
