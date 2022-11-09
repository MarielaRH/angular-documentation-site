import { Component, OnDestroy, OnInit } from '@angular/core';
import { DIRECTIVES } from './directives-prism-code.const';

@Component({
  selector: 'attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.scss'],
})
export class AttributeDirectiveComponent implements OnInit{
  code = DIRECTIVES;
  color = {
    key: 'default',
    background: '#f9d7f2',
    font: '#6f4936',
  };

  colors = [
    {
      key: 'amarillo',
      background: '#f9d390',
      font: '#6f4936',
    },
    {
      key: 'azul',
      background: '#326abe',
      font: '#caffbf',
    },
    {
      key: 'green',
      background: '#40b180',
      font: 'black',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

}
