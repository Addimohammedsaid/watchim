import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./core/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./core/core.module").then((m) => m.CoreModule),
  },
  {
    path: "streaming",
    loadChildren: () =>
      import("./streaming/streaming.module").then((m) => m.StreamingModule),
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule),
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      onSameUrlNavigation: "reload",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
