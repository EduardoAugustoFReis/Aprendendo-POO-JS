export class AuthenticationSystem {

  static login(authenticate, password){
    
    if(AuthenticationSystem.isAuthenticate(authenticate)){
      return authenticate.auth(password);
    }
  
    return false;
  };
  
  static isAuthenticate(authenticate){
    return "auth" in authenticate && authenticate.auth instanceof Function
  };

}