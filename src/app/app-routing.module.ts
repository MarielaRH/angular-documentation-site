import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainPageComponent } from './core/containers/layout/app-main-page/app-main-page.component';

const routes: Routes = [
   {
    path: "",
    redirectTo: "app",
    pathMatch: "full",
  },
  {
    path: "app",
    component: AppMainPageComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./core/core.module").then((m) => m.CoreModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
