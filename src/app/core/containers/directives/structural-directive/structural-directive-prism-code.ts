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
  codeTsNgIf:`
   // Dentro del archivo ts definimos una variable booleana encargada de almacenar el cambio de estado
    export class StructuralDirectiveComponent implements OnInit {
        checked: boolean = false;

        constructor() { }

        ngOnInit(): void {
        }

    }
  `,
  html: 'html',
  ts: 'typescript',
  scss: 'scss',
  css: 'css',
};
