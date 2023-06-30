export interface ingrObj {
  name: string,  
}

export interface singleRecipeObj {
  ingredients: ingrObj[],
  instructions: string,
  title: string,
  description: string
}