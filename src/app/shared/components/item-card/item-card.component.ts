import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteInformation } from '../../constants/route-information.conts';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() tab: any;
  @Input() showLink: boolean = false;
  @Input() showIcon: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToTab(tab: any){
    this.router.navigate([`${RouteInformation.directives}/${tab.path}`]);
  }

}

