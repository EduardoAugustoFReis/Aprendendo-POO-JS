import { Employers } from "./Employers.js";

export class Manager extends Employers{

  constructor(name, salary, cpf){
    super(name, salary, cpf)

    this._bonus = 1.1;
  }

}