export class Employers{
 
  constructor(name, salary, cpf){
    this.name = name;
    this.salary = salary; 
    this.cpf =  cpf;
    
    this._bonus = 1;
    this._password;
  }

  auth(password){
    return password == this._password;
  };
  
  CreatePassword(password){
    this._password = password;
  };

}