import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[scrollContainer]'
})
export class ScrollContainerDirective implements OnInit{

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.resizeContainer();
    this.el.nativeElement.style.overflowY = 'auto';
    this.el.nativeElement.style.overflowX = 'hidden';
    this.el.nativeElement.style.padding = '15px'
  }

  @HostListener('window:resize')resizeContainer(){
    this.el.nativeElement.style.height = `${window.innerHeight - 194}px`
  }

}
