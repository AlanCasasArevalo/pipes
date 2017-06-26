import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'alan casas';

  nombre2 = "Alan caSAs arEVaLo"

  array = [1,2,3,4,5,6,7,8,9,10]

  PI = Math.PI

  porcentaje:number = 0.234

  salario = 1234.54321

  heroe = {
    nombre:"Logan",
    clave:"Wolverine",
    edad:"200",
    direccion: {
      calle: "Granada",
      numero: "104"
    }

  }

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Llego el dato"), 1000);
  })

  // Para poner las fechas en español hay que configurar el app.module.ts. LOCALE_ID y en providers.
  fecha = new Date()

  video: "Btvxvr64Nkg" 

}
