import { Component, OnInit } from '@angular/core';
import { ItemMenu } from 'src//app/core/constants/item-menu';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
})
export class AppMenuComponent implements OnInit {
  items: ItemMenu[] = [];
  showOnlyIcon: boolean = false;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.resizeListener();
    });
    this.resizeListener();
    this.items = [
      {
        label: 'Home',
        icon: 'fa-solid fa-house',
        routerLink: ['/app/home'],
      },
      {
        label: 'Directivas',
        icon: 'fa-solid fa-asterisk',
        routerLink: ['/app/directives/definition'],
      },
      {
        label: 'Pipes',
        icon: 'fa-solid fa-code',
        routerLink: ['/app/pipes'],
      },
      {
        label: 'Detector de cambios',
        icon: 'fa-solid fa-magnifying-glass',
        routerLink: ['/app/change-detector'],
      },
      {
        label: 'Ciclo de vida',
        icon: 'fa-solid fa-arrows-spin',
        routerLink: ['/app/life-cycle'],
      },
      {
        label: 'Encapsulación',
        icon: 'fa-solid fa-capsules',
        routerLink: ['/app/encapsulation'],
      },
      {
        label: 'Lazy loading',
        icon: 'fa-solid fa-spinner',
        routerLink: ['/app/lazy-loading'],
      },
      {
        label: 'Enrutamiento',
        icon: 'fa-solid fa-route',
        routerLink: ['/app/routing'],
      },
      {
        label: 'Formularios',
        icon: 'fa-brands fa-wpforms',
        routerLink: ['/app/forms'],
      },
      {
        label: 'HTPP',
        icon: 'fa-solid fa-server',
        routerLink: ['/app/http-client'],
      },
    ];
  }

  resizeListener() {
    this.showOnlyIcon =
      window.innerWidth <= 999 ? (this.showOnlyIcon = true) : false;
  }
}
