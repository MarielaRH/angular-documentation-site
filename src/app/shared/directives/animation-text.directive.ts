import { Directive, ElementRef, HostListener, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[animationText]'
})
export class AnimationTextDirective{

  constructor(private el: ElementRef) {
    this.animateText('no-animation-text');
  }

  //Evento que se dispara cuando el mouse entra al elemento
  @HostListener('mouseenter') onMouseEnter(){
    this.animateText('animation-text');
  }

  //Evento que se dispara cuando el mouse sale del elemento
  @HostListener('mouseleave') onMouseLeave(){
    this.animateText('no-animation-text');
  }

  private animateText(className: string){
    //Agrega las clases correspondientes al elemento para que se aplique la animación
    this.el.nativeElement.className = className;
  }
}
