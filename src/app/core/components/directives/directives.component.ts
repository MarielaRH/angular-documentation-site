import { Component, Host, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteInformation } from 'src/app/shared/constants/route-information.conts';
import { TABS_DIRETIVES } from '../../../shared/constants/directives-constants/directives-tabs.const';
@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  tabsDirectives = TABS_DIRETIVES;
  RouterInformation = RouteInformation;
  activeIndex = 0;

  @ViewChild('tv') tv: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(({tab}) => {
      this.tabsDirectives.forEach(directiveTab => {
        if(tab && directiveTab.path === tab ){
          this.activeIndex = this.tabsDirectives.indexOf(directiveTab);
        }
      })
    })
  }

  onChangeTab(param: any){
    this.activeIndex = param.index;
    this.router.navigate([`${RouteInformation.directives}/${this.tabsDirectives[param.index].path}`]);
  }

  changeIndexSelected(index: number){
    this.activeIndex = index
  }
}