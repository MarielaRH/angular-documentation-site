import { Component, OnInit } from '@angular/core';
import { COMPONENTS_FILES_DIRECTIVES } from 'src/app/shared/constants/directives-constants/directive-component';
import { COMPONENT_DIRECITVE } from './component-directive-prism-code';

@Component({
  selector: 'components-directive',
  templateUrl: './components-directive.component.html',
  styleUrls: ['./components-directive.component.scss']
})
export class ComponentsDirectiveComponent implements OnInit {
  componentsFile = COMPONENTS_FILES_DIRECTIVES;
  componentsFileExamples = COMPONENT_DIRECITVE;

  constructor() { }

  ngOnInit(): void {
  }

}
