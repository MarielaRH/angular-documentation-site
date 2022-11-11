import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './components/directives/directives.component';
import { EncapsulationComponent } from './components/encapsulation/encapsulation.component';
import { FormsComponent } from './components/forms/forms.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientComponent } from './components/http-client/http-client.component';
import { LazyLoadingComponent } from './components/lazy-loading/lazy-loading.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { RoutingComponent } from './components/routing/routing.component';
import { ChangeDetectorComponent } from './components/change-detector/change-detector.component';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AppMenuComponent } from './containers/layout/app-menu/app-menu.component';
import { AppMainPageComponent } from './containers/layout/app-main-page/app-main-page.component';
import { PrimengModule } from '../primeng/primeng.module';
import { DefinitionDirectivesComponent } from './containers/directives/definition-directives/definition-directives.component';
import { AttributeDirectiveComponent } from './containers/directives/attribute-directive/attribute-directive.component';
import { ComponentsDirectiveComponent } from './containers/directives/components-directive/components-directive.component';
import { StructuralDirectiveComponent } from './containers/directives/structural-directive/structural-directive.component';



@NgModule({
  declarations: [
    DirectivesComponent,
    EncapsulationComponent,
    FormsComponent,
    HomeComponent,
    HttpClientComponent,
    LazyLoadingComponent,
    LifeCycleComponent,
    PipesComponent,
    RoutingComponent,
    ChangeDetectorComponent,
    AppMainPageComponent,
    AppMenuComponent,
    AttributeDirectiveComponent,
    DefinitionDirectivesComponent,
    ComponentsDirectiveComponent,
    StructuralDirectiveComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    PrimengModule,
  ]
})
export class CoreModule { }
