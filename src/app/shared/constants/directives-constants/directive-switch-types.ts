export const DIRECTIVE_NGSWITCH = [
    {
    name: '[ngSwitch]',
    content: `Directiva de atributo que recibe como parámetro un valor, este parámetro será comparado en cada uno de los ngSwitchCase definidos dentro del ngSwitch.`,
  },
  {
    name: '*ngSwitchCase',
    content: `Directiva estructural que contiene un valor que será usado para comparar, si el valor recibido en ngSwitch coincide con el del ngSwitchCase, se pintará lo que esté dentro del ngSwitchCase.`,
  },
  {
    name: '*ngSwitchDefault',
    content: `Directiva estructural que se mostrará únicamente cuando el valor recibido en ngSwitch no coincida con ninguno de los ngSwitchCase establecidos.`,
  },
]