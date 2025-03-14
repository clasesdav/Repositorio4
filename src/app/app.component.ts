import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Repositorio4';
  nombre: string ='MiNombre ejemplo';
  nombre2: string ='MiNombre2 ejemplo2';
  PI:number=Math.PI;
  fecha:Date=new Date();
}
