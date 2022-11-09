import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrismCodeComponent } from './components/prism-code/prism-code.component';
import { AnimationTextDirective } from './directives/animation-text.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { ScrollContainerDirective } from './directives/scroll-container.directive';
import { ShorcutComponent } from './components/shorcut/shorcut.component';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { TabComponentComponent } from './components/tab-component/tab-component.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PrismCodeComponent,
    AnimationTextDirective,
    HighlightDirective,
    ScrollContainerDirective,
    ShorcutComponent,
    ItemCardComponent,
    TabComponentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    PrismCodeComponent,
    AnimationTextDirective,
    HighlightDirective,
    ScrollContainerDirective,
    ShorcutComponent,
    ItemCardComponent,
    TabComponentComponent
  ]
})
export class SharedModule { }
