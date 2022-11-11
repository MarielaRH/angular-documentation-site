import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TooltipModule } from "primeng/tooltip";
import { TabViewModule } from "primeng/tabview";
import { AccordionModule } from "primeng/accordion";
import { FieldsetModule } from "primeng/fieldset";
import { PanelModule } from "primeng/panel";
import {DividerModule} from 'primeng/divider';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { RadioButtonModule } from 'primeng/radiobutton';
import {InputSwitchModule} from 'primeng/inputswitch';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TooltipModule,
    TabViewModule,
    AccordionModule,
    FieldsetModule,
    PanelModule,
    DividerModule,
    MessagesModule,
    MessageModule,
    RadioButtonModule,
    InputSwitchModule
  ],
  exports: [
    TooltipModule,
    TabViewModule,
    AccordionModule,
    FieldsetModule,
    PanelModule,
    DividerModule,
    MessagesModule,
    MessageModule,
    RadioButtonModule,
    InputSwitchModule
  ],
})
export class PrimengModule {}
