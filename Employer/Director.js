import { Employers } from "./Employers.js";

export class Director extends Employers{

  constructor(name, salary, cpf){
    super(name, salary, cpf)

    this._bonus = 2.0;
  }

  
}