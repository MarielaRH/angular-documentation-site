import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shorcut',
  templateUrl: './shorcut.component.html',
  styleUrls: ['./shorcut.component.scss']
})
export class ShorcutComponent implements OnInit {

  @Input() nextReading: {
    name: string,
    path: string
  }

  @Input() back = false;
  @Input() next = false;

  @Output() tabSelected = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  moveTab(next: any){
    this.tabSelected.emit({index: next.index});
  }
  

}
