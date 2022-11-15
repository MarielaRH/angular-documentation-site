import { Component, OnInit } from '@angular/core';
import { DIRECTIVE_NGSWITCH } from 'src/app/shared/constants/directives-constants/directive-switch-types';
import { STRUCTURAL_DIRECTIVE } from './structural-directive-prism-code';

@Component({
  selector: 'structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent implements OnInit {
  checked: boolean = false;
  selectedDay: string = '';
  code = STRUCTURAL_DIRECTIVE;
  ngSwitchTypes = DIRECTIVE_NGSWITCH;
  colors: string[] = ['#F2508B','#7D6BF2','#302E59', '#81C784'];
  days: string[] = ['Lunes', 'Martes','Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  constructor() { }

  ngOnInit(): void {
  }

}
