import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tab-component',
  templateUrl: './tab-component.component.html',
  styleUrls: ['./tab-component.component.scss']
})
export class TabComponentComponent implements OnInit {
  @Input() tab: any;
  @Input() routerLink: string = "/app/directives/components"

  @Output() tabSelected = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(){
    // this.router.navigate([this.routerLink]);
    this.tabSelected.emit(this.tab.index);
  }

}
