export const STRUCTURAL_DIRECTIVE = {
  codeHtmlNgIf: `
    <div class="col-12 flex flex-column">

        //Input switch que maneja el estado
        <p-inputSwitch [(ngModel)]="checked"></p-inputSwitch>

        //Párrafo que se renderiza si el switch está activo (estado = true)
        <p *ngIf="checked; else inactive" class="flex align-items-center"> Switch Activo! </p>

        //Párrafo que se renderiza si el switch está inactivo (estado = false)
        <ng-template #inactive>
             <p class="flex align-items-center"> Switch Inactivo! </p>
        </ng-template>
    </div>
  `,
  codeTsNgIf: `
   // Dentro del archivo ts definimos una variable booleana encargada de almacenar el cambio de estado
    export class StructuralDirectiveComponent implements OnInit {
        checked: boolean = false;

        constructor() { }

        ngOnInit(): void {
        }

    }
  `,
  codeTsNgFor: `
   // Dentro del archivo ts definimos un array con los códigos hexadecimales de los colores que usaremos
    export class StructuralDirectiveComponent implements OnInit {
        colors: string[] = ['#F2508B','#7D6BF2','#302E59', '#81C784'];

        constructor() { }

        ngOnInit(): void {
        }

    }
  `,
  codeHtmlNgFor: `
    <div class="col-12 grid">
      // iteramos el array color definido previamente en el archivo ts del componente
      <div class="col" *ngFor="let color of colors">
        // Hacemos uso de la directiva de atributo ngStyle para que cada item tome el color correspondiente.
        // Con la clase item-ng-for aplicamos algunos estilos para que cada item se vea mejor
        <div [ngStyle]="{'background-color': color}" class="p-3 text-center item-ng-for">
          {{color}}
        </div>
      </div>
    </div>
  `,
  codeTsNgSwitch: `
   // Dentro del archivo ts definimos un array con los dias de la semana
    export class StructuralDirectiveComponent implements OnInit {
         days: string[] = ['Lunes', 'Martes','Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

        constructor() { }

        ngOnInit(): void {
        }

    }
  `,
  codeHtmlNgSwitch: `
    <div class="col-12 grid justify-content-center">
     // Colocamos el dropdown con la lista que anteriormente definimos en el archivo .ts
      <p-dropdown [options]="days" [(ngModel)]="selectedDay"></p-dropdown>

      //Configuramos la directiva ngSwitch y la ligamos a la selectedDay que es donde se almacenará la selección del dropdown
      <div
        [ngSwitch]="selectedDay"
        class="col-12 flex justify-content-center mt-4"
      >

        // Definimos cada caso que deseamos controlar y el contenido se va a mostrar para cada caso.

        // Por ejemplo acá, si selectedDay es igual a "Lunes" que es la primera posición de la lista que de días definida en el archivo .ts
        // Se mostrará "Vamos tu puedes, recibe el inicio de semana con la mejor actitud!".
        <p *ngSwitchCase="days[0]" class="animate__animated animate__zoomIn">
          Vamos tu puedes, recibe el inicio de semana con la mejor actitud!
        </p>
        <p *ngSwitchCase="days[1]" class="animate__animated animate__zoomIn">
          La semana avanza rápido, recuerda ponerte metas para obtener mejores
          resultados.
        </p>
        <p *ngSwitchCase="days[2]" class="animate__animated animate__zoomIn">
          Ya estamos cerca del fin de semana!! Tu puedes, enfócate en tus
          tareas!
        </p>
        <p *ngSwitchCase="days[3]" class="animate__animated animate__zoomIn">
          Alto ahí! Bebe un café y respira profundo... Ya lo hiciste?...
          Perfecto ya puedes continuar con tus labores.
        </p>
        <p *ngSwitchCase="days[4]" class="animate__animated animate__zoomIn">
          Este es el día que a todos nos gusta. Verifica si lograste cumplir las
          metas que definiste para esta semana y trata de dejar todo en orden
          para la proxima semana!.
        </p>

        //Definimos un caso por defecto que se ejecutará asi no se cumple ninguno de los casos anteriores
        <p *ngSwitchDefault class="animate__animated animate__zoomIn">
          Relájate, descansa y disfruta de la paz del fin de semana, Nos vemos
          el lunes!
        </p>
      </div>
    </div>
  `,
  angularStructure: `
  // Código transpilado por Angular
  <ng-template  *ngIf="variable">
    <div>
      <p>Hola mundo</p>
    </div>
  </ng-template>
  `,
  html: "html",
  ts: "typescript",
  scss: "scss",
  css: "css",
};
