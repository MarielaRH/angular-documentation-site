import { Component, OnInit } from '@angular/core';
import { TABS_DIRETIVES } from 'src/app/shared/constants/directives-constants/directives-tabs.const';

@Component({
  selector: 'definition-directives',
  templateUrl: './definition-directives.component.html',
  styleUrls: ['./definition-directives.component.scss']
})
export class DefinitionDirectivesComponent implements OnInit {
  directiveTypes = TABS_DIRETIVES;

  constructor() { }

  ngOnInit(): void {
  }

}
