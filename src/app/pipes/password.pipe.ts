import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activar:boolean = true): string {
    let password = "";
    if (activar) {
        for (let i = 0; i < value.length; i++) {
            password+= "*";
        }
        return password;
    }else{
      return value;
    }
  }

}
