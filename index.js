import { Manager} from "./Employer/Manager.js";
import { Director } from "./Employer/Director.js";
import { AuthenticationSystem } from "./AuthenticationSystem.js";

const director = new Director("Alex", 8000, 123456789);
director.CreatePassword("123456");

const manager = new Manager("Alice", 4000, 999999999);

const isOn = AuthenticationSystem.login(director, "123456");

console.log(isOn);