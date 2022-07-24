// Interface é a forma de colocar uma tipagem fora
export interface ITarefa {
  task: string,
  time: string,
  selected?: boolean,
  completed?: boolean,
  id?: string
}