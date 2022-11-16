import { Injectable } from '@angular/core';
import { firebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  //metodo para aviso de errores
  codeError(code: string){
    switch (code){
      // email en uso
      case firebaseCodeErrorEnum.emailAlreadyInUse:
        return 'El usuario ya existe'
      // contraseña debil
      case firebaseCodeErrorEnum.passwordWeak:
        return 'La contraseña debe contener 6 caracteres'
      // email invalido
      case firebaseCodeErrorEnum.invalidEmail:
        return 'Mail invalido'
      // contraseña incorrecta
      case firebaseCodeErrorEnum.wrongPassword:
        return 'Contraseña incorrecta'
        // usuario no encontrado
      case firebaseCodeErrorEnum.userNotFound:
        return 'Contraseña incorrecta'
        // usuario no encontrado
      case firebaseCodeErrorEnum.missingMail:
        return 'Falta poner un mail'
      // comodin
      default:
        return 'error desconocido'
    }
  }
}
