import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { PipesComponent } from './components/pipes/pipes.component';
import { ChangeDetectorComponent } from './components/change-detector/change-detector.component';
import { LifeCycleComponent } from "./components/life-cycle/life-cycle.component";
import { EncapsulationComponent } from "./components/encapsulation/encapsulation.component";
import { LazyLoadingComponent } from './components/lazy-loading/lazy-loading.component';
import { RoutingComponent } from './components/routing/routing.component';
import { FormsComponent } from "./components/forms/forms.component";
import { HttpClientComponent } from './components/http-client/http-client.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "directives",
    component: DirectivesComponent,
  },
    {
    path: "directives/:tab",
    component: DirectivesComponent,
  },
  {
    path: "pipes",
    component: PipesComponent,
  },
  {
    path: "change-detector",
    component: ChangeDetectorComponent,
  },
  {
    path: "life-cycle",
    component: LifeCycleComponent,
  },
  {
    path: "encapsulation",
    component: EncapsulationComponent,
  },
  {
    path: "lazy-loading",
    component: LazyLoadingComponent,
  },
  {
    path: "routing",
    component: RoutingComponent,
  },
  {
    path: "forms",
    component: FormsComponent,
  },
  {
    path: "http-client",
    component: HttpClientComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
