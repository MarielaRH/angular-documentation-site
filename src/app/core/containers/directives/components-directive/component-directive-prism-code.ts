export const COMPONENT_DIRECITVE = [
    {
       codeExmaple:`
       import { Component, OnInit } from '@angular/core';

       // Dentro de la directiva @Component se deben colocar el selector por el cual se podrá acceder al componente,
       // la url del archivo html que contendrá la vista y la url del archivo css que contendrá los estilos

       @Component({
       selector: 'app-example',
       templateUrl: './example.component.html',
       styleUrls: ['./example.component.css']
       })

       export class ExampleComponent implements OnInit {
          greeting: string = "Hello world!"

          constructor() {}

          ngOnInit(): void {}
       }
       `,
       type: 'typescript',
       legend: 'Ejemplo de archivo typescript'
    },
    {
        codeExmaple:`
        <div class="card">
            <p>Este es un ejemplo de un archivo html</p>
            <p>{{greeting}}</p>
        </div>
        `,
        type: 'html',
        legend: 'Ejemplo de archivo html'
    },
    {
        codeExmaple:`
        .card {
            height: 100px;
            width: 120px;
            border-radius: 10px;
            background-color: white;
            color: black;
        }
        `,
        type: 'css',
        legend: 'Ejemplo de archivo css'
    }
]