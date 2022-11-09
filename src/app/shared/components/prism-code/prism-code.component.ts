import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import * as Prism from 'prismjs'
@Component({
  selector: 'prism-code',
  templateUrl: './prism-code.component.html',
  styleUrls: ['./prism-code.component.scss']
})
export class PrismCodeComponent implements AfterViewInit{
  @ViewChild('codeEle') codeEle : ElementRef;
  @Input() language : string;
  @Input() code: string;
  @Input() className: string = '';

  constructor() { }

  ngAfterViewInit(): void {
    Prism.highlightElement(this.codeEle.nativeElement);
  }
}
