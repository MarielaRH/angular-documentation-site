import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  //Se declara la propiedad appHighlight (propiedad que recibirá el color seleccionado por el usuario)
  @Input() appHighlight = '';
  //Agregamos una propiedad de entrada que capturará el color del texto;
  @Input() colorFont = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseenter(){
    this.setColorBackground(this.appHighlight, this.colorFont, 'directive-hightlight-hover');
  }

  @HostListener('mouseleave') onMouseleave(){
    this.setColorBackground('transparent','white', 'directive-hightlight-leave');
  }

  private setColorBackground(backgroundColor: string, color: string, className: string){
    //Se asigna color al background del texto y el color de la letra del texto y se configuran otros estilos
    this.el.nativeElement.style.backgroundColor = backgroundColor;
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.className = className + ' p-3';
  }

}