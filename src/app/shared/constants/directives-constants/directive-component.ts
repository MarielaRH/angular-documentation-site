export const COMPONENTS_FILES_DIRECTIVES = [
  {
    name: 'TYPESCRIPT',
    content: `Archivo que contiene la lógica del component. Dentro de este archivo se podrá encontrar el decorador @Componente, en el cual se definen los nombre de los archivos
       de vista y estilos que irán sociados al componente.`,
    icon: '../../../../assets/layout/icons/gear.png',
  },
  {
    name: 'HTML',
    content:
      `Archivo que contiene toda la estructura de la vista del componente al que esté enlazado. Dentro de la vista se podrá acceder a las variables y funciones que hayan 
       sido definidas dentro del archivo typescript.`,
    icon: '../../../../assets/layout/icons/code.png',
  },
  {
    name: 'CSS',
    content: 'Contiene todos los estilos que serán utilizados dentro del archivo HTML que está enlazado directamente al componente',
    icon: '../../../../assets/layout/icons/puzzle.png',
  },
];
