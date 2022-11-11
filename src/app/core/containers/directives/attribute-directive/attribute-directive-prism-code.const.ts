export const ATTRIBUTE_DIRECTIVE = {
  dNgClass: `
    // Las clases en ngClass pueden asignarser por medio de:

    // Strings
    <p [ngClass]=" 'background-style' ">...</p>

    // Array de strings
    <p [ngClass]="[ 'background-style', 'color-font' ]">...</p>

    // Objetos (clase/condicional)
    <p [ngClass]="{ 'background-style' : true, 'color-font' : false }">...</p>
    <p [ngClass]="{ 'background-style color-font' : true }">...</p>
    `,
  dNgStyle: `
    // Los estilos pueden asignarse de las siguientes maneras:

    // Objeto clave/valor sin sufijo
    <p [ngStyle]=" { 'font-style' : styleExp } ">...</p>

    // Objeto clave/valor con sufijo
    <div [ngStyle]=" { 'max-width.px' : widthExp } ">...</div>

    // Colección de objetos clave/valor
    <div [ngStyle]="objCollection">...</div>
    `,
  cliText: `
    ng generate directive animation-text
  `,
  dStructure: `
    import { Directive } from '@angular/core';
    @Directive({
    selector: '[appAnimationText]'
    })
    export class AnimationTextDirective {
        constructor() { }
    }
  `,
  dConstructor: `
    import { Directive } from '@angular/core';
    @Directive({
    selector: '[appAnimationText]'
    })
    export class AnimationTextDirective {
        constructor(private el : ElementRef) { }
    }`,
  dHostlistener: `
    @HostListener('nombre-evento') nombreMetodo(){
      // acciones
    }
  `,
  dComplete: `
    import { Directive, ElementRef, HostListener } from '@angular/core';

    @Directive({
      selector: '[appAnimationText]'
    })
    export class AnimationTextDirective {

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
  `,
  dClass: `
    .animation-text {
        color: #73e38f;
        cursor: pointer;
        font-size: 2rem;
        font-weight: 550;
        letter-spacing: 5px;
        transition: all 0.5s;
    }

    .no-animation-text {
        color: #f9d390;
        font-size: 2rem;
        font-weight: 550;
        letter-spacing: 0px;
        transition: all 0.6s;
    }
  `,
  dHtml: `
    <span appAnimationText> Pon el cursor sobre mi para activar la directiva!!!</span>
  `,
  dParams: `
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
      this.el.nativeElement.className = className;
    }

  }
  `,
  dParamsVar: `
    /** Se crea una variable llamada color la cual será la encargada de almacenar la selección
      * realizada por el usuario, además esta se inicializa con un color por defecto para el background y
      * la letra */
      color =
    {
      key: 'default',
      background: '#f9d7f2',
      font: '#6f4936'
    };

    colors = [
      {
        key: 'amarillo',
        background: '#f9d390',
        font: '#6f4936'
      },
      {
        key: 'azul',
        background: '#326abe',
        font: '#caffbf'
      },
      {
        key: 'green',
        background: '#40b180',
        font: 'black'
      },
    ]
  `,
  dParamsClass:`
  .directive-hightlight-hover{
      transition: all 0.3s;
      cursor: pointer;
      border-radius: 10px;
  }

  .directive-hightlight-leave{
      transition: all 0.2s;
      border-radius: 0px;
  }
  `,
  dParamsHtml: `
    /** Se crean radioinputs para que el usuario seleccione un item del array colors */
    <div class="grid justify-content-center">
        <p class="col-12 flex justify-content-center" >Selecciona un color para el fondo del texto</p>
        <div *ngFor="let item of colors" class="field-checkbox p-3">
            <p-radioButton [value]="item" [inputId]="item.key" name="colors" [(ngModel)]="color" [ngModelOptions]="{standalone: true}">
            </p-radioButton>
            <label [for]="item.key">{{item.key}}</label>
        </div>
    </div>

    //Se pasan los parámetros a la directiva
    <div class="flex justify-content-center p-3">
        <div class="p-3" [appHighlight]="color.background" [colorFont]="color.font">
          Pon el mouse sobre mí para ver el color de mi fondo!
        </div>
    </div>
  `,
  html: 'html',
  js: 'javascript',
  ts: 'typescript',
  scss: 'scss',
  css: 'css',
};

// d = directive
