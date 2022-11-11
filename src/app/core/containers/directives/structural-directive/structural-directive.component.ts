import { Component, OnInit } from '@angular/core';
import { STRUCTURAL_DIRECTIVE } from './structural-directive-prism-code';

@Component({
  selector: 'structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent implements OnInit {
  checked: boolean = false;
  code = STRUCTURAL_DIRECTIVE;

  constructor() { }

  ngOnInit(): void {
  }

}
