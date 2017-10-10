import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre="Alexis";
  nombre2="jesus alEXis escALAnte anDUjo"
  arreglo=[1,2,3,4,5,6,7,8,9,10];
  PI= Math.PI;
  a= 0.234;
  salario=1234.5;
  heroe={
    nombre:"Logan",
    clave:"Wolverine",
    edad:500,
    direccion:{
      calle:"Primera",
      casa:"19"
    }
  }

  valorPromesa = new Promise((resolve,reject)=>{

    setTimeout( ()=>resolve('Llego la data!'),3500);
  })

  fecha= new Date();

  video:string="CD-E-LDc384";
  activar:boolean=true;
  btntext:string = "Ver"

  password(){
    this.activar=!this.activar;
    if (this.activar) {
        this.btntext = "Ver";
    }else{
      this.btntext = "Ocultar";
    }
  }

}
